const algorithmia = require('algorithmia')
const data = require('./data')


let extractFromWikipedia = async (content) => {
    const algorithmiaAuthenticated =  algorithmia("sim9Ux+DJs6ggREK/kcXl5nVaaM1")
    const wikipediaAlgorithm =  algorithmiaAuthenticated.algo('web/WikipediaParser/0.1.2')
    const wikipediaResponse = await wikipediaAlgorithm.pipe(data.searchTerm)
    data.wikiContent =  wikipediaResponse.get()

    .log(`== SUA PESQUISA SOBRE '${data.searchTerm} ' FOI CONCLUIDA ==\n\n`)
}

exports.extractFromWikipedia = extractFromWikipedia

