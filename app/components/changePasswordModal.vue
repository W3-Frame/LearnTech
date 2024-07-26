
<template>
    <div v-if="show" class="modal">
      <div class="modal-content">
        <h3>Modification de mot de passe</h3>
        <label for="oldPassword">Ancien mot de passe:</label>
        <input type="password" v-model="oldPassword" />
        <label for="newPassword">Nouveau mot de passe:</label>
        <input type="password" v-model="newPassword" />
        <label for="confirmPassword">Confirmez le nouveau mot de passe:</label>
        <input type="password" v-model="confirmPassword" />
        <div class="modal-buttons">
          <button @click="confirm">Valider</button>
          <button @click="cancel">Annuler</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps, defineEmits } from 'vue';
  
  interface ChangePasswordData {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
  }
  
  const props = defineProps<{
    show: boolean;
  }>();
  
  const emits = defineEmits<{
    (event: 'confirm', data: ChangePasswordData): void;
    (event: 'cancel'): void;
  }>();
  
  const oldPassword = ref("");
  const newPassword = ref("");
  const confirmPassword = ref("");
  
  const confirm = () => {
    emits('confirm', { oldPassword: oldPassword.value, newPassword: newPassword.value, confirmPassword: confirmPassword.value });
  };
  
  const cancel = () => {
    emits('cancel');
  };
  </script>  
  
  <style lang="scss" scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    min-width: 300px;
  }
  
  .modal-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  input[type="password"] {
    margin-bottom: 10px;
    width: 100%;
    padding: 10px;
  }
  </style>
  