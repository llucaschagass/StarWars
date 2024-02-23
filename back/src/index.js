const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
const port = 3333
mongoose.connect('mongodb+srv://<username>:<password>@<cluster>/<database>?retryWrites=true&w=majority')
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.js'); 

const Film = mongoose.model('Film', {
    tittle: String,
    description: String,
    imageurl: String,
    trailerurl: String
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.get("/", async (req, res) => {
    const films = await Film.find()
    return res.send(films)
})

app.post("/", async (req, res) => {
    const film = new Film({
        title: req.body.tittle,
        description: req.body.description,
        imageurl: req.body.imageurl,
        trailerurl: req.body.trailerurl
    })
    await film.save()
    return res.send(film)
})

app.delete("/:id", async(req, res) =>{
    const film = await Film.findByIdAndDelete(req.params.id)
    return res.send(film)
})

app.put('/:id', async(req, res) =>{
    const film = await Film.findByIdAndUpdate(req.params.id, {
        title: req.body.tittle,
        description: req.body.description,
        imageurl: req.body.imageurl,
        trailerurl: req.body.trailerurl
    })
    return res.send(film)
})

app.listen(port, () =>{
    console.log(`A API está rodando na porta ${port}`)
})
