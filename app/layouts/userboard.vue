<template>
    <div>
      <nav class="navbar">
        <div class="nav-left">
          <NuxtLink to="/userInterfaces/homepage/accueil" :class="{ active: isActive('/userInterfaces/homepage/accueil') }">Accueil</NuxtLink>
          <NuxtLink to="/userInterfaces/homepage/dashboard" :class="{ active: isActive('/userInterfaces/homepage/dashboard') }">Tableau de bord</NuxtLink>
          <NuxtLink to="/userInterfaces/homepage/courses" :class="{ active: isActive('/userInterfaces/homepage/courses') }">Mes cours</NuxtLink>
          <NuxtLink to="/userInterfaces/homepage/grades" :class="{ active: isActive('/userInterfaces/homepage/grades') }">Mes notes</NuxtLink>
        </div>
        <div class="nav-right">
          <div class="profile-icon" @click="toggleDropdown">
            <i class="fas fa-user-circle"></i>
          </div>
          <div v-if="dropdownOpen" class="dropdown-menu">
            <NuxtLink to="/profile">Profil</NuxtLink>
            <NuxtLink to="/grades">Notes</NuxtLink>
            <div class="divider"></div>
            <a @click="confirmLogout">Déconnexion</a>
          </div>
        </div>
      </nav>
      <Nuxt />
      <ConfirmationModal v-if="showLogoutModal" @confirm="logout" @cancel="showLogoutModal = false" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { signOut } from 'firebase/auth';
  import { useRouter } from '#imports'; 
  import ConfirmationModal from '~/components/confirmationModal.vue';
  const { auth,  } = useFirebase();
  
  export default defineComponent({
    components: {
      ConfirmationModal
    },
    setup() {
      const router = useRouter();
      const dropdownOpen = ref(false);
      const showLogoutModal = ref(false);
  
      const toggleDropdown = () => {
        dropdownOpen.value = !dropdownOpen.value;
      };
  
      const confirmLogout = () => {
        showLogoutModal.value = true;
      };
  
      const logout = () => {
        signOut(auth).then(() => {
          router.push('/authentification/login');
        }).catch((error) => {
          console.error("Error signing out: ", error);
        });
      };
  
      const isActive = (path: string) => {
        return router.currentRoute.value.path === path;
      };
  
      return {
        dropdownOpen,
        showLogoutModal,
        toggleDropdown,
        confirmLogout,
        logout,
        isActive
      };
    }
  });
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px 20px;
    border-radius: 8px;
  }
  
  .nav-left a {
    margin-right: 20px;
    text-decoration: none;
    color: black;
  }
  
  .nav-left .active {
    background-color: #e0f7fa;
    padding: 5px 10px;
    border-radius: 4px;
  }
  
  .nav-right {
    position: relative;
  }
  
  .profile-icon {
    cursor: pointer;
    font-size: 1.5rem;
  }
  
  .dropdown-menu {
    position: absolute;
    right: 0;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    margin-top: 10px;
    z-index: 1000;
  }
  
  .dropdown-menu a {
    display: block;
    padding: 10px;
    text-decoration: none;
    color: black;
  }
  
  .divider {
    height: 1px;
    background-color: #ddd;
    margin: 5px 0;
  }
  </style>
  