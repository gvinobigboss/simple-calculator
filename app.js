const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Basic calculator endpoint
app.post('/calculate', (req, res) => {
    const { operation, num1, num2 } = req.body;
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
            break;
        default:
            return res.status(400).send('Invalid operation');
    }

    res.json({ result });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
