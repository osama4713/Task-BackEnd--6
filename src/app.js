
const mongodb = require("mongodb")

const MongoClient = mongodb.MongoClient

const url = 'mongodb://127.0.0.1:27017'

const dbname = "project_one"

MongoClient.connect(url, (error, rest1) => {

    if (error) {
        return console.log("Error in connection")
    }
    console.log("All Done")

    const db = rest1.db(dbname)

    // db.collection('users').insertOne({
    //     FName: "Osama",
    //     LName: "Tamer",
    //     Age: 22,
    //     City: "Tama"
    // }, (error, data) => {
    //     if (error) {
    //         return console.log("Can't Insert Item")
    //     }
    //     console.log(data.insertedId)
    // })

    // db.collection('users').insertOne({
    //     FName: "Fero",
    //     LName: "Maged",
    //     Age: 10,
    //     City: "Sohag"
    // }, (error, data) => {
    //     if (error) {
    //         return console.log("Can't Insert Item")
    //     }
    //     console.log(data.insertedId)
    // })

    // db.collection('users').insertMany(
    //     [
    //         {
    //             FName: "Peter",
    //             LName: "Rizk",
    //             Age: 27,
    //             City: "Aswan"
    //         },
    //         {
    //             FName: "Fam",
    //             LName: "Farid",
    //             Age: 20,
    //             City: "Luxor"
    //         },
    //         {
    //             FName: "Fady",
    //             LName: "Mina",
    //             Age: 27,
    //             City: "Assiut"
    //         },
    //         {
    //             FName: "Moaz",
    //             LName: "Hany",
    //             Age: 19,
    //             City: "Sohag"
    //         },
    //         {
    //             FName: "Islam",
    //             LName: "Gamil",
    //             Age: 27,
    //             City: "Minya"
    //         }, {
    //             FName: "Faris",
    //             LName: "Samy",
    //             Age: 18,
    //             City: "Menoufia"
    //         },
    //         {
    //             FName: "Mola",
    //             LName: "Moner",
    //             Age: 27,
    //             City: "Dakahlia"
    //         },
    //         {
    //             FName: "Dived",
    //             LName: "Thawat",
    //             Age: 17,
    //             City: "Sinai"
    //         },
    //         {
    //             FName: "Yossef",
    //             LName: "Emad",
    //             Age: 27,
    //             City: "Ismailia"
    //         },
    //         {
    //             FName: "mohamd",
    //             LName: "Ahmad",
    //             Age: 16,
    //             City: "Suez"
    //         },

    //     ]

    //     , (error, data) => {
    //         if (error) {
    //             return console.log("Can't Insert All Item")
    //         }
    //         console.log(data.insertedCount)
    //     }
    // )

    // **************************************************************************

    // db.collection('users').find({ Age: 27 }).toArray((error, user) => {
    //     if (error) {
    //         console.log("Can't Find Age")
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({ Age: 27 }).limit(3).toArray((error, user) => {
    //     if (error) {
    //         console.log("Can't Find Age")
    //     }
    //     console.log(user)
    // })

    // **************************************************************************

    // db.collection('users').updateOne({_id: mongodb.ObjectId('65fd90e9b012e8ea1267ed5a')},{
    //     $set : {FName : "Fady" , LName : "Romainy"},
    //     $inc :{Age : 4}
    // })
    // .then((data) => {console.log(data.modifiedCount)})
    // .catch((error) => console.log(error))

    // db.collection('users').updateOne({_id: mongodb.ObjectId('65fd90e9b012e8ea1267ed5c')},{
    //     $set : {FName : "Marwan" , LName : "Ahmad"},
    //     $inc :{Age : 4}
    // })
    // .then((data) => {console.log(data.modifiedCount)})
    // .catch((error) => console.log(error))

    // db.collection('users').updateOne({_id: mongodb.ObjectId('65fd90e9b012e8ea1267ed5e')},{
    //     $set : {FName : "Abdo" , LName : "Hassn"},
    //     $inc :{Age : 4}
    // })
    // .then((data) => {console.log(data.modifiedCount)})
    // .catch((error) => console.log(error))

    // db.collection('users').updateOne({_id: mongodb.ObjectId('65fd90e9b012e8ea1267ed60')},{
    //     $set : {FName : "Kevan" , LName : "Osama"},
    //     $inc :{Age : 4}
    // })
    // .then((data) => {console.log(data.modifiedCount)})
    // .catch((error) => console.log(error))


    // db.collection('users').updateMany({},{
    //     $inc :{Age : 10}
    // })
    // .then((data) => {console.log(data.modifiedCount)})
    // .catch((error) => console.log(error))

    // **************************************************************

    db.collection('users').deleteMany({Age : 41})
    .then((data) => {console.log(data.deletedCount)})   
    .catch((error) => {console.log(error)})

})

