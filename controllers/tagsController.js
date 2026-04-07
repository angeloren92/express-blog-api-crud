const { posts } = require('../data/dataPosts')

// Rotta bacheca index
const index = (req, res) => {
    let tempData = posts
    if (req.query.tag) {
        tempData = posts.filter(element => element.tags.includes(req.query.tag))
    }
    res.json(tempData);
};

// Rotta bacheca show
const show = (req, res) => {

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
        res.json(postDeleted);
    } else {
        res.status(404).json({ message: 'not found' })
    }
};

module.exports = { index, show, store, modify, update, destroy };