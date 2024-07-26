<template>
    <div>
      <h1 class="title">Profil</h1>
      <h2 class="user-name">{{ user.fullName }}</h2>
      <div class="card personal-info">
        <h3>Informations personnelles</h3>
        <p>Email: {{ user.email }}</p>
        <p>Date de naissance: {{ user.birthdate }}</p>
        <p>Numéro de téléphone: {{ user.phone }}</p>
        <button @click="openEditProfileModal">Modifier le profil</button>
      </div>
      <div class="card connection-info">
        <h3>Informations de connexion</h3>
        <p>Première connexion: {{ user.firstLogin }}</p>
        <p>Dernière connexion: {{ user.lastLogin }}</p>
        <button @click="openChangePasswordModal">Changer le mot de passe</button>
      </div>
  
      <!-- Modal pour la modification du profil -->
      <EditProfileModal
        :show="showEditProfileModal"
        :email="user.email"
        :phone="user.phone"
        @confirm="handleEditProfileConfirm"
        @cancel="handleEditProfileCancel"
      />
  
      <!-- Modal pour la modification du mot de passe -->
      <ChangePasswordModal
        :show="showChangePasswordModal"
        @confirm="handleChangePasswordConfirm"
        @cancel="handleChangePasswordCancel"
      />
  
      <!-- Confirmation Modal -->
      <div v-if="showConfirmationModal" class="modal">
        <div class="modal-content">
          <p>Êtes-vous sûr de vouloir valider ces modifications ?</p>
          <div class="modal-buttons">
            <button @click="confirmChanges">Oui</button>
            <button @click="cancelConfirmation">Non</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import EditProfileModal from '@/components/editProfilModal.vue';
  import ChangePasswordModal from '@/components/changePasswordModal.vue';
  
  interface User {
    fullName: string;
    email: string;
    birthdate: string;
    phone: string;
    firstLogin: string;
    lastLogin: string;
  }
  
  const user: User = {
    fullName: "John Doe",
    email: "john.doe@example.com",
    birthdate: "01/01/2000",
    phone: "0123456789",
    firstLogin: "01/01/2021",
    lastLogin: "01/01/2022",
  };
  
  const showEditProfileModal = ref(false);
  const showChangePasswordModal = ref(false);
  const showConfirmationModal = ref(false);
  
  const openEditProfileModal = () => {
    showEditProfileModal.value = true;
  };
  
  const handleEditProfileCancel = () => {
    showEditProfileModal.value = false;
  };
  
  const handleEditProfileConfirm = (data: { email: string, phone: string }) => {
    user.email = data.email;
    user.phone = data.phone;
    showEditProfileModal.value = false;
    showConfirmationModal.value = true;
  };
  
  const openChangePasswordModal = () => {
    showChangePasswordModal.value = true;
  };
  
  const handleChangePasswordCancel = () => {
    showChangePasswordModal.value = false;
  };
  
  const handleChangePasswordConfirm = (data: { oldPassword: string, newPassword: string, confirmPassword: string }) => {
    if (data.newPassword === data.confirmPassword) {
      // Assume the password change logic is implemented here
      showChangePasswordModal.value = false;
      showConfirmationModal.value = true;
    } else {
      alert("Les nouveaux mots de passe ne correspondent pas");
    }
  };
  
  const confirmChanges = () => {
    // Implement the logic to update the profile and password in the database
    showConfirmationModal.value = false;
  };
  
  const cancelConfirmation = () => {
    showConfirmationModal.value = false;
  };
  </script>
  
  <style lang="scss" scoped>
  .title {
    font-size: 2rem;
    font-weight: bold;
  }
  
  .user-name {
    font-size: 1.5rem;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  
  .card {
    background-color: #1e3a8a;
    color: white;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 40px;
  }
  
  .card h3 {
    font-size: 1.25rem;
    margin-bottom: 20px;
  }
  
  .card p {
    margin: 10px 0;
  }
  
  .card button {
    background-color: white;
    color: #1e3a8a;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
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
  
  input[type="password"],
  input[type="email"],
  input[type="text"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .modal-content p.note {
    font-size: 0.875rem;
    color: #666;
  }
  </style>
  