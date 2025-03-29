const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve Home.html
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'Home.html'), (err) => {
        if (err) {
            console.error("Error serving Home.html:", err);
            res.status(500).send("Internal Server Error");
        }
    });
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).send("404 Not Found");
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
