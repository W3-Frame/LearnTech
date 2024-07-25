<template>
    <div class="sidebar">
      <ul>
        <li v-for="item in items" :key="item.id" @click="selectItem(item)">
          <div class="sidebar-card">
            <h3>{{ item.name }}</h3>
            <button @click.stop="markAsCompleted(item)">Marqué comme terminé</button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    methods: {
      selectItem(item) {
        this.$emit('select-item', item);
      },
      markAsCompleted(item) {
        this.$emit('mark-completed', item);
      }
    }
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 100%;
    background-color: #f8f9fa;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    height: 100vh;
  }
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  .sidebar li {
    margin: 10px 0;
  }
  .sidebar-card {
    background-color: white;
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .sidebar-card h3 {
    margin: 0;
    font-size: 1.2em;
  }
  .sidebar-card button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  