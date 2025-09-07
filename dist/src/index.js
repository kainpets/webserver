import express from 'express';
const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);
// Middleware
app.use(express.json());
app.use(express.static('public'));
// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to your Node.js web server!' });
});
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map