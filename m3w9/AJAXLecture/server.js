const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 8001;
const cors = require('cors');

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(cors());

// data
const toDoList = [
  {
    id: '1',
    item: 'Do Laundry'
  },
  {
    id: '2',
    item: 'Buy Groceries'
  },
  {
    id: '3',
    item: 'Code'
  },
  {
    id: '4',
    item: 'Relax'
  },
];

app.get('/api/list', (req, res) => {
  res.json(toDoList)
})

app.post('/list', (req, res) => {
  const id = Math.random();
  console.log(req.body);
  const toDoListData = {...req.body, id}
  toDoList.push(toDoListData);
  console.log(toDoListData);
  res.json(toDoList)
})


app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});