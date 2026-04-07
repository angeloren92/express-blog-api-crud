const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routes/posts')

// Avvio del server
app.listen(port, () => {
    console.log(`Server del blog in ascolto su http://localhost:${port}`);
});

// Configurazione per servire file statici dalla cartella public
app.use(express.static('public'));

// Rotta root
app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

app.use('/bacheca', postsRouter)

