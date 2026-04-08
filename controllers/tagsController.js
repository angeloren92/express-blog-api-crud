const { posts } = require('../data/dataPosts')

// Rotta bacheca index
const index = (req, res) => {
    if (req.query.tag) {
        const filteredPosts = posts.filter(element => element.tags.includes(req.query.tag))
        if (filteredPosts.length === 0) {
            res.status(404).json({ message: `${req.query.tag} not found` })
        } else {
            res.json(filteredPosts);
        }
    } else {
        res.json(posts)
    }
};

// Rotta bacheca show
const show = (req, res) => {
    const post = posts.find(element => element.id === parseInt(req.params.id));
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: 'not found' })
    }
};

// Rotta bacheca store  
const store = (req, res) => {
    const { titolo, contenuto, immagine, tags } = req.body
    const newId = posts.length + 1
    const newPost = {
        id: newId,
        titolo: titolo,
        contenuto: contenuto,
        immagine: immagine,
        tags: tags
    }
    posts.push(newPost)
    console.log(newPost)
    res.send('creazione');
};

// Rotta bacheca update
const update = (req, res) => {
    const id = parseInt(req.params.id)
    const { titolo, contenuto, immagine, tags } = req.body
    const index = posts.findIndex(element => element.id === parseInt(req.params.id))
    const post = posts.find(element => element.id === id)

    if (!post) {
        res.status(404)

        return req.json({
            error: "Not Found",
            message: "Post non trovato"
        })
    }

    post.titolo = titolo
    post.contenuto = contenuto
    post.immagine = immagine
    post.tags = tags

    posts.splice(index, 1, post)

    console.log(posts)
    res.send('modifica avvenuta ' + req.params.id);
}

// Rotta bacheca modify
const modify = (req, res) => {
    res.send('modifica parziale ' + req.params.id);
};

// Rotta bacheca destroy
const destroy = (req, res) => {
    const index = posts.findIndex(element => element.id === parseInt(req.params.id))
    if (index !== -1) {
        posts.splice(index, 1)
        console.log(posts)
        res.status(204).send()
    } else {
        res.status(404).json({ message: 'not found' })
    }
};

module.exports = { index, show, store, modify, update, destroy };