import { AppDataSource } from './database/data-source';
import express, {Application } from 'express';
import 'dotenv/config';
import { json, raw, text, urlencoded } from "body-parser";
import path from 'path';
import i18n from 'i18n';
import indexRouter from './routes';
import categoryRouter from './routes/categoryRouter'
import adminRouter from './routes/adminRouter';
//For env File 
const app: Application = express();
const port = process.env.PORT || 8000;
const language:string = process.env.LANGUAGE || "fr";
//setup i18n
i18n.configure({
  locales: ['en', 'vi','fr','cn'],
  directory: path.join(__dirname, '/locales')
})
i18n.setLocale(language);
console.log(i18n.__("hello"));
//setup bodyparser
app.use(json());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', indexRouter);
app.use('/admin',adminRouter)
app.post("/login", (req, res) => {
  res.send("welcome, " + req.body.username);
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});