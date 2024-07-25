<template>
     <div class="homepage-container">
    <!-- Header -->
    <div class="header">
      <h1 class="title">Tech Learn</h1>
    </div>

    <!-- Main Card -->
    <div class="main-card">
      <h2 class="card-title">Bienvenue à TechLearn</h2>
      <p class="card-description">
        Découvrez notre plateforme interactive pour améliorer vos compétences en informatique et gérer vos cours et notes de manière efficace. Explorez nos fonctionnalités et commencez votre apprentissage dès aujourd'hui.
      </p>
    </div>

    <!-- Recent Activities Title -->
    <div class="recent-activities">
      <h2>Activités récentes</h2>
    </div>

    <!-- Recent Activities Card -->
    <div class="activity-card">
      <div class="activity-header">
        <span class="activity-title">Aucune activité</span>
        <i class="fas fa-book"></i>
      </div>
      <div class="activity-description">
        Vous n'avez pas encore d'activités récentes. Revenez plus tard pour voir les mises à jour.
      </div>
    </div>

    <!-- Mini Cards -->
    <div class="mini-cards">
      <div class="mini-card" @click="goToCourses">
        <h3>Cours de Programmation</h3>
        <p>Apprenez les bases de la programmation avec des cours interactifs et des projets pratiques.</p>
      </div>
      <div class="mini-card" @click="goToCourses">
        <h3>Développement Web</h3>
        <p>Maîtrisez le développement web avec des tutoriels sur HTML, CSS, JavaScript, et plus encore.</p>
      </div>
      <div class="mini-card" @click="goToCourses">
        <h3>Data Science</h3>
        <p>Explorez les principes de la science des données et apprenez à analyser et visualiser des données.</p>
      </div>
      <div class="mini-card" @click="goToCourses">
        <h3>Cybersécurité</h3>
        <p>Comprenez les bases de la cybersécurité et comment protéger vos systèmes contre les menaces.</p>
      </div>
      <div class="mini-card" @click="goToCourses">
        <h3>Intelligence Artificielle</h3>
        <p>Apprenez les concepts de l'intelligence artificielle et comment les appliquer à des projets concrets.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "userboard",
});

useSeoMeta({
  title: "Accueil",
});

import { useRouter } from '#imports';

const router = useRouter();

const goToCourses = () => {
  router.push('/userInterfaces/homepage/courses');
};

</script>

<style lang="scss" scoped>

.homepage-container {
  padding: 20px;
}

.header {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  color: black;
}

.main-card {
  background: white;
  border: 3px solid #003366; /* Dark blue border */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 0 10px;
  text-align: center;
}

.card-title {
  font-size: 2rem;
  margin-bottom: 10px;
}

.card-description {
  font-size: 1.2rem;
  color: #555;
}

.recent-activities {
  text-align: center;
  margin: 40px 0;
}

.recent-activities h2 {
  font-size: 2rem;
  color: black;
}

.activity-card {
  background: white;
  border: 3px solid #003366; /* Dark blue border */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 0 10px;
}

.activity-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.activity-title {
  font-size: 1.5rem;
  color: gray;
}

.activity-description {
  font-size: 1rem;
  color: #777;
  margin-top: 10px;
}

.mini-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-around;
}

.mini-card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 15px;
  width: 100%;
  max-width: 300px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.mini-card:hover {
  background-color: #f0f0f0;
}

.mini-card h3 {
  margin-top: 0;
}

.mini-card p {
  color: #555;
}
</style>


  