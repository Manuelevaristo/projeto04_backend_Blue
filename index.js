require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routePersonages = require('./src/routes/personage.route');
const userRoute = require('./src/routes/user.route');
const authRoute = require('./src/routes/auth.route');
const swaggerRoute = require('./src/routes/swagger.route');
const connectToDatabase = require('./src/database/databasepersonage');
const port = process.env.PORT || 3000;
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors());
app.options('*', cors());

app.use('/', userRoute);
app.use('/', routePersonages);
app.use('/', swaggerRoute);
app.use('/', authRoute);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
