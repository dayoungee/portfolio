import {nanoid} from 'nanoid';

// HEAD DATA
export const headData = {
  title: '윤다영 포트폴리오', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

export const headerData = {
  title: 'YDY PORTFOLIO',
  menu: ['ABOUT ME', 'PROJECTS', 'CAREER', 'CONTACT'],
  click: ["about", "projects", "career", "contact"],
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
  paragraphOne: '안녕하세요, 백엔드 개발자 윤다영입니다.',
  paragraphTwo: '나를 한마디로 표현한다면? "중력(Gravity)" 같은 사람! 중력처럼 사람을 끌어당기는 힘으로 협업과 소통을 통해 프로젝트를 이끌겠습니다. ' +
    '앞으로의 성장을 위해 항상 도전하고, 실천하는 백엔드 개발자가 될 것 입니다.',
  paragraphThree: '감사합니다.',
  resume: 'https://glass-milkshake-24b.notion.site/1f555e850383480ebff9a6bb3274fd1d?pvs=4',
  // 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// CAREER DATA
export const careerData = [
  {
    id: 1,
    name: "(주)제네시스네스트",
    date: "2024.01 ~",
    description: "BackEnd 개발을 담당하고 있는 서버팀에 정규직으로 입사",
    img: "https://github.com/dayoungee/portfolio/assets/55998706/cf76a3a6-d8e0-4ca1-baa3-cb03673cb2a3"
  },
  {
    id: 2,
    name: "(주)케이씨티",
    date: "2021.03 ~ 2023.02",
    description: "금융 및 공공 부문의 단말 시스템 제조 회사로 소프트웨어 개발을 담당하고 있는 연구 2팀에 정규직으로 입사",
    img: "https://user-images.githubusercontent.com/55998706/257448287-ee2b6d50-4060-43be-857b-d46e256881cb.png"
  },
  {
    id: 3,
    name: "뉴크",
    date: "2020.02 ~ 2020.09",
    description: "건축관련 SW를 개발하는 스타트업으로 6개월 계약직으로 입사 후, 연장 근무",
    img: "https://user-images.githubusercontent.com/55998706/257444556-3b6665f2-cc36-4056-b49f-a0b74e7d16d1.jpg"
  }
];

// PROJECTS DATA
export const projectsData = [
  {
    id: 1,
    img: '01.png',
    title: 'Judy go Home',
    date: '(2017.07 ~ 2018.08)',
    info: 'C#과 Unity 기반으로 개발한 2D 플랫포머 게임으로, 교내 소프트웨어 학술제에서 금상을 수상한 프로젝트입니다.',
    info2:
      '플레이어 이동, 키보드 이벤트, 점수 기반 엔딩 분기, 몬스터 체력 시스템, 플레이어 추적 몬스터 등을 구현했습니다. 단순 동작 구현에서 그치지 않고 게임 진행 흐름과 사용자 경험을 고려해 기능을 확장하며 완성도를 높였습니다.',
    url: '',
    repo: 'https://github.com/dayoungee/judygohome',
  },
  {
    id: 2,
    img: '02.png',
    title: 'Tetris',
    date: '(2020.02 ~ 2020.03)',
    info: 'C++과 MFC를 활용해 개발한 다이얼로그 기반 테트리스 게임입니다.',
    info2:
      'MFC와 C++ 기반 애플리케이션 구조에 익숙해지기 위해 진행한 개인 프로젝트입니다. 게임 로직 구현뿐 아니라 레지스트리를 활용한 배경색 설정, TCP 통신 기반 1:1 채팅, MySQL 기반 로그인 및 회원가입 기능을 함께 구현하며 클라이언트 프로그램과 데이터 연동 흐름을 경험했습니다.',
    url: '',
    repo: 'https://github.com/dayoungee/Tetris',
  },
  {
    id: 3,
    img: '04.png',
    title: 'Stackoverflow Clone Coding',
    date: '(2023.06.14 ~ 2023.06.26)',
    info: '프론트엔드 4명, 백엔드 3명으로 구성된 팀에서 진행한 Stack Overflow 클론 프로젝트입니다.',
    info2:
      '팀장을 맡아 백엔드 개발 일정과 협업 흐름을 관리했으며, Q&A 게시판의 Question 도메인 API 개발을 담당했습니다. AWS EC2 기반 테스트 서버와 Jenkins CI/CD 환경을 구축했고, Spring Rest Docs와 Swagger UI를 연동하여 프론트엔드와 협업하기 위한 API 문서화 환경을 구성했습니다.',
    url: '',
    repo: 'https://github.com/dayoungee/stackoverflow-clone-coding',
  },
  {
    id: 4,
    img: '04.png',
    title: 'PliP',
    date: '(2023.06.29 ~ 2023.07.21)',
    info: '프론트엔드 3명, 백엔드 3명으로 구성된 팀에서 개발한 여행 일정 관리 및 여행 일지 작성 웹 서비스입니다.',
    info2:
      '회원 도메인을 담당하여 회원 CRUD, JWT 기반 인증, OAuth2 소셜 로그인, Redis 기반 토큰 블랙리스트 기능을 구현했습니다. 또한 N+1 문제가 발생한 구간을 확인하고 Batch Size를 조정하여 쿼리 수를 줄이는 등 성능 개선을 함께 진행했습니다.',
    url: '',
    repo: 'https://github.com/dayoungee/plip',
  },
];



// CONTACT DATA
export const contactData = {
  cta: '여기까지 읽어주셔서 감사합니다!',
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
    {
      id: nanoid(),
      name: 'rss',
      url: 'https://memodayoungee.tistory.com/',
    },
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
    info: ``
  },
  {
    id: 2,
    info: `테스트테스트테스트`,
    data: "##안녕 두번째 테스트야<br>"
  },
  {
    id: 3,
    info: `테스트테스트테스트`,
    data: `_이렇게 해야될텐데_`
  },
  {
    id: 4,
    info: `테스트테스트테스트`,
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
  /* {
    id: 3,
    path: ["https://user-images.githubusercontent.com/55998706/240904424-b638481c-2e07-47f9-97f4-c225f9d58fbc.png",
        "https://user-images.githubusercontent.com/55998706/240954653-a5b26828-c367-40a8-936a-35bbc7ea659d.png",
        "https://user-images.githubusercontent.com/55998706/240954734-96a4f07c-3b8a-4fb1-885d-4fe036078d98.png",
        "https://user-images.githubusercontent.com/55998706/240954631-f7d14414-0338-44b3-b59c-34debec17624.png"
    ]
  }, */
  {
    id: 3,
    path: ["https://user-images.githubusercontent.com/55998706/253758357-b99172a5-9ad2-47f8-a8e8-9ac446b18f0e.png",
      "https://user-images.githubusercontent.com/55998706/253758353-ad324cdb-4d04-4223-a4ec-941f19f7ad3b.png",
      "https://user-images.githubusercontent.com/55998706/253758348-bca896ff-b7e6-46f4-b370-373245792b19.png",
      "https://user-images.githubusercontent.com/55998706/253758344-5c5c0fcd-fca4-4742-b151-ef19179fb46d.png",
      "https://user-images.githubusercontent.com/55998706/253759088-71965b72-054f-4fcd-aeb9-9f912d46074c.png",
      "https://user-images.githubusercontent.com/55998706/253758337-8c4c16e2-9c03-44dc-b839-eedad9c8bd15.png",
    ]
  },
  {
    id: 4,
    path: ["https://user-images.githubusercontent.com/55998706/253759537-3a2d9068-1ae5-40ef-b9ba-1117bd776c64.png",
      "https://user-images.githubusercontent.com/55998706/253759951-cd12f169-af0a-4957-bfad-a6574df0ae71.png",
      "https://user-images.githubusercontent.com/55998706/255637074-31b988fc-e886-41a9-b972-ce7b140a5917.png",
      "https://user-images.githubusercontent.com/55998706/255637687-0dca9369-234e-4e22-8547-290258e60114.png"
    ]
  },
];

export const projectFontData = {
  font: `<style type="text/css">
            @font-face {
    font-family: 'SUITE-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
}
            body{
                font-family: 'SUITE-Regular';
            }</style>
`
};


