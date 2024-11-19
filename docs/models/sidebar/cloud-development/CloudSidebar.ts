// https://vitepress.dev/reference/default-theme-sidebar

const CLOUD_NOTE_PATH = '/notes/cloud-development';

export const CloudSidebar = [
  {
    text: 'Greetings',
    items: [
      { text: 'About', link: `${CLOUD_NOTE_PATH}/0-greetings/0.1-about` },
      { text: 'Prerequisites', link: `${CLOUD_NOTE_PATH}/0-greetings/0.2-prerequisites` },
    ],
  },
  {
    text: '1) Cloud Computing ☁️',
    items: [
      {
        text: '1.1) What is Cloud Computing',
        link: `${CLOUD_NOTE_PATH}/1-cloud/1.1-what-is-cloud`,
      },
      {
        text: '1.2) Characteristics of Cloud Computing',
        link: `${CLOUD_NOTE_PATH}/1-cloud/1.2-characteristics-cloud`,
      },
      {
        text: '1.3) Benefits of Cloud Computing',
        link: `${CLOUD_NOTE_PATH}/1-cloud/1.3-benefits-cloud`,
      },
      {
        text: '1.4) Cloud Service Models',
        link: `${CLOUD_NOTE_PATH}/1-cloud/1.4-cloud-service-models`,
      },
      {
        text: '1.5) Application of Cloud',
        link: `${CLOUD_NOTE_PATH}/1-cloud/1.5-application-of-clouds`,
      },
    ],
  },
  {
    text: '2) Introduction with GCP',
    items: [
      { text: '2.1) What is GCP', link: `${CLOUD_NOTE_PATH}/2-intro-gcp/2.1-what-is-gcp` },
      { text: '2.2) GCP Products', link: `${CLOUD_NOTE_PATH}/2-intro-gcp/2.2-gcp-products` },
      {
        text: '2.3) Interacting with GCP',
        link: `${CLOUD_NOTE_PATH}/2-intro-gcp/2.3-interacting-with-gcp`,
      },
    ],
  },
  {
    text: '3) Virtualization vs Containerization',
    items: [
      {
        text: '3.1) Virtualization',
        link: `${CLOUD_NOTE_PATH}/3-virtualization-vs-containerization/3.1-virtualization`,
      },
      {
        text: '3.2) Containerization',
        link: `${CLOUD_NOTE_PATH}/3-virtualization-vs-containerization/3.2-containerization`,
      },
      {
        text: '3.3) Key Differences',
        link: `${CLOUD_NOTE_PATH}/3-virtualization-vs-containerization/3.3-differences-virtualization-containerization`,
      },
    ],
  },
  {
    text: '4) Create Your First VM',
    items: [
      {
        text: '4.1) Introduction with Virtual Box',
        link: `${CLOUD_NOTE_PATH}/4-virtual-machine/4.1-intro-virtual-box`,
      },
      {
        text: '4.2) Tools Installation',
        link: `${CLOUD_NOTE_PATH}/4-virtual-machine/4.2-tools-installation`,
      },
      {
        text: '4.3) Create Virtual Machine',
        link: `${CLOUD_NOTE_PATH}/4-virtual-machine/4.3-create-virtual-machine`,
      },
    ],
  },
  {
    text: 'Containerization',
  },
];
