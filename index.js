const express = require('express');
const app = express();

// Middleware pour gérer les requêtes JSON
app.use(express.json());

// Endpoint principal
app.get('/rtm-ai', (req, res) => {
    const question = req.query.q; // Lecture du paramètre 'q' depuis l'URL

    if (!question) {
        return res.status(400).json({ error: "Veuillez fournir une question en utilisant le paramètre 'q'." });
    }

    // Simule une réponse basée sur la question
    let response;
    switch (question.toLowerCase()) {
        case 'hello':
            response = 'Bonjour! Comment puis-je vous aider? 😊';
            break;
        case 'qui es-tu':
            response = "Je suis une intelligence artificielle créée par RTM Tafitaniaina. 🤖";
            break;
        default:
            response = "Je n'ai pas compris votre question, mais je suis là pour vous aider! 🚀";
    }

    // Renvoi la réponse
    res.json({ question, response });
});

// Gestion des routes non trouvées
app.use((req, res) => {
    res.status(404).json({ error: "Cette route n'existe pas." });
});

// Configuration du port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
