const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Exemple de modèle d'IA simple
function generateAIResponse(prompt) {
    // Exemple de logique IA locale (remplacez par votre algorithme réel)
    if (!prompt) return "Désolé, je n'ai pas compris votre demande.";
    const responses = [
        `Vous avez dit : "${prompt}". Voici ma réponse.`,
        `Analyser : "${prompt}". Résultat : réussi.`,
        `Désolé, je ne suis pas sûr de comprendre "${prompt}".`,
    ];
    // Retourne une réponse aléatoire
    return responses[Math.floor(Math.random() * responses.length)];
}

// Endpoint principal
app.post('/api/ai', (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'Le champ "prompt" est requis.' });
    }

    // Générer une réponse via l'IA locale
    const response = generateAIResponse(prompt);

    res.json({
        success: true,
        data: response,
    });
});

// Route par défaut
app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'API IA 🌟 ! Utilisez /api/ai pour interagir.');
});

// Lancer le serveur pour le développement local
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});

// Exporter pour Vercel
module.exports = app;
