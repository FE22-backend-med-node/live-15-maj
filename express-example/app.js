const express = require('express');
const app = express(); // Initierar en express-applikation
const insultsJSON = require('./insults.json');

app.use(express.json()); // Tolkar allt som kommer i en body som JSON

app.get('/api/insults', (request, response) => {
    console.log('Hej');
    response.json({ success: true, insults: insultsJSON.insults }); // Response.json() är det sista man gör, fungerar som en return i en funktion
});

app.post('/api/insults/add', (request, response) => {
    const insult = request.body; // Plocka ut det som skickats med i body från frontend
    console.log(insult);
    insultsJSON.insults.push(insult); // Spara i vår array

    response.json({ success: true, message: 'Insult saved!' });
});

app.listen(8000, () => { // Starta igång vår webbserver genom att lyssna på ett portnummer
    console.log('Server started on port 8000');
});

// I frontend
// async function getInsults() {
//     const response = await fetch('http://localhost:8000/api/insults', { method: 'GET' });
//     const data = response.json();

//     if (data.success) {
//         // Lista alla insults
//     }
// }