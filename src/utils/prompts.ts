export type PromptMode = 'summarize' | 'explain' | 'translate' | 'custom'

const templates: Record<PromptMode, string> = {
    summarize: `Summarize the following text: \n\n{{text}}`,

    explain: `Explain the following as if I am 5 years old: \n\n{{text}}`,

    translate: `Translate the following into {{language}}: \n\n{{text}}`,

    custom: `{{customPrompt}}\n\n{{text}}`
}

export function buildPrompt(
    mode: PromptMode,
    text: string,
    language?: string,
    customPrompt?: string
):string{
    const template = templates[mode]
    if(!template)
        throw new Error(`Prompt template for mode "${mode}" not found`)

    return template
    .replace('{{text}}', text)
    .replace('{{language}}', language || "")
    .replace(`{{customPrompt}}`, customPrompt || "")
}
