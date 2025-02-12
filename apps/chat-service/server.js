const dotenv = require('dotenv');
const app = require("./main.js")

dotenv.config({path: './.env'})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
	console.log(`Chat service is working properly at port: ${PORT}`)
});
