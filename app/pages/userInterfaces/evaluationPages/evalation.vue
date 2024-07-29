<template>
    <div class="evaluation-page">
      <h1 class="course-title">{{ courseName }}</h1>
      <h2 class="chapter-title">{{ chapterName }}</h2>
      <h3 class="evaluation-title">{{ evaluationTitle }}</h3>
      <SidebarComponent />
  
      <div class="content">
        <div class="question-number">Question {{ currentQuestionIndex + 1 }}</div>
        <div class="question-card">
          <p>{{ currentQuestion.text }}</p>
          <div v-for="(option, index) in currentQuestion.options" :key="index">
            <input
              type="checkbox"
              :id="'option-' + index"
              v-model="selectedOptions"
              :value="option"
            />
            <label :for="'option-' + index">{{ option }}</label>
          </div>
        </div>
        <div class="navigation-buttons">
          <button @click="previousQuestion" :disabled="currentQuestionIndex === 0">Précédent</button>
          <button @click="nextQuestion" :disabled="currentQuestionIndex === questions.length - 1">{{ currentQuestionIndex === questions.length - 1 ? 'Terminer l\'évaluation' : 'Suivant' }}</button>
        </div>
      </div>
  
      <div class="navigation">
        <button @click="toggleNavigationMenu">Navigation</button>
        <div v-if="navigationMenuOpen" class="navigation-menu">
          <div v-for="(question, index) in questions" :key="index" class="navigation-item" @click="goToQuestion(index)">
            {{ index + 1 }}
          </div>
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
    text: string;
    options: string[];
  }
  
  const questions = ref<Question[]>([
    {
      text: 'Question 1',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    },
    {
      text: 'Question 2',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
    },
  ]);
  
  const currentQuestionIndex = ref(0);
  const selectedOptions = ref<string[]>([]);
  const navigationMenuOpen = ref(false);
  
  const currentQuestion = computed(() => questions.value[currentQuestionIndex.value]);
  
  const previousQuestion = () => {
    if (currentQuestionIndex.value > 0) {
      currentQuestionIndex.value--;
      selectedOptions.value = []; // Clear the selected options
    }
  };
  
  const nextQuestion = () => {
    if (currentQuestionIndex.value < questions.value.length - 1) {
      currentQuestionIndex.value++;
      selectedOptions.value = []; // Clear the selected options
    } else {
      // Logic to handle evaluation completion
      console.log('Terminer l\'évaluation');
    }
  };
  
  const toggleNavigationMenu = () => {
    navigationMenuOpen.value = !navigationMenuOpen.value;
  };
  
  const goToQuestion = (index: number) => {
    currentQuestionIndex.value = index;
    selectedOptions.value = []; // Clear the selected options
    toggleNavigationMenu();
  };
  </script>
  
  <style lang="scss" scoped>
  .evaluation-page {
    display: flex;
  }
  
  .course-title, .chapter-title, .evaluation-title {
    text-align: center;
  }
  
  .content {
    flex: 1;
    padding: 20px;
  }
  
  .question-number {
    font-weight: bold;
  }
  
  .question-card {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 20px;
  }
  
  .navigation-buttons {
    display: flex;
    justify-content: space-between;
  }
  
  .navigation {
    width: 200px;
    border-left: 1px solid #ddd;
  }
  
  .navigation-menu {
    display: flex;
    flex-wrap: wrap;
  }
  
  .navigation-item {
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    margin: 5px;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
  }
  
  .navigation-item:hover {
    background-color: #ddd;
  }
  </style>
  