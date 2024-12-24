// https://vitepress.dev/reference/default-theme-sidebar

const WEB_NOTE_PATH = '/notes/web-development';

export const WebSidebar = [
    {
        text: 'Contoh 1  ',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples', }
        ]
    },

    {
      text: 'HTML ',
      items: [
        { text: 'HTML Basic ', link: `${WEB_NOTE_PATH}/front-end/1-html/1.1-basic-html` },
      ]
  },

    {
      text: 'CSS',
      items: [
        {text: 'Basic CSS', link: `${WEB_NOTE_PATH}/front-end/2-css/2.1-css-basic` },
        {text: 'Making Layouts Use Css', link: `${WEB_NOTE_PATH}/front-end/2-css/2.2-css-layout` },
      ]
    },

    {
      text: 'CSS FrameWork',
      items: [
        {text: 'What Is Tailwind CSS', link: `${WEB_NOTE_PATH}/front-end/3-css-framework/3.1-what-is-tailwind` },
        {text: 'Tailwind CSS Basic', link: `${WEB_NOTE_PATH}/front-end/3-css-framework/3.2-tailwind-basic` },
        {text: 'Making Layout With Tailwind Css', link: `${WEB_NOTE_PATH}/front-end/3-css-framework/3.3-tailwind-layout` },
        {text: 'Responsive Desain Use Tailwind Css', link: `${WEB_NOTE_PATH}/front-end/3-css-framework/3.4-responsive-desain` },
      ]
    },

    {
      text: 'Java Script',
      items: [
        {text: 'java Script Basic Syntax', link: `${WEB_NOTE_PATH}/front-end/4-java-script/4.1-js-basic` },
        {text: 'What is DOM', link:  `${WEB_NOTE_PATH}/front-end/4-java-script/4.2-Dom-Manipulation` },
      ]
    },

    {
      text: 'React Js',
      items: [
        {text: 'React Components ', link: `${WEB_NOTE_PATH}/front-end/5-react/5.1-react-components` },
        {text: 'React Hooks ', link: `${WEB_NOTE_PATH}/front-end/5-react/5.2-react-hooks` },
        {text: 'React Router ', link: `${WEB_NOTE_PATH}/front-end/5-react/5.3-react-router` },
        {text: 'React Querry ', link: `${WEB_NOTE_PATH}/front-end/5-react/5.4-react-Querry` },
      ]
    },

    {
      text: 'Type Checker',
      items: [
        {text: 'What is TypeChecker ', link: `${WEB_NOTE_PATH}/front-end/6-typechecker/6.1-what-is-typechecker` },
        {text: 'What is TypeScript', link: `${WEB_NOTE_PATH}/front-end/6-typechecker/6.2-what-is-typescript` },
        {text: 'TypeScript Vs JavaScript', link: `${WEB_NOTE_PATH}/front-end/6-typechecker/6.3-typescript-vs-javascript` },
      ]
    },

    {
      text: 'Go-lang For Backend',
      items: [
        {text: 'Basic GO-lang', link: `${WEB_NOTE_PATH}/back-end/1-golang/1.1-basic.golang` },
        {text: 'GO-lang Web Framework', link: `${WEB_NOTE_PATH}/back-end/1-golang/1.2-go-web-framework` },
        {text: 'Go-lang applicantion platform', link: `${WEB_NOTE_PATH}/back-end/1-golang/1.3-go-app-platform` },
        {text: 'Data Storage Platform ', link: `${WEB_NOTE_PATH}/back-end/1-golang/1.4-data-storage` },
      ]
    },

    {
      text: 'FireBase',
      items: [
        {text: 'Firebase autentication', link: `${WEB_NOTE_PATH}/back-end/2-firebase/2.1-firebase-auth` },
        {text: 'Firebase object storage', link: `${WEB_NOTE_PATH}/back-end/2-firebase/2.2-firebase-object-storage` },
      ]
    },

    {
      text: 'StateManagement Library',
      items: [
        {text: 'Redux', link: `${WEB_NOTE_PATH}/front-end/7-statemanagement/7.1` },
        {text: '', link: `${WEB_NOTE_PATH}/front-end/7-statemanagement/7.2`},
      ]
    },

    {
      text: 'Deployment',
      items: [
        {text: 'Github', link: `${WEB_NOTE_PATH}/front-end/8-deployment/8.1`},
        {text: 'Vercel', link: `${WEB_NOTE_PATH}/front-end/8-deployment/8.2`},
      ]
    },
]  