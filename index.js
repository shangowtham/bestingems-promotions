require('dotenv').config()

const express  = require('express');
const mongoose = require('mongoose');
const Promotion = require('./models/promotion');
const promotionRouter = require('./routes/promotionRouter')
const app = express() ;

const PORT = process.env.port || 3000 ; 

mongoose.connect('mongodb+srv://shangowtham:41uJmYJOsHBPQxhB@gowtham.f7z1e8v.mongodb.net/Ecomm', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))


app.use(express.json())
app.use(express.static('public')); 
app.use('/promotion',promotionRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
}); 



/*
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const promotionRoutes = require('./routes/promotionRoutes');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://shangowtham:41uJmYJOsHBPQxhB@gowtham.f7z1e8v.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

// Middleware for parsing JSON body
app.use(bodyParser.json());

// Mount promotion routes
app.use('/promotions', promotionRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


*/