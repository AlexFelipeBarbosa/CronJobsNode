const cron = require("node-cron");
const express = require("express");

app = express();

cron.schedule("* * * * * ", () => console.log("Executando a tarefa!"));

app.listen(1313);
