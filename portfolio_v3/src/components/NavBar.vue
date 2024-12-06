<template>
    <Menubar :model="items">
      <template #start>
        <img src="@/assets/logo.svg" alt="Logo" :style="logoStyle" />
      </template>
      <template #end>
        <ToggleSwitch v-model="checked" @change="toggleDarkMode" />
      </template>
    </Menubar>
  </template>
  
  <script setup>
  import { ref, watch, computed } from "vue";
  import Menubar from 'primevue/menubar';
  import ToggleSwitch from 'primevue/toggleswitch';
  import Button from 'primevue/button';
  
  const checked = ref(false);
  
  function toggleDarkMode() {
    document.documentElement.classList.toggle('my-app-dark', checked.value);
  }
  
  watch(checked, (newValue) => {
    document.documentElement.classList.toggle('my-app-dark', newValue);
  });
  
  // Computed property for logo style
  const logoStyle = computed(() => {
    return checked.value
      ? {
        filter: 'invert(71%) sepia(10%) saturate(193%) hue-rotate(201deg) brightness(90%) contrast(85%);',
        height: '40px',
      }
      : {
        filter: 'invert(43%) sepia(16%) saturate(573%) hue-rotate(176deg) brightness(99%) contrast(91%)',
        height: '40px'
      };
  });
  
  const items = ref([
    {
      label: 'Home',
      icon: 'pi pi-home'
    },
    {
      label: 'Features',
      icon: 'pi pi-star'
    },
    {
      label: 'Projects',
      icon: 'pi pi-search',
      items: [
        {
          label: 'Components',
          icon: 'pi pi-bolt'
        },
        {
          label: 'Blocks',
          icon: 'pi pi-server'
        },
        {
          label: 'UI Kit',
          icon: 'pi pi-pencil'
        },
        {
          label: 'Templates',
          icon: 'pi pi-palette',
          items: [
            {
              label: 'Apollo',
              icon: 'pi pi-palette'
            },
            {
              label: 'Ultima',
              icon: 'pi pi-palette'
            }
          ]
        }
      ]
    },
    {
      label: 'Contact',
      icon: 'pi pi-envelope'
    }
  ]);
  </script>
  
  <style>
  .card {
    padding: 1rem;
  }
  </style>
  