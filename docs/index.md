---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'GDGOC UB Module'
  tagline: 'Built by the community, for the community.'
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: UI/UX
    details: Ringkasan materi User Interface & User Experience
    link: /notes/ui-ux/
  - title: Product Management
    details: Ringkasan materi Product Management
    link: /notes/product-management/
  - title: Machine Learning
    details: Ringkasan materi Machine Learning
    link: /notes/machine-learning/
  - title: Web Development
    details: Ringkasan materi Web Development
    link: /notes/web-development/
  - title: Android Development
    details: Ringkasan materi Android Development
    link: /notes/android-development/
  - title: Cloud Development
    details: Ringkasan materi Cloud Development
    link: /notes/cloud-development/
---

# Our Team

Say hello to our awesome team behind this module.

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import { members } from './models//team-members.ts'
</script>

<VPTeamMembers size="medium" :members="members" />
