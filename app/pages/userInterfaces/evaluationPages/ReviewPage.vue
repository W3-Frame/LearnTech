<template>
    <div class="review-page">
      <h1 class="course-title">{{ courseName }}</h1>
      <h2 class="chapter-title">{{ chapterName }}</h2>
      <h3 class="evaluation-title">{{ evaluationTitle }}</h3>
      <SidebarComponent />
      
      <div class="content">
        <table>
          <thead>
            <tr>
              <th>Commencé le</th>
              <td>{{ startDate }}</td>
            </tr>
            <tr>
              <th>État</th>
              <td>Terminé</td>
            </tr>
            <tr>
              <th>Terminé le</th>
              <td>{{ endDate }}</td>
            </tr>
            <tr>
              <th>Note</th>
              <td>{{ score }}</td>
            </tr>
          </thead>
        </table>
        
        <div v-for="(question, index) in questions" :key="index" class="question-review">
          <div class="question-number">{{ index + 1 }}</div>
          <div class="question-card">
            <p>{{ question.text }}</p>
            <div v-for="(option, index) in question.options" :key="index" :class="{'correct': option.isCorrect, 'incorrect': option.isSelected && !option.isCorrect}">
              {{ option.text }}
            </div>
          </div>
          <div class="comment-card">{{ question.comment }}</div>
        </div>
        
        <button @click="finishReview">Finir la relecture</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
 
  
  const courseName = ref('Nom du cours');
  const chapterName = ref('Nom du chapitre');
  const evaluationTitle = ref('Titre de l\'évaluation');
  const startDate = ref('2024-08-01');
  const endDate = ref('2024-08-15');
  const score = ref('18/20');
  
  interface Option {
    text: string;
    isSelected: boolean;
    isCorrect: boolean;
  }
  
  interface Question {
    text: string;
    options: Option[];
    comment: string;
  }
  
  const questions = ref<Question[]>([
    {
      text: 'Question 1',
      options: [
        { text: 'Option 1', isSelected: true, isCorrect: false },
        { text: 'Option 2', isSelected: false, isCorrect: true },
        { text: 'Option 3', isSelected: false, isCorrect: false },
        { text: 'Option 4', isSelected: false, isCorrect: true },
      ],
      comment: 'Explication pour la question 1.',
    },
    {
      text: 'Question 2',
      options: [
        { text: 'Option A', isSelected: false, isCorrect: true },
        { text: 'Option B', isSelected: true, isCorrect: false },
        { text: 'Option C', isSelected: false, isCorrect: false },
        { text: 'Option D', isSelected: false, isCorrect: true },
      ],
      comment: 'Explication pour la question 2.',
    },
  ]);
  
  const finishReview = () => {
    // Logic to finish the review
    console.log('Finir la relecture');
  };
  </script>
  
  <style lang="scss" scoped>
  .review-page {
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
  
  .question-review {
    margin-bottom: 20px;
  }
  
  .question-number {
    font-weight: bold;
  }
  
  .question-card {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .correct {
    color: green;
  }
  
  .incorrect {
    color: red;
  }
  
  .comment-card {
    border: 1px solid #ddd;
    padding: 10px;
    background-color: #f9f9f9;
  }
  </style>
  