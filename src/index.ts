// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import express, { Application, Request, Response, NextFunction } from 'express'

const app: Application = express()
// eslint-disable-next-line @typescript-eslint/ban-types
const port: Number = 4000

app.use('/health', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ status: ' 200', data: 'hello world' })
})

// eslint-disable-next-line
app.listen(port, () => console.log(`Server is listening on port ${port}`))
