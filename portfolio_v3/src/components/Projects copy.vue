<script setup>
import { ref, computed, watch } from 'vue';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import ProjectGrid from './ProjectGrid.vue';
import TreeSelect from 'primevue/treeselect';

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
    tags: ["vue", "tailwind css", "express.js", "mongodb"],
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

// Tree structure for tags
const availableTags = ref([
  {
    key: 'technique',
    label: 'Technique',
    data: null,
    children: [
      { key: 'flutter', label: 'Flutter', data: null, selectable: true },
      { key: 'firebase', label: 'Firebase', data: null, selectable: true },
      { key: 'vue', label: 'Vue', data: null, selectable: true },
      { key: 'tailwind css', label: 'Tailwind CSS', data: null, selectable: true },
      { key: 'express.js', label: 'Express.js', data: null, selectable: true },
      { key: 'mongodb', label: 'MongoDB', data: null, selectable: true },
      { key: 'ruby', label: 'Ruby', data: null, selectable: true },
      { key: 'c++', label: 'C++', data: null, selectable: true },
      { key: 'sfml', label: 'SFML', data: null, selectable: true },
      { key: 'doxygen', label: 'Doxygen', data: null, selectable: true },
      { key: 'python', label: 'Python', data: null, selectable: true },
      { key: 'css', label: 'CSS', data: null, selectable: true },
      { key: 'html', label: 'HTML', data: null, selectable: true },
    ],
    selectable: false
  },
  {
    key: 'searchfield',
    label: 'Search Field',
    data: null,
    children: [
      { key: 'course', label: 'Course', data: null, selectable: true },
      { key: 'projectname', label: 'Project Name', data: null, selectable: true },
    ],
    selectable: false
  }
]);

// Create a computed property for filtered projects
const filteredProjects = computed(() => {
  const tags = Object.keys(selectedTags.value).filter(key => selectedTags.value[key]);
  const query = searchQuery.value.toLowerCase();

  // Extract the keys from the selected tags
  // const tags = Array.isArray(selectedTags.value) ? selectedTags.value.map(tag => tag.key) : [];

  return projectList.value.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(query);
    const matchesAllTags = tags.length === 0 || tags.every(tag => project.tags.includes(tag));

    return matchesSearch && matchesAllTags;
  });
});

// Clear filters function
function clearFilters() {
  selectedTags.value = [];
  searchQuery.value = '';
}

// Watch for changes in selectedTags
watch(selectedTags, (newValue) => {
  console.log('selectedTags:', newValue);
});
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 py-5 lg:px-8 text-center" id="projects">
    <h2 class="text-5xl font-semibold tracking-tight text-black sm:text-6xl">Projects</h2>
  </div>

  <div class="mx-auto max-w-7xl pt-5 flex flex-col items-center">
    <div class="flex flex-row gap-2">
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText v-model="searchQuery" placeholder="Search" />
      </IconField>
      <div class="card flex justify-center">
        <TreeSelect v-model="selectedTags" :options="availableTags" optionLabel="label" optionGroupLabel="label"
          optionGroupChildren="children" display="chip" placeholder="Filter" class="w-full md:w-80"
          selectionMode="multiple">
          <template #footer>
            <div class="px-3 pt-1 pb-2 flex justify-end">
              <Button label="Clear Filters" severity="danger" text size="small" icon="pi pi-filter-slash" @click="clearFilters"/>
            </div>
          </template>
        </TreeSelect>
      </div>
    </div>
  </div>

  <ProjectGrid :projects="filteredProjects" />
</template>
