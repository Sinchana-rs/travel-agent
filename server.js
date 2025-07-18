const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Send login.html for root path "/"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
