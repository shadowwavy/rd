const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    const htmlContent = `
        <html>
            <head>
                <title>Redirect Link</title>
            </head>
            <body>
                <p>Click the link below to be redirected:</p>
                <a href="/redirect">Redirect me to Google!</a>
            </body>
        </html>
    `;

    res.send(htmlContent);
});

app.get('/redirect', (req, res) => {
    res.redirect('https://www.google.com');
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
