<template>
    <FullCalendar
      :plugins="plugins"
      :initialView="'dayGridMonth'"
      :locale="'fr'"
      :events="events"
      @dateClick="handleDateClick"
    />
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import FullCalendar from '@fullcalendar/vue3';
  import dayGridPlugin from '@fullcalendar/daygrid';
  import interactionPlugin from '@fullcalendar/interaction';
  import { format } from 'date-fns';
  
  const plugins = [dayGridPlugin, interactionPlugin];
  
  // Sample events
  const events = ref([
    { title: 'Cours de Programmation', date: '2024-09-01' },
    { title: 'Évaluation Web', date: '2024-09-15' },
  ]);
  
  const handleDateClick = (info) => {
    // Handle date click event
    console.log('Date clicked:', format(info.date, 'yyyy-MM-dd'));
  };
  </script>
  
  <style scoped>
  .fc {
    font-family: Arial, sans-serif;
  }
  </style>
  