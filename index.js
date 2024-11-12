const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy data (Retseptlar ro‘yxati)
let recipes = [
  { id: 1, name: 'Palov', ingredients: ['guruch', 'SARIQ sabzi', 'gosht'] },
  { id: 2, name: 'Mastava', ingredients: ['guruch', 'sabzi', 'pomidor'] },
];

// API Routes
app.get('/recipes', (req, res) => {
  res.json(recipes);
});

app.post('/recipes', (req, res) => {
  const newRecipe = { id: recipes.length + 1, ...req.body };
  recipes.push(newRecipe);
  res.status(201).json(newRecipe);
});

// Serverni ishga tushirish
app.listen(PORT, () => {
  console.log(`Server ${PORT} portida ishlamoqda`);
});
