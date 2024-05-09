const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/etp3.html');
});

app.post('/calculate', (req, res) => {
    const { num1, num2 } = req.body;

    const operand1 = parseFloat(num1);
    const operand2 = parseFloat(num2);

    const addition = operand1 + operand2;
    const subtraction = operand1 - operand2;
    const multiplication = operand1 * operand2;
    const division = operand1 / operand2;
    const increment = operand1 + 1;
    const decrement = operand1 - 1;
    const square = operand1 * operand1;

    const result = {
        addition,
        subtraction,
        multiplication,
        division,
        increment,
        decrement,
        square,
    };

    res.json(result);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
