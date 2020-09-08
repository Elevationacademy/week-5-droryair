const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/reviewsDB',{userNewUrlParser:true})


const port = 4200
app.listen(port,function(){
    console.log(`Server is up and running on port ${port}`)
})


const Schema = mongoose.Schema


const bookSchema = new Schema({
    title:String,
    author:String,
    reviews:[{type:Schema.Types.ObjectId,ref:'Review'}]
})


const reviewSchema = new Schema({
    book:{type:Schema.Types.ObjectId,ref:'Book'},
    critic:{type:Schema.Types.ObjectId,ref:'Critic'},
    text:String
})


const criticSchema = new Schema({
    name:String,
    reviews: [{type:Schema.Types.ObjectId,ref:'Review'}]
})


const Critic = mongoose.model('Critic',criticSchema)
const Book = mongoose.model("Book",bookSchema)
const Review = mongoose.model('Review',reviewSchema)




const b1 = new Book({
    title:"Name Of The Wind",
    author:"Patrick Rothfuss",
    reviews:[]
})

const c1 = new Critic({
    name:"William Jeffery",
    reviews:[]
})

const r1 = new Review({
    book:b1,
    critic:c1,
    text:"Excellent book"
})

// // *** SAVING DATA TO THE DATABASE. ONLY RUN ONCE
// b1.reviews.push(r1)
// c1.reviews.push(r1)
// b1.save()
// c1.save()
// r1.save()
// console.log("saved")
// // ***


// Review.find({}, function(err, reviews){
//     console.log(reviews)
// })

// Book.find({},function(err,book){
//     console.log(book)
// })

// Book.findOne({})
// .populate("reviews")
// .exec(function(err,book){
//     console.log(book.reviews)
// })

Book.findOne({})
    .populate({
        path: 'reviews',
        populate: {
            path: 'critic'
        }
    })
//     .exec(function (err, book) {
//         console.log(book.reviews)
//     })

// Review.find({})
// .populate('book critic')
// .exec(function(err,review){
//     console.log(review)
// })

Critic.findOne({})
.populate('reviews')
.exec(function(err,critic){
    console.log(critic.reviews)
})


Critic.findOne({},function(err,critic){
    critic.populate('reviews',function(){
        console.log(critic.reviews)
    })
})