import { Hono } from "hono";
import { StatusCodes } from "http-status-codes";
import { getContext } from "../handlers/context";


const context = new Hono();

context.get("/", getContext)


export default context;
