import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Sey hello world!');
});

const server = app.listen(8080, () => {
  console.log('Server start or port 8080');
})
