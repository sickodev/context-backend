import { Hono } from "hono";
import { StatusCodes } from "http-status-codes";
import { generate, getContext } from "../handlers/context";


const context = new Hono();

context.get("/", getContext)
context.post("/", generate);

export default context;
