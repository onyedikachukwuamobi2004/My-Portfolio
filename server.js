const express = require('express');
const cors = require('cors');
const path = require('path');
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');

const PORT = 5000;
const app = express();

// 🔥 Step 1: Create LiveReload server
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));

// 🔁 Step 2: Refresh browser when connection is ready
liveReloadServer.server.once('connection', () => {
  setTimeout(() => {
    liveReloadServer.refresh('/');
  }, 100);
});

// 💉 Step 3: Inject livereload script into served HTML
app.use(connectLivereload());

// 🌐 Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 📁 Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// 🚀 Start server
app.listen(PORT, () => console.log(`🚀 Node-JS Server running at http://localhost:${PORT}`));
