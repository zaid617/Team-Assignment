import express from 'express'

const app = express();

app.get("/", (req, res) => {
    res.send("Ecommerce")
})

app.listen(8000, () => {
    console.log("Server is working")
})