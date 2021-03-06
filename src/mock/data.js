import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '윤다영 포트폴리오', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

export const headerData = {
  title: 'YDY PORTFOLIO',
  menu:['ABOUT ME','PROJECTS','CONTACT'],
  click:["about","projects","contact"],
}
// HERO DATA
export const heroData = {
  title: '윤다영',
  name: '의 포트폴리오',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '안녕하세요, 1일 1커밋을 목표로하는, 도전하는 것이 즐거운 개발자 윤다영입니다.',
  paragraphTwo:
    '현재 c++ 개발자로 2년 가까이의 경력을 가지고 있지만, 웹/앱 개발자로의 전향을 원하여 웹 개발 관련 기술을 독학하고 있습니다. React를 집중적으로 스터디하고 있지만, 프론트에만 국한된 것이 아닌 백엔드 기술까지 스터디하여 풀스택 개발자를 목표로 하고 있습니다. 앞으로의 성장을 위해 항상 도전하고, 실천할 것입니다.',
  paragraphThree: '감사합니다.',
  resume: 'https://glass-milkshake-24b.notion.site/c6a67e125e01455e8741229aa5040376',
  // 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: 1,
    img: '01.png',
    title: 'Judy go Home',
    date: '(2017.07~2018.08)',
    info: 'C# 유니티로 개발한 2D플랫포머 게임입니다. 학술제에 출품하였으며 금상을 수상하였습니다.',
    info2:
      '동시에 협업 스터디, 발표에서도 수상을 받았으며 협업 스터디를 했을 당시에는 플레이어의 기본적인 동작, 키보드 이벤트만 구현이 되어 있는 상태였습니다. 이후, 학술제를 위해 또 다른 엔딩, 몬스터 피력, 플레이어를 따라가는 AI몬스터 등 게임성을 더해 학술제에서 수상할 수 있었습니다.',
    url: '',
    repo: 'https://github.com/dayoungee/judygohome', // if no repo, the button will not show up
  },
  {
    id: 2,
    img: '02.png',
    title: 'Tetris',
    date: '(2020.02~2020.03)',
    info: 'MFC를 활용한 다이얼로그 기반의 테트리스 게임입니다. MFC 스터디 용으로 개발했습니다.',
    info2:
      '첫 직장에서 사용하던 MFC, C++ 언어에 익숙해지기 위해서 공부용으로 개발한 게임입니다. 레지스트리 값을 이용해 게임의 배경색을 변경 가능하도록 구현하였으며, 1대1 채팅, MySQL DB를 활용한 로그인, 회원가입 기능을 구현했습니다.',
    url: '',
    repo: 'https://github.com/dayoungee/Tetris', // if no repo, the button will not show up
  },
  {
    id: 3,
    img: '03.png',
    title: '디즈니 공주들',
    date: '(2017.05~2017.05)',
    info: '대학시절 프로젝트로 php언어 기반의 커뮤니티 웹입니다.',
    info2:
      'MySql DB를 활용하였으며 로그인, 로그아웃, 회원가입, 회원탈퇴, 게시판, 익명게시판 기능을 구현했습니다.',
    url: '',
    repo: 'https://github.com/dayoungee/webpage_PHP', // if no repo, the button will not show up
  },
  {
    id: 4,
    img: '04.png',
    title: '포트폴리오',
    date: '(2022.05~)',
    info: 'react로 개발한 개인 포트폴리오 웹 사이트입니다.',
    info2:
        '본래 있던 디자인 템플릿을 따와, 메인페이지를 수정하고, 헤더와 모달 기능을 추가했습니다.',
    url: '',
    repo: 'https://github.com/dayoungee/portfolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'dbsek21@naver.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/dayoungee',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

export const projectData = [
  {
    id: 1,
    data: `#JUDY GO HOME
    ===========================================`
  },
  {
    id: 2,
    data: "##안녕 두번째 테스트야"
  },
  {
    id: 3,
    data: `_이렇게 해야될텐데_`
  },
  {
    id: 4,
    data: `_이렇게 해야될텐데44_`
  },
];
export const projectImageData = [
  {
    id: 1,
    path: ["https://github.com/assets/55998706/cf87d880-20d9-11ea-8f3d-468c79a12b31",
          "https://github.com/assets/55998706/2097cc80-20da-11ea-8259-378dadf70af7",
        "https://github.com/assets/55998706/e0d0e500-20d9-11ea-92db-7a0e98530e45",
        "https://github.com/assets/55998706/11b11a00-20da-11ea-9815-9da5128d24b9",
        "https://github.com/assets/55998706/3dcc9b00-20da-11ea-8d13-226c32e59a1a",
          "https://github.com/assets/55998706/32796f80-20da-11ea-85e4-cc10b26daee5",
        "https://github.com/assets/55998706/6fddfd00-20da-11ea-8e56-c7dfb73b5c56"
    ]
  },
  {
    id: 2,
    path: ["https://github.com/assets/55998706/7dc5cd1f-402c-4a27-aa76-179f07d39c63",
      "https://github.com/assets/55998706/5e1ba1a1-2e54-492e-ae06-aed4f4fb6c7e",
      "https://github.com/assets/55998706/438fc2e8-a568-48c8-ab8e-5cb2a23376ca",
        "https://github.com/assets/55998706/2b32cfdb-9508-41b4-974c-727b64f28a29",
        "https://github.com/assets/55998706/b99316d5-b316-4118-a4af-f7b643712836",
        "https://github.com/assets/55998706/6572052c-ad6e-4ae4-a03a-e7db2f6d46e9",
        "https://github.com/assets/55998706/d2a53078-9919-4cf9-9ddd-e33b584ac646"
    ]
  },
  {
    id: 3,
    path: ["https://github.com/assets/55998706/8bd1a100-15fa-11ea-88ea-557ea1ad4cfd",
      "https://github.com/assets/55998706/8c6a3780-15fa-11ea-93a3-3f0979ecde04",
      "https://github.com/assets/55998706/8d02ce00-15fa-11ea-8502-5f98128b08e9",
        "https://github.com/assets/55998706/8d02ce00-15fa-11ea-85f0-9b6ed0366ca6",
        "https://github.com/assets/55998706/8d02ce00-15fa-11ea-96be-0f662e6c9ba2",
        "https://github.com/assets/55998706/8d9b6480-15fa-11ea-8fc3-1a0cbdb9c672"
    ]
  },
  {
    id: 4,
    path: ["https://github.com/assets/55998706/8bd1a100-15fa-11ea-88ea-557ea1ad4cfd",
      "https://github.com/assets/55998706/8c6a3780-15fa-11ea-93a3-3f0979ecde04",
      "https://github.com/assets/55998706/8d02ce00-15fa-11ea-8502-5f98128b08e9",
      "https://github.com/assets/55998706/8d02ce00-15fa-11ea-85f0-9b6ed0366ca6",
      "https://github.com/assets/55998706/8d02ce00-15fa-11ea-96be-0f662e6c9ba2",
      "https://github.com/assets/55998706/8d9b6480-15fa-11ea-8fc3-1a0cbdb9c672"
    ]
  },
];

