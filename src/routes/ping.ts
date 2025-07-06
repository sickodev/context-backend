import { Hono } from "hono";
import { getPing } from "../handlers/ping";

const ping = new Hono();

ping.get("/", getPing);


export default ping;
