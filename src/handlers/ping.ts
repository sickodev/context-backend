import { Context } from "hono";
import { BlankEnv, BlankInput } from "hono/types";
import { StatusCodes } from "http-status-codes";

export function getPing(c:Context<BlankEnv,"/",BlankInput>){
    return c.json({
        status: StatusCodes.OK,
        message: "Pinged..."
    }, StatusCodes.OK)
}
