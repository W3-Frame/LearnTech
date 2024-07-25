<template>
    <div class="courses-container">
    <h1>Vue d'ensemble des cours</h1>
    
    <!-- Filter and Search Bar -->
    <div class="filter-search-bar">
      <select v-model="filter" @change="filterCourses">
        <option value="all">Tout</option>
        <option value="completed">Terminé</option>
        <option value="todo">À faire</option>
      </select>
      <input 
        v-model="searchQuery" 
        @input="searchCourses" 
        type="text" 
        placeholder="Rechercher un cours"
        class="search-bar"
      />
      <i class="fas fa-search search-icon" @click="searchCourses"></i>
    </div>

    <!-- Courses List -->
    <div class="course-list">
      <div class="course-card" v-for="course in filteredCourses" :key="course.id">
        <img :src="course.image" alt="Course Image" class="course-image">
        <h2 class="course-title">{{ course.title }}</h2>
        <p class="course-professor">{{ course.professor }}</p>
        <p class="course-description">{{ course.description }}</p>
        <NuxtLink :to="`/userInterfaces/coursesPages/courseDetails/${course.id}`" class="view-details">Voir les détails</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
 layout: "userboard",
});

useSeoMeta({
 title: "Mes cours",
});

import { ref } from 'vue';

const courses = ref([
  { id: 1, title: 'Introduction à Vue.js', professor: 'Prof. Jean Dupont', description: 'Apprenez les bases de Vue.js.', image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Développement Web Avancé', professor: 'Prof. Marie Curie', description: 'Approfondissez vos compétences en développement web.', image: 'https://via.placeholder.com/150' },
  { id: 3, title: 'JavaScript pour les Débutants', professor: 'Prof. Albert Einstein', description: 'Les bases de JavaScript expliquées.', image: 'https://via.placeholder.com/150' },
  { id: 4, title: 'CSS et Design Web', professor: 'Prof. Leonardo Da Vinci', description: 'Créez des designs web époustouflants.', image: 'https://via.placeholder.com/150' },
  { id: 5, title: 'Python pour l\'IA', professor: 'Prof. Ada Lovelace', description: 'Introduction à l\'IA avec Python.', image: 'https://via.placeholder.com/150' },
]);

const filter = ref('all');
const searchQuery = ref('');
const filteredCourses = ref([...courses.value]);

const filterCourses = () => {
  if (filter.value === 'all') {
    filteredCourses.value = [...courses.value];
  } else if (filter.value === 'completed') {
    filteredCourses.value = courses.value.filter(course => course.status === 'completed');
  } else if (filter.value === 'todo') {
    filteredCourses.value = courses.value.filter(course => course.status === 'todo');
  }
};

const searchCourses = () => {
  filteredCourses.value = courses.value.filter(course => 
    course.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
};

</script>

<style lang="scss" scoped>
.courses-container {
  padding: 20px;
}

.filter-search-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 40px;
}

.filter-search-bar select,
.filter-search-bar input {
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.search-bar {
  flex-grow: 1;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.search-icon {
  cursor: pointer;
  padding: 5px;
}

.course-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.course-card {
  flex: 1 1 calc(33.333% - 20px);
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.course-image {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.course-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0;
  text-align: center;
}

.course-professor {
  font-size: 1rem;
  color: #555;
}

.course-description {
  font-size: 1rem;
  margin: 10px 0;
  text-align: center;
}

.view-details {
  display: block;
  margin-top: 10px;
  text-decoration: none;
  color: #007bff;
}

</style>


 