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
    text: 'Cloud Computing',
    items: [
      {
        text: 'What is Cloud Computing',
        link: `${CLOUD_NOTE_PATH}/1-cloud-computing/1.1-what-is-cloud`,
      },
      {
        text: 'Drawbacks of Traditional Cloud',
        link: `${CLOUD_NOTE_PATH}/1-cloud-computing/1.2-drawbacks-traditional-cloud`,
      },
      {
        text: 'Characteristics of Cloud Computing',
        link: `${CLOUD_NOTE_PATH}/1-cloud-computing/1.3-characteristics-cloud`,
      },
      {
        text: 'Benefits of Cloud Computing',
        link: `${CLOUD_NOTE_PATH}/1-cloud-computing/1.4-benefits-cloud`,
      },
      {
        text: 'Cloud Service Models',
        link: `${CLOUD_NOTE_PATH}/1-cloud-computing/1.5-cloud-service-models`,
      },
      {
        text: 'Application of Cloud',
        link: `${CLOUD_NOTE_PATH}/1-cloud-computing/1.6-application-of-cloud`,
      },
    ],
  },
  {
    text: 'Introduction with GCP',
    items: [
      { text: 'What is GCP', link: `${CLOUD_NOTE_PATH}/2-intro-gcp/2.1-what-is-gcp` },
      { text: 'GCP Products', link: `${CLOUD_NOTE_PATH}/2-intro-gcp/2.2-gcp-products` },
      {
        text: 'Interacting with GCP',
        link: `${CLOUD_NOTE_PATH}/2-intro-gcp/2.3-interacting-with-gcp`,
      },
    ],
  },
  {
    text: 'Virtualization vs Containerization',
    items: [
      {
        text: 'Virtualization',
        link: `${CLOUD_NOTE_PATH}/3-virtualization-vs-containerization/3.1-containerization`,
      },
      {
        text: 'Containerization',
        link: `${CLOUD_NOTE_PATH}/3-virtualization-vs-containerization/3.2-virtualization`,
      },
      {
        text: 'Key Differences',
        link: `${CLOUD_NOTE_PATH}/3-virtualization-vs-containerization/3.3-differences-virtualization-containerization`,
      },
    ],
  },
  {
    text: 'Create Your First VM',
    items: [
      {
        text: 'Introduction with Virtual Box',
        link: `${CLOUD_NOTE_PATH}/4-virtual-machine/4.1-intro-virtual-box`,
      },
      {
        text: 'Tools Installation',
        link: `${CLOUD_NOTE_PATH}/4-virtual-machine/4.2-tools-installation`,
      },
      {
        text: 'Create Virtual Machine',
        link: `${CLOUD_NOTE_PATH}/4-virtual-machine/4.3-create-virtual-machine`,
      },
    ],
  },
  {
    text: 'Containerization',
  },
];
