const express       = require('express');
const app           = express()
const path          = require('path')
const port          = process.env.PORT

/*
    FOR MAINTENANCE:
   

*/
app.use((req,res,next) => {
    res.sendFile(path.resolve(__dirname, '../client/build','maintenance.html'))
}) 

app.use(express.static(path.resolve(__dirname, '../client/build')));





app.get('*', (req,res) => {
    const index = path.resolve(__dirname, '../client/build', 'index.html');
    res.sendFile(index)
})


let server
const runServer = (port=3001) => {
    
    server = app.listen(port, ()=> {
        console.log(`app runing on port ${port}`)
    })

}


const closeServer = () => {
    server.close()
}

if (require.main === module) {
    runServer();
  }
  
  module.exports = {
    app, runServer, closeServer
  };