const app = require("./main.js")

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, ()=>{
	console.log(`Chat service is working properly at port: ${PORT}`)
});
