const algorithmia = require('algorithmia')


let extractFromWikipedia = async (content) => {
    const algorithmiaAuthenticated = await algorithmia("sim9Ux+DJs6ggREK/kcXl5nVaaM1")
    const wikipediaAlgorithm = await algorithmiaAuthenticated.algo('web/WikipediaParser/0.1.2')
    const wikipediaResponse = await wikipediaAlgorithm.pipe(data.searchTerm)
    data.wikiContent = await wikipediaResponse.get()

    .log(`== SUA PESQUISA SOBRE '${data.searchTerm} ' FOI CONCLUIDA ==\n\n`)
}

exports.extractFromWikipedia = extractFromWikipedia

