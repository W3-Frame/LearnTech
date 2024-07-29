<template>
    <div class="summary-page">
      <h1 class="course-title">{{ courseName }}</h1>
      <h2 class="chapter-title">{{ chapterName }}</h2>
      <h3 class="evaluation-title">{{ evaluationTitle }}</h3>
      <SidebarComponent />
      
      <div class="content">
        <h4>Résumé de la tentative</h4>
        <table>
          <thead>
            <tr>
              <th>Question</th>
              <th>État</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(question, index) in questions" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ question.state }}</td>
            </tr>
          </tbody>
        </table>
        <div class="buttons">
          <button @click="returnToAttempt">Retour à la tentative</button>
          <button @click="submitEvaluation">Tout envoyer et terminer</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
 
  
  const courseName = ref('Nom du cours');
  const chapterName = ref('Nom du chapitre');
  const evaluationTitle = ref('Titre de l\'évaluation');
  
  interface Question {
    state: string;
  }
  
  const questions = ref<Question[]>([
    { state: 'Répondu' },
    { state: 'Non répondu' },
  ]);
  
  const returnToAttempt = () => {
    // Logic to return to the attempt
    console.log('Retour à la tentative');
  };
  
  const submitEvaluation = () => {
    // Logic to submit the evaluation
    console.log('Tout envoyer et terminer');
  };
  </script>
  
  <style lang="scss" scoped>
  .summary-page {
    display: flex;
  }
  
  .course-title, .chapter-title, .evaluation-title {
    text-align: center;
  }
  
  .content {
    flex: 1;
    padding: 20px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 10px;
  }
  
  .buttons {
    display: flex;
    justify-content: space-between;
  }
  </style>
  