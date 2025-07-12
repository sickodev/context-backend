type EnvironmentVariables = {
    PORT: string,
    GEMINI_API_KEY: string
}

const env: EnvironmentVariables = {
    PORT: import.meta.env.PORT!,
    GEMINI_API_KEY: import.meta.env.VITE_GEMINI_API_KEY!
}

export default env;
