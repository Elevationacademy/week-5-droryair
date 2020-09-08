//// CALLBACK HELL
// $.get('/randomWord', function (word) {
//     $.get(`/synonyms/${word}`, function (synonyms) {
//         $.get(`/sentiment/${word}`, function (sentiment) {
//             console.log(`
//             The word ${word} has a 
//             ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
//             its synonyms are: ${synonyms}`)
//         })
//     })
// })

// // SIMPLE PROMISES
// let p = $.get('/randomWord').then(function (word) {
//     console.log("word", word)
// })
// let p2 = $.get('/sentiment/Ploy').then(function (res) {
//     console.log("p2", res)
// })



//// CHAINING AND HANDLING ERRORS
// let p = $.get('/randomWord').then(function (word) {
//     console.log("word", word)
//     return $.get(`/synonyms/${word}`)
// })
//     .catch(function (error) { console.log(error) })
//     .then(function (synonyms) {
//         console.log("synonyms", synonyms)
//     })
//     .catch(function (error) { console.log(error) })


//// PROMISE ALL
// $.get('/randomWord').then(function (word) {
//     const synonymsPromise = $.get(`/synonyms/${word}`)
//     const    sentimentPromise = $.get(`sentiment/${word}`)

//     Promise.all([synonymsPromise, sentimentPromise]).then(function (result) {
//         console.log(result)
//     })
// })


// // MINE: PROMISE IN A FUNCTION
// const promiseWord = function () {
//     $.get('/randomWord').then(function (word) {
//         let synonymsPromise = $.get(`/synonyms/${word}`)
//         let sentimentPromise = $.get(`sentiment/${word}`)

//         Promise.all([synonymsPromise, sentimentPromise]).then(function (result) {
//             console.log(result)
//         })
//     })
// }
// promiseWord()



//PRINTING RESULTS:
const printResults = function(word,synonyms,sentiment){
    console.log(`"${word}" has a ${sentiment ===1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
    it's synonyms are: ${synonyms}`)
}


$.get('/randomWord').then(function (word) {
    const synonymsPromise = $.get(`/synonyms/${word}`)
    const    sentimentPromise = $.get(`sentiment/${word}`)

    Promise.all([synonymsPromise, sentimentPromise]).then(function (result) {
        printResults(word, result[0],result[1])
    })

})