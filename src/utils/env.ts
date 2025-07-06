type EnvironmentVariables = {
    PORT: string,
    GEMINI_API_KEY: string | undefined
}

const env:EnvironmentVariables = {
    PORT: import.meta.env.PORT!,
    GEMINI_API_KEY: ""
}

export default env;
