import { Hono } from 'hono'
import context from './routes/context'
import ping from './routes/ping';

const app = new Hono()

app.route("/api/context", context)
app.route("/ping", ping);

app.get('/', (c) => {
  return c.json({
    message: "Contex Back"
  })
})

export default app
