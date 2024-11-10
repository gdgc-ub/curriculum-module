import { defineConfig } from 'vitepress'
// Sidebar
import { materi1Sidebar as WebMateri1Sidebar } from '../models/sidebar/web-development/materi1-sidebar'
import { materi1Sidebar as MLMateri1Sidebar } from '../models/sidebar/machine-learning/materi1-sidebar'
import { materi1Sidebar as CloudMateri1Sidebar } from '../models/sidebar/cloud-development/materi1-sidebar'
import { materi1Sidebar as AndroidMateri1Sidebar } from '../models/sidebar/android-development/materi1-sidebar'
import { uiUXSidebar } from '../models/sidebar/ui-ux/UIUXSidebar'
import { PMSidebar } from '../models/sidebar/product-management/PMSidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GDGOC UB Module",
  description: "Module for All Curriculum in GDGOC UB",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/gdgoc-logo.png',
    nav: [
      { text: 'UI/UX', link: '/notes/ui-ux' },
      { text: 'Product Management', link: '/notes/product-management' },
      { text: 'Android', link: '/notes/android-development' },
      { text: 'Web', link: '/notes/web-development' },
      { text: 'Cloud', link: '/notes/cloud-development' },
      { text: 'Machine Learning', link: '/notes/machine-learning' },
    ],

    sidebar: {
      "/notes/ui-ux": uiUXSidebar,
      "/notes/product-management": PMSidebar,
      "/notes/cloud-development": CloudMateri1Sidebar,
      "/notes/android-development": AndroidMateri1Sidebar,
      "/notes/web-development": WebMateri1Sidebar,
      "/notes/machine-learning": MLMateri1Sidebar,
    },

    socialLinks: [
      { icon: 'instagram', link: 'https://www.instagram.com/gdgoc.brawijaya/'},
      { icon: 'github', link: 'https://github.com/gdgc-ub/curriculum-module' }
    ],

    search: {
      provider: 'local'
    },
  },
  lastUpdated: true
})
