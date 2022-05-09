const express =  require(`express`);
const accountServer = require('./src/Routes/account.routes');
const vehiclesServer = require('./src/Routes/vehicles.routes');
const db = require("./src/Database");

const app = express();

app.use(express.json());
app.use(accountServer);
//app.use(vehiclesServer);

(async () => {

    const db = require("./src/Database");
    const account = require('./src/Modules/Model/account')
    const vehicle = require('./src/Modules/Model/vehicle')
    const vehicleBuy = require('./src/Modules/Model/vehicleBuy')
    
    try {
        const resultado = await db.sync();
        //console.log("Result:", resultado);
    } catch (error) {
        //console.log(error);
    }
})();

app.listen(3000, () => console.log("server is running!"));