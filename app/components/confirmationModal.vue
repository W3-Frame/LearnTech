<template>
    <div class="modal-overlay" @click.self="$emit('cancel')">
      <div class="modal">
        <h2>Confirmation</h2>
        <p>Voulez-vous vraiment vous déconnecter ?</p>
        <button @click="$emit('confirm')">Oui</button>
        <button @click="$emit('cancel')">Non</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default defineComponent({});
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal {
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
  }
  </style>
  