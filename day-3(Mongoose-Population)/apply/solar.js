const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost/sloarDB',{useNewUrlParser:true})

const port = 3000
app.listen(port,function(){
    console.log(`App is up and running on port ${port}`)
})

const Schema = mongoose.Schema


const SystemSchema = new Schema({
    planets:[{type:Schema.Types.ObjectId,ref:'Planet'}],
    starName:String
})

const planetSchema = new Schema({
    name:String,
    system:{type:Schema.Types.ObjectId,ref:'System'},
    visitors:[{type:Schema.Types.ObjectId,ref:'Visitor'}]
})


const visitorSchema = new Schema({
    name:String,
    homePlanet:{type:Schema.Types.ObjectId,ref:'Planet'},
    visitedPlanets:[{type:Schema.Types.ObjectId,ref:'Planet'}]
})

const Planet = mongoose.model('Planet',planetSchema)
const System = mongoose.model('System',SystemSchema)
const Visitor = mongoose.model('Visitor',visitorSchema)


// // CAUTION! DUMMY DATA AHEAD!
// // System 1
const s1 = new System({
    planets:[],
    starName:'Sol'
})



// // System 1's planets
const p1 = new Planet({
    name:'Earth',
    system:s1,
    visitors:[]
})


const p2 = new Planet({
    name:"Pluto",
    system:s1,
    visitors:[]
})

const p3 = new Planet({
    name:'Venus',
    system:s1,
    visitors:[]
})


// // System 2
const s2 = new System({
    planets:[],
    starName:"Bloopi"
})

// // System 2's planets
const p4 = new Planet({
    name:'Blip',
    system:s2,
    visitors:[]
})

const p5 = new Planet({
    name:'Blap',
    system:s2,
    visitors:[]
})

const p6 = new Planet({
    name:'Blop',
    system:s2,
    visitors:[]
})

// // Visitors
const v1 = new Visitor({
    name:'Danna',
    homePlanet:p1,
    visitedPlanets:[p2,p3,p6]
})
const v2 = new Visitor({
    name:'Vinny',
    homePlanet:p3,
    visitedPlanets:[p2,p6,p4]
})
const v3 = new Visitor({
    name:'Bob',
    homePlanet:p5,
    visitedPlanets:[p1]
})

// // WE'RE DONE WITH THE DUMMY DATA ( for now... >=] )


// s1.planets.push(p1,p2,p3)
// s2.planets.push(p4,p5,p6)

// p2.visitors.push(v1,v2)
// p3.visitors.push(v1)
// p4.visitors.push(v2)
// p6.visitors.push(v1,v2)
// p1.visitors.push(v3)


// // *** savesavesave***
// s1.save()
// s2.save()
// p1.save()
// p2.save()
// p3.save()
// p4.save()
// p5.save()
// p6.save()
// v1.save()
// v2.save()
// v3.save()
// console.log("Uston, the DB is ready to launch 8) ")
// // ^^^savesavesave^^^



// Visitor.findOne({})
//     .populate({
//         path: 'visitedPlanets',
//         populate: {
//             path: 'visitors'
//         }
//     })
// .exec(function(err,visitor){
//     console.log(visitor.visitedPlanets)
// })


// Planet.findOne({})
// .populate({
//     path:'visitors',
//     populate:{path:'visitedPlanets'}
// })
// .exec(function(err,planet){
//     console.log(planet.visitors)
// })


// System.findOne({})
// .populate({
//     path:'planets',  //* SHOWING EMPTY ARRAY WHEN IT'S OBVIOUSLY NOT *
//     // populate:{
//     //     path:'visitors'
//     // }
// })
// .exec(function(err,system){
//     console.log(system)
// })










// // SIDE TESTS

// Planet.findById('5f57a54f5325841340f06e17',function(err,planet){
//     console.log(planet.name)
//     console.log(planet.system.starName)
// })

// Planet.findOne({},function(err,planet){
//     console.log(planet.name)
//     console.log(planet.system.starName)
// })

// System.find({},function(err,system){
//    console.log(system)
// })