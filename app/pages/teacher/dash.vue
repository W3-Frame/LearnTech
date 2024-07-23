<template>
    <div>
      <div>
        <h1>Les matières enseignées</h1>
        <!-- <div class="row">
          <div class="col-md-4" v-for="matiere in matieres" :key="matiere.id">
  
            <div class="card" style="width: 18rem; margin: 10px>
  
      <img class=" card-img-top" :src="matiere.image" alt="Card image>
  
      <div class=" card-body">
  
              <h5 class="card-title">{{ matiere.nom }}</h5>
              <p class="card-text">{{ matiere.description }}</p>
  
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { useFirestore } from '@vueuse/firebase';
  import { collection } from 'firebase/firestore';
  
  definePageMeta({
    layout: "dashboard",
  });
  useSeoMeta({
    title: "Lessons Page",
  });
  
  const { db } = useFirebase();
  const Course = useFirestore(collection(db, "Course"));
  
  </script>
  
  <style scoped>
  
  </style>