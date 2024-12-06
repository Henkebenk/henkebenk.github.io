<script setup>
import { ref } from 'vue';
import Tag from 'primevue/tag';
defineProps(['projects']);

</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-6 p-8 max-w-7xl m-auto">
    <div v-for="project in projects" :key="project.name" class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg flex flex-col justify-between">
      <div class="pr-20 pl-20 pt-10">
        <a :href="project.link">
          <img :src="project.image" alt="" />
        </a>
      </div>

      <div>
        <div class="pt-5 px-5">
          <a :href="project.link">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ project.name }}</h5>
          </a>
        </div>

        <div class="card flex flex-wrap gap-2.5 pl-5 pb-5">
          <div v-for="tag in project.tags" :key="tag" class="bg-opacity-50 bg-blue-300 text-blue-700">
            <span>{{ tag }}</span>
          </div>
          <Tag
            v-for="tag in project.tags"
            :key="tag"
            severity="info"
            :value="tag"
            class="bg-opacity-20"
          />
          
        </div>
      </div>
    </div>
  </div>
</template>
