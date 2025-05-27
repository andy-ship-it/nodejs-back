import express from 'express';
import Router from "./router";
import router from "./router";
const app = express();

app.use('/api', router);

export default app;