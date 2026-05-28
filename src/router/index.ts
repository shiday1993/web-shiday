import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import ContacPage from '@/pages/ContacPage.vue'
import ProjectPage from '@/pages/ProjectPage.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: BaseLayout,
      children: [
        { path: "", name: "home", component: HomePage },
        { path: "about", name: "about", component: AboutPage },
        { path: "contact", name: "contact", component: ContacPage },
        { path: "project", name: "projoect", component: ProjectPage },
      ]
    },
  ],
})

export default router
