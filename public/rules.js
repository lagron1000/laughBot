var rules = [
    {
        keyWords: /\b(lul|lol|ha)+\b/i,
        responseText: 'hahahaha',
        responseDir: $('#player').get(0),
        counter: 0
    },
    {
        keyWords: /\b(angry)|(b[oo]+)\b|(:rage:)|\blionSalt|PJSalt\b/i,
        responseText: 'boooooo',
        responseDir: $('#booPlayer').get(0),
        counter: 0 
    },
    {
        keyWords: /(pogchamp)|(POGGERS)|(hypers)|(roopog)/i,
        responseText: 'PogChamp',
        responseDir: $('#hypePlayer').get(0),
        counter: 0 
    }
]

export default rules