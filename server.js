const express = require('express');
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running.');
});

app.get('/test-env', (req, res) => {
    res.json({
        port: process.env.PORT,
        openaiApiKey: process.env.OPENAI_API_KEY,
        ghlClientId: process.env.GHL_CLIENT_ID,
        twilioSid: process.env.TWILIO_ACCOUNT_SID,
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
