<template>
    <div class="dashboard-container">
    <!-- Chronologie Card -->
    <div class="chronology-card">
      <h1 class="card-title">Chronologie</h1>
      <div class="dropdown-container">
        <button class="dropdown-button" @click="toggleDropdown">
          {{ selectedOption }} <i class="fas fa-caret-down"></i>
        </button>
        <div v-if="dropdownOpen" class="dropdown-menu">
          <a @click="selectOption('Tout')">Tout</a>
          <a @click="selectOption('En retard')">En retard</a>
          <a @click="selectOption('Date limite dans les 7 prochains jours')">Date limite dans les 7 prochains jours</a>
          <a @click="selectOption('Date limite dans les 14 prochains jours')">Date limite dans les 14 prochains jours</a>
          <a @click="selectOption('Date limite dans les 30 prochains jours')">Date limite dans les 30 prochains jours</a>
          <a @click="selectOption('Date limite dans les 3 prochains mois')">Date limite dans les 3 prochains mois</a>
        </div>
      </div>
      <hr />
      <div class="activity-card">
        <span>Aucune activité</span>
      </div>
      <div class="tasks-container">
        <div class="task-card" @click="goToCourses">
          <h3>Cours de Programmation</h3>
          <p>Date d'échéance : 01/09/2024</p>
        </div>
        <div class="task-card" @click="goToCourses">
          <h3>Évaluation Web</h3>
          <p>Date d'échéance : 15/09/2024</p>
        </div>
      </div>
    </div>

    <!-- Calendar Card -->
    <div class="calendar-card">
      <h2 class="calendar-title">Calendrier</h2>
      <CalendarComponent />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
 layout: "userboard",
});

useSeoMeta({
 title: "Tableau de bord",
});

import { ref } from 'vue';
import CalendarComponent from '~/components/CalendarComponent.vue';

const dropdownOpen = ref(false);
const selectedOption = ref('Tout');

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const selectOption = (option) => {
  selectedOption.value = option;
  dropdownOpen.value = false;
};

const goToCourses = () => {
  useRouter().push('/userInterfaces/homepage/courses');
};

</script>

<style lang="scss" scoped>
.dashboard-container {
  padding: 20px;
}

.chronology-card {
  background: white;
  border: 2px solid #003366; /* Dark blue border */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 50px; /* Space below for calendar */
}

.card-title {
  font-size: 2rem;
  font-weight: bold;
  text-align: right;
}

.dropdown-container {
  position: relative;
  margin-top: 10px;
}

.dropdown-button {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.dropdown-menu a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: black;
}

.dropdown-menu a:hover {
  background-color: #f0f0f0;
}

.activity-card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  margin-top: 20px;
}

.tasks-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.task-card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.task-card:hover {
  background-color: #f0f0f0;
}

.calendar-card {
  background: white;
  border: 2px solid #003366; /* Dark blue border */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 100%;
  margin-top: 50px;
}

.calendar-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>


 