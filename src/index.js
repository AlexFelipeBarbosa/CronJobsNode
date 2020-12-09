/* Alex Felipe Barbosa 
09/12/2020
Exemplo de Agendador de Tarefas no NodeJs.
*/

const cron = require("node-cron");
const express = require("express");

app = express();

// EXECUTANDO O CRON JOB A CADA UM MINUTO
cron.schedule("* * * * * ", () =>
  console.log("Executando a tarefa a cada um minuto!")
);

// EXECUTANDO O CRON JOB A CADA UMA HORA
cron.schedule("0 */1 * * * ", () => {
  // Colocar aqui a execução da rotina ....................
  // Tudo que precisa ser executado de forma automatica!!!!!

  console.log("Executando de HORA em HORA !!!");
});

app.listen(1313);
