<template>
    <div v-if="show" class="modal">
      <div class="modal-content">
        <h3>Modifier le profil</h3>
        <p class="note">Les autres informations ne peuvent être changées sans passer par l'administration.</p>
        <label for="email">Adresse mail:</label>
        <input type="email" v-model="editedEmail" />
        <label for="phone">Numéro de téléphone:</label>
        <input type="text" v-model="editedPhone" />
        <div class="modal-buttons">
          <button @click="confirm">Valider</button>
          <button @click="cancel">Annuler</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps, defineEmits } from 'vue';
  
  interface EditProfileData {
    email: string;
    phone: string;
  }
  
  const props = defineProps<{
    show: boolean;
    email: string;
    phone: string;
  }>();
  
  const emits = defineEmits<{
    (event: 'confirm', data: EditProfileData): void;
    (event: 'cancel'): void;
  }>();
  
  const editedEmail = ref(props.email);
  const editedPhone = ref(props.phone);
  
  const confirm = () => {
    emits('confirm', { email: editedEmail.value, phone: editedPhone.value });
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
  
  .note {
    color: red;
    font-size: 0.875rem;
    margin-bottom: 20px;
  }
  
  input[type="email"],
  input[type="text"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
  }
  </style>
  