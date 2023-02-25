import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express()
const port = 5000

app.get('/', (req: Request, res: Response) => {
    res.send('Hello');
});

app.listen(port, () => console.log('Server running'));