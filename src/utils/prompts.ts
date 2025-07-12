export type PromptMode = 'summarize' | 'explain' | 'translate' | 'custom' | 'system'

const templates: Record<PromptMode, string> = {} as any;
const promptFiles = import.meta.glob('../templates/*.txt', {
    query: '?raw',
    eager: true,
})

let systemPrompt: string = '';

for (const path in promptFiles) {
    const key = path.split('/').pop()?.replace('.txt', '') as PromptMode;
    const fileContent = promptFiles[path];

    let content: string;
    if (typeof fileContent === 'string') {
        content = fileContent;
    } else if (fileContent && typeof fileContent === 'object' && 'default' in fileContent) {
        content = (fileContent as any).default;
    } else {
        continue;
    }

    if (key === 'system') {
        systemPrompt = content;
    } else {
        templates[key] = content;
    }
}

export function getSystemPrompt(): string {
    return systemPrompt;
}

export function buildPrompt(
    mode: PromptMode,
    text: string,
    language?: string,
    customPrompt?: string
): string {
    const template = templates[mode];
    if (!template) {
        throw new Error(`Prompt template for mode "${mode}" not found`);
    }

    if (typeof template !== 'string') {
        throw new Error(`Prompt template for mode "${mode}" is not a string: ${typeof template}`);
    }

    return template
        .replace(/\{\{text\}\}/g, text)
        .replace(/\{\{language\}\}/g, language || "")
        .replace(/\{\{customPrompt\}\}/g, customPrompt || "");
}
