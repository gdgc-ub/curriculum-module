// https://vitepress.dev/reference/default-theme-sidebar

const CLOUD_NOTE_PATH = "/notes/cloud-development"

export const CloudSidebar = [
    {
        text: 'Introduction with GCP',
        items: [
          { text: "What is GCP", link: `${CLOUD_NOTE_PATH}/intro-with-gcp/what-is-gcp` },
          { text: "GCP Products", link: `${CLOUD_NOTE_PATH}/intro-with-gcp/gcp-products`,},
          { text: "Interacting with GCP", link: `${CLOUD_NOTE_PATH}/intro-with-gcp/interacting-with-gcp`}
        ]
    },
    {
      text: 'Virtualization vs Containerization',
      items: [
        { text: "Virtualization", link: `${CLOUD_NOTE_PATH}/v-vs-c/virtualization` },
        { text: "Containerization", link: `${CLOUD_NOTE_PATH}/v-vs-c/containerization` },
        { text: "Key Differences", link: `${CLOUD_NOTE_PATH}/v-vs-c/key-differences` }
      ]
    },
    {
      text: 'Create Your First VM',
      items: [
        { text: "Introduction with Virtual Box", link: `${CLOUD_NOTE_PATH}/your-first-vm/intro-vbox` },
        { text: "Tools Installation", link: `${CLOUD_NOTE_PATH}/your-first-vm/tools-installation` },
        { text: "Create Virtual Machine", link: `${CLOUD_NOTE_PATH}/your-first-vm/create-vm` },
      ]
    },
]  