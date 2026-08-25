export function hasApiKey(): boolean {
    return Boolean(
        process.env.API_KEY ||
        process.env.OPENAI_API_KEY ||
        process.env.GEMINI_API_KEY ||
        process.env.ANTHROPIC_API_KEY,
    );
}
