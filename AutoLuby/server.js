const express =  require(`express`);
const db = require("./src/Database/models");
const accountRouter = require('./src/Routes/account.routes');
const vehiclesRouter = require('./src/Routes/vehicles.routes');

const app = express();
app.use(express.json());
app.use(accountRouter);
app.use(vehiclesRouter);


app.listen(3000, () => console.log("server is running!"));