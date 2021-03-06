const express = require('express');
const cors = require('cors');
const path = require('path');

const testimonialsRoutes = require('./routes/testimonials.routes');
const concertsRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



app.use('/api/', testimonialsRoutes);
app.use('/api/', concertsRoutes);
app.use('/api/', seatsRoutes);

app.use(express.static(path.join(__dirname + '/client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

// app.get('/', (req, res) => {
//     res.json(req.body);
// });

// app.get('/testimonials', (req, res) => {
//     res.json(req.body);
// });

// app.get('/testimonials/:id', (req, res) => {
//     res.json(req.body);
// });

// app.get('/testimonials/random', (req, res) => {
//   res.json(req.body);
// });

// app.post('/testimonials/', (req, res) => {
//   res.send({massege: 'ok'});
// });

// app.put('/testimonials/:id', (req, res) => {
//   res.send({massege: 'ok'});
// });

// app.delete('/testimonials/:id', (req, res) => {
//   res.send({massege: 'ok'});
// });


app.use((req, res) => {
    res.status(404).json({ message: 'Not found...' });
  });

app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running on port: 8000');
});

// app.listen(8000, () => {
//   console.log('Server is running on port: 8000');
// });
