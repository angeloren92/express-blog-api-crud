const { posts } = require('../data/dataPosts')

// Rotta bacheca index
const index = (req, res) => {
    res.json(posts);
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
    res.send('creazione ');
};

// Rotta bacheca update
const update = (req, res) => {
    res.send('modifica integrale ' + req.params.id);
};

// Rotta bacheca modify
const modify = (req, res) => {
    res.send('modifica parziale ' + req.params.id);
};

// Rotta bacheca destroy
const destroy = (req, res) => {
    const index = posts.findIndex(element => element.id === parseInt(req.params.id))
    if (index !== -1) {
        const postDeleted = posts.splice(index, 1)
        console.log(posts)
        res.status(204).json({ message: 'deleted' });
    } else {
        res.status(404).json({ message: 'not found' })
    }
};

module.exports = { index, show, store, modify, update, destroy };