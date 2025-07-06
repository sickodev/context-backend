import { Context } from "hono";
import { BlankEnv, BlankInput } from "hono/types";
import { StatusCodes } from "http-status-codes";
import { buildPrompt } from "../utils/prompts";
import { createResponse } from "../utils/llms";

export function getContext(c: Context<BlankEnv, "/", BlankInput>) {
    return c.json({
        status: StatusCodes.OK,
        message: "Get Endpoint Working Fine"
    }, StatusCodes.OK)
}

export async function generate(c: Context<BlankEnv, "/", BlankInput>) {
    const body = await c.req.json();

    const prompt = buildPrompt(body.mode, body.text, body.language || "", body.customPrompt || "");

    try {
        const response = await createResponse(prompt);
        return c.json({
            status: StatusCodes.OK,
            message: response.text
        }, StatusCodes.OK)
    } catch (error: any) {
        throw new Error(error.message)
    }
}
