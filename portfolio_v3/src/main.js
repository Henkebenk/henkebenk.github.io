import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import App from './App.vue'
import preset from 'tailwindcss-primeui/src/utils/preset'
import { updatePrimaryPalette } from '@primevue/themes';

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.my-app-dark',
        },
        semantic: {
            preset: preset.semantic,
            primary: {
                50: '{sky.50}',
                100: '{sky.100}',
                200: '{sky.200}',
            },
        },
    },
});

updatePrimaryPalette({
    50: '{indigo.50}',
    100: '{indigo.100}',
    200: '{indigo.200}',
    300: '{indigo.300}',
    400: '{indigo.400}',
    500: '{indigo.500}',
    600: '{indigo.600}',
    700: '{indigo.700}',
    800: '{indigo.800}',
    900: '{indigo.900}',
    950: '{indigo.950}'
});
app.mount('#app')
