<script setup>
import { ref, computed } from 'vue';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import ProjectGrid from './ProjectGrid.vue';
import MultiSelect from 'primevue/multiselect';

// Project data
const projectList = ref([
  {
    name: "Gearguard",
    image: new URL('@/assets/flutter.svg', import.meta.url).href,
    tags: ["vue", "flutter", "firebase"],
    link: "#"
  },
  {
    name: "Bytegrave",
    image: new URL('@/assets/bytegrave.svg', import.meta.url).href,
    tags: ["vite", "vue", "tailwind css", "express.js", "mongodb"],
    link: "#"
  },
  {
    name: "Graphite",
    image: new URL('@/assets/graphite.svg', import.meta.url).href,
    tags: ["ruby"],
    link: "#"
  },
  {
    name: "The Grand Arena",
    image: new URL('@/assets/the_grand_arena.svg', import.meta.url).href,
    tags: ["c++", "sfml", "doxygen"],
    link: "#"
  },
  {
    name: "Sokoban",
    image: new URL('@/assets/sokoban.svg', import.meta.url).href,
    tags: ["python"],
    link: "#"
  },
  {
    name: "Web Blog",
    image: new URL('@/assets/web_blog.svg', import.meta.url).href,
    tags: ["css", "html"],
    link: "#"
  },
  {
    name: "Fake Web Proxy",
    image: new URL('@/assets/proxy.svg', import.meta.url).href,
    tags: ["python"],
    link: "#"
  },
  {
    name: "Distance Vector Router",
    image: new URL('@/assets/router.svg', import.meta.url).href,
    tags: ["python"],
    link: "#"
  }
]);

// Search and filter state
const searchQuery = ref('');
const selectedTags = ref([]);

// Available tags as a flat array
const availableTags = ref([
  { name: 'flutter', code: 'FTR' },
  { name: 'firebase', code: 'FBS' },
  { name: 'vite', code: 'VTE'},
  { name: 'vue', code: 'NY' },
  { name: 'tailwind css', code: 'RM' },
  { name: 'express.js', code: 'LDN' },
  { name: 'mongodb', code: 'MGD' },
  { name: 'ruby', code: 'IST' },
  { name: 'c++', code: 'PRS' },
  { name: 'sfml', code: 'SFML' },
  { name: 'doxygen', code: 'DXG' },
  { name: 'python', code: 'PTH' },
  { name: 'css', code: 'CSS' },
  { name: 'html', code: 'HTL' },
]);

// Create a computed property for filtered projects
const filteredProjects = computed(() => {
  const query = searchQuery.value.toLowerCase();
  const tags = selectedTags.value;

  return projectList.value.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(query);
    const matchesAllTags = tags.length === 0 || tags.every(tag => project.tags.includes(tag.name));

    return matchesSearch && matchesAllTags;
  });
});

// Clear filters function
function clearFilters() {
  selectedTags.value = [];
  searchQuery.value = '';
}
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 py-5 lg:px-8 text-center" id="projects">
    <h2 class="text-5xl font-semibold tracking-tight text-black dark:text-white sm:text-6xl">Projects</h2>
  </div>

  <div class="mx-auto max-w-7xl pt-5 flex flex-col items-center">
    <div class="flex flex-col sm:flex-row gap-2">
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText v-model="searchQuery" placeholder="Search" />
      </IconField>
      <div class="card flex justify-center">
        <MultiSelect v-model="selectedTags" :options="availableTags" optionLabel="name" display="chip" filter
          placeholder="Filter Technique" class="w-full md:w-80">
          <template #dropdownicon>
            <i class="pi pi-filter" />
          </template>
          <template #header>
            <div class="font-medium px-3 py-2">Available Techniques</div>
          </template>
          <template #footer>
            <div class="px-3 pt-1 pb-2 flex justify-end">
              <Button label="Clear Filters" severity="danger" text size="small" icon="pi pi-filter-slash"
                @click="clearFilters" />
            </div>
          </template>
        </MultiSelect>
      </div>
    </div>
  </div>

  <ProjectGrid :projects="filteredProjects" />
</template>
