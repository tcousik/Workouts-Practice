const express = require('express')
require('dotenv').config()

const app = express()

app.get('/', (req, res) => {
    res.json({ msg: "Welcome" })
})

app.listen(process.env.PORT, () => {
    console.log("Listening on port 4000")
})

