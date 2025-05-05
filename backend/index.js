const express = require('express');
const connectDb = require('./db/connection')

const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes')
const cors = require('cors');



connectDb();

const app = express();


app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
const PORT = process.env.PORT || 3000;

app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('Server is running!');
// });

app.use('/',bookRoutes)

app.use('/user', userRoutes)



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} . http://localhost:3000/`);
});
