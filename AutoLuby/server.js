const express =  require(`express`);
const bd = require(`./src/Database`);

const app = express();

app.use(express.json());

(async () => {
    try {
        const resultado = await bd.sync();
        //console.log("Result:", resultado);
    } catch (error) {
        //console.log(error);
    }
})();

app.listen(3333, () => console.log("server is running!"));