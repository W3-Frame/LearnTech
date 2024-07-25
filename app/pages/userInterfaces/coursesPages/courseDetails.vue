<template>
    <div class="course-details">
      <Sidebar :items="sidebarItems" @select-item="selectItem" @mark-completed="markAsCompleted" />
      <div class="content">
        <h1>{{ courseName }}</h1>
        <h2 v-if="selectedItem.type === 'chapter'">{{ selectedItem.name }}</h2>
        <div v-if="selectedItem.type === 'chapter'" class="card">
          <!-- Contenu du chapitre ici -->
          <p>{{ selectedItem.content }}</p>
        </div>
        <div v-if="selectedItem.type === 'chapter'" class="navigation-buttons">
          <button @click="previousChapter">Précédent</button>
          <button @click="nextChapter">Suivant</button>
        </div>
        <div v-if="selectedItem.type === 'evaluation'" class="evaluation-card">
          <h2>{{ selectedItem.name }}</h2>
          <p>Ouvert : {{ selectedItem.lastOpened || 'N/A' }}</p>
          <button @click="startEvaluation(selectedItem.id)">
          {{ selectedItem.lastOpened ? 'Effectuer de nouveau le test' : 'Effectuer le test' }}
        </button>
          <p>Nombre de tentatives autorisées : {{ selectedItem.attemptsAllowed }}</p>
          <p>Méthode d'évaluation : Note la plus haute</p>
          <h3>Résumé des tentatives</h3>
          <table>
            <thead>
              <tr>
                <th>Tentative</th>
                <th>État</th>
                <th>Note</th>
                <th>Remarque</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="attempt in selectedItem.attempts" :key="attempt.id">
                <td>{{ attempt.id }}</td>
                <td>{{ attempt.state }}</td>
                <td>{{ attempt.grade }}</td>
                <td>{{ attempt.remark }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-if="selectedItem.type === 'chapter'" class="chat">
        <h2>Discussion avec l'IA</h2>
        <div class="chat-box">
          <div v-for="message in messages" :key="message.id" class="chat-message">
            <p><strong>{{ message.sender }}:</strong> {{ message.text }}</p>
          </div>
        </div>
        <div class="chat-input">
          <input v-model="userMessage" placeholder="Posez une question" @keypress.enter="sendMessage" />
          <button @click="sendMessage">
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  definePageMeta({
  layout: "userboard",
});

useSeoMeta({
  title: "details du cours",
});
  export default {
    components: {
      Sidebar
    },
    data() {
      return {
        sidebarItems: [
          { id: 1, name: 'Introduction', type: 'chapter', content: 'Contenu de l\'introduction...' },
          { id: 2, name: 'Chapitre 1', type: 'chapter', content: 'Contenu du chapitre 1...' },
          { id: 3, name: 'Évaluation 1', type: 'evaluation', lastOpened: null, attemptsAllowed: 3, attempts: [] },
          // Ajoutez plus de chapitres et d'évaluations ici
        ],
        courseName: 'Nom du cours',
        selectedItem: {},
        messages: [],
        userMessage: ''
      };
    },
    methods: {
      selectItem(item) {
        this.selectedItem = item;
      },
      markAsCompleted(item) {
        item.completed = true;
      },
      previousChapter() {
        // Logique pour passer au chapitre précédent
      },
      nextChapter() {
        // Logique pour passer au chapitre suivant
      },
      startEvaluation(evaluationId) {
      this.$router.push(`/userInterfaces/coursesPages/evaluation/${evaluationId}`);
    },
      sendMessage() {
        if (this.userMessage.trim() === '') return;
  
        const newMessage = {
          id: Date.now(),
          sender: 'Utilisateur',
          text: this.userMessage
        };
  
        this.messages.push(newMessage);
        this.userMessage = '';
  
        // Simuler une réponse de l'IA
        setTimeout(() => {
          const aiResponse = {
            id: Date.now(),
            sender: 'IA',
            text: 'Réponse de l\'IA...'
          };
          this.messages.push(aiResponse);
        }, 1000);
      }
    },
    created() {
      // Sélectionner le premier élément par défaut
      this.selectedItem = this.sidebarItems[0];
    }
  };
  </script>
  
  <style scoped>
  .course-details {
    display: flex;
    flex-direction: row;
  }
  .content {
    flex: 2;
    padding: 20px;
  }
  .chat {
    flex: 1;
    padding: 20px;
    background-color: #f1f1f1;
    border-left: 1px solid #ddd;
    display: flex;
    flex-direction: column;
  }
  .chat-box {
    flex: 1;
    overflow-y: auto;
    margin-bottom: 10px;
  }
  .chat-message {
    margin-bottom: 10px;
  }
  .chat-input {
    display: flex;
  }
  .chat-input input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  .chat-input button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 4px;
    margin-left: 10px;
  }
  .navigation-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .navigation-buttons button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }
  .card {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 4px;
    margin-bottom: 20px;
  }
  .evaluation-card {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 4px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  table, th, td {
    border: 1px solid #ddd;
  }
  th, td {
    padding: 10px;
    text-align: left;
  }
  </style>
  