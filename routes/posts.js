const express = require('express');
const router = express.Router();


// Array dei post del blog
const posts = [
    {
        id: 1,
        titolo: "Ricetta del Ciambellone",
        contenuto: "Il ciambellone è un dolce classico della cucina italiana, perfetto per la colazione o la merenda.",
        immagine: "/images/ciambellone.svg",
        tags: ["dolce", "colazione", "tradizione"]
    },
    {
        id: 2,
        titolo: "Pasta alla Carbonara",
        contenuto: "Un piatto tradizionale romano a base di pasta, uova, pecorino e pancetta.",
        immagine: "/images/carbonara.svg",
        tags: ["pasta", "romana", "tradizione"]
    },
    {
        id: 3,
        titolo: "Tiramisù",
        contenuto: "Il dessert italiano per eccellenza, con savoiardi, mascarpone e caffè.",
        immagine: "/images/tiramisu.svg",
        tags: ["dolce", "dessert", "italiano"]
    },
    {
        id: 4,
        titolo: "Pizza Margherita",
        contenuto: "La pizza classica napoletana con pomodoro, mozzarella e basilico.",
        immagine: "/images/pizza.svg",
        tags: ["pizza", "napoletana", "tradizione"]
    },
    {
        id: 5,
        titolo: "Ossobuco alla Milanese",
        contenuto: "Un secondo piatto lombardo con ossobuco di vitello servito con risotto alla milanese.",
        immagine: "/images/ossobuco.svg",
        tags: ["secondo", "lombardo", "risotto"]
    }
];

// Rotta bacheca index
router.get('/index', (req, res) => {
    let tempData = posts
    if (req.query.tag) {
        tempData = posts.filter(element => element.tags.includes(req.query.tag))
    }
    res.json(tempData);
});

// Rotta bacheca show
router.get('/:id', (req, res) => {
    const post = posts.find(element => element.id === parseInt(req.params.id));
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: 'not found' })
    }
});

// Rotta bacheca store  
router.post('/', (req, res) => {
    res.send('creazione ');
});

// Rotta bacheca update
router.put('/:id', (req, res) => {
    res.send('modifica integrale ' + req.params.id);
});

// Rotta bacheca modify
router.patch('/:id', (req, res) => {
    res.send('modifica parziale ' + req.params.id);
});

// Rotta bacheca destroy
router.delete('/:id', (req, res) => {
    const index = posts.findIndex(element => element.id === parseInt(req.params.id))
    if (index !== -1) {
        const postDeleted = posts.splice(index, 1)
        res.json(postDeleted);
    } else {
        res.status(404).json({ message: 'not found' })
    }
});

module.exports = router;
