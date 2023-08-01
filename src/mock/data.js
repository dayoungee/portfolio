import {nanoid} from 'nanoid';

// HEAD DATA
export const headData = {
    title: '윤다영 포트폴리오', // e.g: 'Name | Developer'
    lang: '', // e.g: en, es, fr, jp
    description: '', // e.g: Welcome to my website
};

export const headerData = {
    title: 'YDY PORTFOLIO',
    menu: ['ABOUT ME', 'PROJECTS', 'CAREER',  'CONTACT'],
    click: ["about", "projects", "career",  "contact"],
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
    paragraphOne: '안녕하세요, 열정 가득한 개발자 윤다영입니다.',
    paragraphTwo: '나를 한마디로 표현한다면? "중력(Gravity)" 같은 사람! 중력처럼 사람을 끌어당기는 힘으로 협업과 소통을 통해 프로젝트를 이끌겠습니다. ' +
        '2년 8개월의 경력을 보유하고 있으며, 현재 서버 개발자로의 전향을 원하여 백엔드 기술을 공부하고 있습니다. 앞으로의 성장을 위해 항상 도전하고, 실천하는 개발자가 될 것 입니다.',
    paragraphThree: '감사합니다.',
    resume: 'https://glass-milkshake-24b.notion.site/6a04938519914cb8955548d5d911a477',
    // 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// CAREER DATA
export const careerData = [
    {
        id: 1,
        name: "(주)케이씨티",
        date: "2021.03 ~ 2023.02",
        description: "금융 및 공공 부문의 단말 시스템 제조 회사로 소프트웨어 개발을 담당하고 있는 연구 2팀에 정규직으로 입사",
        img:"https://user-images.githubusercontent.com/55998706/257448287-ee2b6d50-4060-43be-857b-d46e256881cb.png"
    },
    {
        id: 2,
        name: "뉴크",
        date: "2020.02 ~ 2020.09",
        description: "건축관련 SW를 개발하는 스타트업으로 6개월 계약직으로 입사 후, 연장 근무",
        img: "https://user-images.githubusercontent.com/55998706/257444556-3b6665f2-cc36-4056-b49f-a0b74e7d16d1.jpg"
    },
];

// PROJECTS DATA
export const projectsData = [
    {
        id: 1,
        img: '01.png',
        title: 'Judy go Home',
        date: '(2017.07~2018.08)',
        info: 'C# 유니티로 개발한 2D플랫포머 게임입니다. 학술제에 출품하였으며 금상을 수상하였습니다.',
        info2:
            '협업 스터디, 스터디 결과 발표에서 수상을 받았습니다. 협업 스터디를 했을 당시에는 플레이어의 기본적인 동작, 키보드 이벤트만 구현이 되어 있는 상태였습니다. 이후, 학술제를 위해 Score에 따른 Perfect 엔딩, 몬스터 피력, 플레이어를 따라가는 AI몬스터 등 게임성을 더해 학술제에서 수상할 수 있었습니다.',
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
            '첫 직장에서 사용하던 MFC, C++ 언어에 익숙해지기 위해서 공부용으로 개발한 게임입니다. 레지스트리 값을 이용해 게임의 배경색을 변경 가능하도록 구현하였으며, TCP통신을 통한 1대1 채팅, MySQL를 활용하여 간단한 로그인, 회원가입 기능을 구현했습니다.',
        url: '',
        repo: 'https://github.com/dayoungee/Tetris', // if no repo, the button will not show up
    },
    /* {
      id: 3,
      img: '04.png',
      title: '포트폴리오',
      date: '(2022.05~)',
      info: 'react로 개발한 개인 포트폴리오 웹 사이트입니다.',
      info2:
          '본래 있던 디자인 템플릿을 따와, 메인페이지를 수정하고, 헤더와 모달 기능을 추가했습니다.',
      url: '',
      repo: 'https://github.com/dayoungee/portfolio',
    }, */
    {
        id: 3,
        img: '04.png',
        title: 'Stackoverflow Clone Coding',
        date: '(2023.06.14~2023.06.26)',
        info: '프론트 엔드 4명, 백엔드 3명 총 7명으로 구성된 팀에서 개발한 Stackoverflow Clone Coding 프로젝트입니다.',
        info2:
            'Stackoverflow의 Q&A 게시판 기능을 똑같이 구현한 프로젝트입니다. 해당 팀에서 팀장을 맡았으며, 테스트 서버(EC2)와 CI/CD(Jenkins)를 직접 구축하여 배포 관련 경험을 쌓을 수 있었고, 테스트 코드도 작성했기에 의미있는 프로젝트였습니다.',
        url: '',
        repo: 'https://github.com/dayoungee/stackoverflow-clone-coding',
    },
    {
        id: 4,
        img: '04.png',
        title: 'PliP',
        date: '(2023.06.29~2023.07.21)',
        info: '프론트 엔드 3명, 백엔드 3명 총 6명으로 구성된 팀에서 개발한 여행 일정 관리 및 일지 작성 웹 서비스 입니다.',
        info2:
            'JWT 인증 방식을 처음으로 직접 사용했으며, 실제로 개발을 함으로써 Spring Security, OAuth2.0에 대해서 학습할 수 있었고, 말로만 들었던 Redis를 사용해볼 수 있었습니다. 마지막으로 JavaMailSender를 사용함으로써 메일 전송 기능을 구현할 수 있었습니다.',
        url: '',
        repo: 'https://github.com/dayoungee/plip',
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


