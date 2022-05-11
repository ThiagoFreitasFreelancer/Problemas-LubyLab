const express =  require(`express`);
const db = require("./src/Database/models");
const { sequelize } = require("./src/Database/models");
const accountRouter = require('./src/Routes/account.routes');
const vehiclesRouter = require('./src/Routes/vehicles.routes');


const app = express();
app.use(express.json());
app.use(accountRouter);
app.use(vehiclesRouter);

// (async () => {

//     const account = require('./src/Database/models/account')
//     const vehicle = require('./src/Database/models/vehicle')
//     const vehicleBuy = require('./src/Database/models/vehicleBuy')
    
//     try {
//         const resultado = await sequelize.sync();
//         //console.log("Result:", resultado);
//     } catch (error) {
//         //console.log(error);
//     }
// })();

app.listen(3000, () => console.log("server is running!"));