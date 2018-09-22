module.exports = {rules : [
    {
        keyWords: /\b(lul|lol|ha)+\b/i,
        responseText: 'hahahaha',
        responseDir: "#player",
        counter: 0
    },
    {
        keyWords: /\b(angry|b[oo]+\b|:rage:|😡|lionSalt|PJSalt)/i,
        responseText: 'boooooo',
        responseDir: "#booPlayer",
        counter: 0 
    },
    {
        keyWords: /(pogchamp|POGGERS|hypers|roopog)/i,
        responseText: 'PogChamp',
        responseDir: "#hypePlayer",
        counter: 0 
    }
]}

// export default rules