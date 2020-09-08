//// EXERCISES
//// link: https://kernel.elevation.ac/cohorts/53/lessons/94/apply/activity/8

// // Exercise 1
// const wordPromise = $.get('/randomWord').then(function(word){
//     console.log("word",word)
//    return $.get(`https://www.googleapis.com/books/v1/volumes?q=title:${word}`)
// }).then(function(result){
//     console.log("res",result.items[0].volumeInfo.title)
// })

//Exercise 2
$.get('/randomWord').then(function(word){
   const bookPromise =  $.get(`https://www.googleapis.com/books/v1/volumes?q=title:${word}`)
   const gifPromise = $.get(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=pAantY2hnM92ihEhzx3JIjz0lX3ISBZK`)

   Promise.all([ bookPromise, gifPromise ]).then(function(result){
       $('body').append(`<div><h1>"${word}"</h1> \n <h2> Book: </h2><h3> "${result[0].items[0].volumeInfo.title}" </h3> \n <h2> Gif: </h2><img src =${result[1].data[0].images.original.url}></div>`)
   })
})
