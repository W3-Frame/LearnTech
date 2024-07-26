<template>
    <div class="grades">
    <h1>Les cours que je suis</h1>
    <table class="grades-table">
      <thead>
        <tr>
          <th>Nom du cours</th>
          <th>Note</th>
          <th>Commentaire</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="grade in grades" :key="grade.courseId" @click="goToGradeDetails(grade.courseId, grade.courseName)">
          <td>{{ grade.courseName }}</td>
          <td>{{ grade.grade }}</td>
          <td>{{ grade.comments }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
definePageMeta({
 layout: "userboard",
});

useSeoMeta({
 title: "Mes notes",
});

import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const grades = ref([]);

onMounted(() => {
  fetchGrades();
});

const fetchGrades = () => {
  // Remplacez cette fonction par une vraie logique de récupération des données
  grades.value = [
    { courseId: 1, courseName: 'Programmation en C++', grade: 18, comments: 'Excellent travail' },
    { courseId: 2, courseName: 'Algorithmes et Structures de Données', grade: 15, comments: 'Bon effort' },
    { courseId: 3, courseName: 'Bases de Données', grade: 16, comments: 'Très bien' },
    { courseId: 4, courseName: 'Réseaux Informatiques', grade: 17, comments: 'Très bon travail' },
    { courseId: 5, courseName: 'Intelligence Artificielle', grade: 19, comments: 'Exceptionnel' }
  ];
};

const goToGradeDetails = (courseId, courseName) => {
  router.push({ name: 'grade-details', params: { courseId, courseName } });
};
</script>

<style lang="scss" scoped>
.grades {
  padding: 20px;

  h1 {
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .grades-table {
    width: 100%;
    border-collapse: collapse;

    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }

    th {
      background-color: #f2f2f2;
      font-weight: bold;
    }

    tr:hover {
      background-color: #f5f5f5;
      cursor: pointer;
    }
  }
}
</style>




 