const express = require('express')
const app = express()
const port = 3000
var os = require("os");
const app_color=process.env.BACKGROUND_COLOR||"green"

app.get('/', (req, res) => {
    // res.send(`<!DOCTYPE html>
    //     <html lang="en">
    //     <head>
    //         <meta charset="UTF-8">
    //         <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //         <title>Document</title>
    //     </head>
    //     <body style="background-color:${app_color}">
    //         <center><h3 style="color:white;">Hello world from ${os.hostname()}<h3><center>
    //     </body>
    //     </html>
    // `)
    res.send(`Hello world from ${os.hostname()}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})