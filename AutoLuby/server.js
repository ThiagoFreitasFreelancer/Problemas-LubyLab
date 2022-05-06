const express =  require(`express`);

const app = express();

(async () => {

    const db = require("./src/Database");
    const account = require('./src/Modules/Model/account')
    const vehicle = require('./src/Modules/Model/vehicle')
    const vehicleBuy = require('./src/Modules/Model/vehicleBuy')

    try {
        const resultado = await db.sync();
        console.log("Result:", resultado);
    } catch (error) {
        console.log(error);
    }
})();

app.use(express.json());

app.listen(3333, () => console.log("server is running!"));