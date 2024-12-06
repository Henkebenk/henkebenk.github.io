<template>
  <div>
    <div v-if="theme === 'dark'" @click="toggleTheme" class="theme-toggle">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="32" width="32" viewBox="0 0 24 24"
        stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
      </svg>
    </div>

    <div v-else @click="toggleTheme" class="theme-toggle">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="32" width="32" viewBox="0 0 24 24" stroke-width="1.5"
        stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    </div>
  </div>
</template>

  
<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    // Initialize theme state and persist in localStorage
    const theme = ref(localStorage.getItem('theme') || 'light');

    // Toggle between light and dark theme
    const toggleTheme = () => {
      theme.value = theme.value === 'light' ? 'dark' : 'light';
      applyTheme();
      localStorage.setItem('theme', theme.value); // Persist the theme in localStorage
    };

    // Apply the theme by updating the root document class
    const applyTheme = () => {
      document.body.classList.remove('light-mode', 'dark-mode');
      if (theme.value === 'dark') {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.add('light-mode');
      }

      // Set the theme attribute on the root element for CSS custom properties
      document.documentElement.setAttribute('theme-mode', theme.value);
    };

    // On component mount, apply the saved theme
    onMounted(() => {
      applyTheme();
    });

    return {
      theme,
      toggleTheme,
    };
  },
};
</script>

  
  