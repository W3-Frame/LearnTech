<template>
  <div class="grade-details">
    <h1>{{ courseName }}</h1>
    <h2>Notes</h2>
    <table class="details-table">
      <thead>
        <tr>
          <th>Évaluations</th>
          <th>Note</th>
          <th>Valeurs possibles</th>
          <th>Pourcentage</th>
          <th>Remarques</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="evaluation in evaluations" :key="evaluation.name">
          <td>{{ evaluation.name }}</td>
          <td>{{ evaluation.grade }}</td>
          <td>{{ evaluation.possibleValues }}</td>
          <td>{{ evaluation.percentage }}%</td>
          <td>{{ evaluation.comments }}</td>
        </tr>
      </tbody>
    </table>
    <button @click="goBack">Retour</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const courseName = ref(route.params.courseName);
const evaluations = ref([]);

onMounted(() => {
  fetchEvaluationDetails();
});

const fetchEvaluationDetails = () => {
  // Remplacez cette fonction par une vraie logique de récupération des données
  evaluations.value = [
    { name: 'Contrôle Continu 1', grade: 15, possibleValues: '0 - 20', percentage: 75, comments: 'Bon travail' },
    { name: 'Projet', grade: 18, possibleValues: '0 - 20', percentage: 90, comments: 'Excellent' },
    { name: 'Contrôle Continu 2', grade: 16, possibleValues: '0 - 20', percentage: 80, comments: 'Très bien' },
    { name: 'Examen Final', grade: 17, possibleValues: '0 - 20', percentage: 85, comments: 'Très bon travail' }
  ];
};

const goBack = () => {
  router.push('/userInterfaces/homepage/grades');
};
</script>

<style scoped>
.grade-details {
  padding: 20px;
}

h1 {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 10px;
}

h2 {
  font-size: 1.5em;
  margin-bottom: 20px;
}

.details-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.details-table th, .details-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.details-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.details-table td {
  font-size: 1em;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
