var readline = require('readline-sync');
const data = require('./data');

let termInput = () => {
    data.searchTerm = readline.question('\n \n ESCREVA O TERMO DE PESQUISA: ')
    console.log(`\n \n== O TERMO DE PESQUISA FOI DEFINIDOO COMO '${data.searchTerm}'\n \n`)
}

let emailToInput = () => {
    data.emailTo = readline.question('DIGITE SEU EMAIL: ')
    console.log(`\n \n== SEU EMAIL FOI DEFINIDO COMO: '${data.emailTo}'\n \n`)
}

exports.termInput = termInput
exports.emailToInput = emailToInput
