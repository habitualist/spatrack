import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
  { path: '/services', name: 'services', component: () => import('../views/ServicesView.vue') },
  { path: '/portfolio', name: 'portfolio', component: () => import('../views/PortfolioView.vue') },
  { path: '/portfolio/:slug', name: 'project-detail', component: () => import('../views/ProjectDetailView.vue') },
  { path: '/contact', name: 'contact', component: () => import('../views/ContactView.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, top: 110, behavior: 'smooth' }
    }

    return { top: 0, behavior: 'smooth' }
  },
})

const meta = {
  home: {
    title: 'Spatrack | Architecture & Construction in Lagos',
    description: 'Spatrack provides architectural design, construction, engineering, consultancy, feasibility studies, and project management services in Lagos, Nigeria.',
  },
  about: {
    title: 'About Spatrack | Architecture & Construction Firm',
    description: 'Learn about Spatrack, a forward-thinking architecture and construction firm serving individuals, businesses, and public-sector clients in Lagos.',
  },
  services: {
    title: 'Services | Spatrack',
    description: 'Explore Spatrack services including architectural design, construction, engineering, consultancy, feasibility studies, and project management.',
  },
  portfolio: {
    title: 'Portfolio | Spatrack',
    description: 'View Spatrack portfolio and project showcase for residential, commercial, and institutional architecture and construction work.',
  },
  'project-detail': {
    title: 'Project Details | Spatrack',
    description: 'Detailed project view for Spatrack architecture and construction portfolio.',
  },
  contact: {
    title: 'Contact Spatrack | Book a Consultation',
    description: 'Contact Spatrack in Lagos, Nigeria for consultations, project inquiries, and architecture or construction services.',
  },
}

router.afterEach((to) => {
  const current = meta[to.name] || { title: 'Spatrack', description: 'Architecture and construction services in Lagos, Nigeria.' }
  document.title = current.title

  let descriptionTag = document.querySelector('meta[name="description"]')
  if (!descriptionTag) {
    descriptionTag = document.createElement('meta')
    descriptionTag.setAttribute('name', 'description')
    document.head.appendChild(descriptionTag)
  }
  descriptionTag.setAttribute('content', current.description)
})

export default router
