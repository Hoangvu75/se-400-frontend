const mongoose = require('mongoose')

const databaseConnection = () => {
    mongoose.connect("mongodb+srv://21522104:21522104@clusterse400.whyvd.mongodb.net/?retryWrites=true&w=majority&appName=ClusterSE400",{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((data)=>{
        console.log(`database connected successfully at server ${data.connection.host}`)
    })
}

module.exports = databaseConnection
