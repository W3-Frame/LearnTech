// server.js
const express = require('express');
const admin = require('firebase-admin');
const serviceAccount = require('./path/to/serviceAccountKey.json'); // Remplacez par le chemin vers votre fichier de clé de compte de service Firebase

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com" // Remplacez <DATABASE_NAME> par le nom de votre base de données Firebase
});

const app = express();
const db = admin.firestore();

app.use(express.json()); // Pour parser les requêtes JSON

// Exemple de route GET
app.get('/api/users', async (req, res) => {
    try {
        const snapshot = await db.collection('users').get();
        const users = snapshot.docs.map(doc => doc.data());
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
    }
});

// Exemple de route POST
app.post('/api/users', async (req, res) => {
    const user = req.body;
    try {
        await db.collection('users').add(user);
        res.status(201).json({ message: 'Utilisateur ajouté avec succès' });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de l\'ajout de l\'utilisateur' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
