const data      = require('./data')
const content   = require('./all/content')
const mail      = require('./mail')
const input     = require('./input')

let main = async () => {
    input.termInput() 
    input.emailToInput() 
    await content.extractFromWikipedia()
    mail.sendMail(data.name,data.emailTo,data.searchTerm,data.wikiContent)    
} 

main()