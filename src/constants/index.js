export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Area Reservation - FEN',
        desc: 'Web reservation system developed for the teachers of the Faculty of Nursing and Nutrition of the UASLP during my social service.',
        subdesc:
            'Built using Laravel with Livewire, Bootstrap, Blade, and some Jquery plugins for the calendar',
        href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
        texture: '/textures/project/agendafen.mp4',
        logo: '/assets/uaslp.png',
        logoStyle: {
            backgroundColor: '#25215c',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'Laravel',
                path: '/assets/laravel.svg',
            },
            {
                id: 2,
                name: 'Livewire',
                path: 'assets/livewire.svg',
            },
            {
                id: 3,
                name: 'Bootstrap',
                path: '/assets/bootstrap.svg',
            },
            {
                id: 4,
                name: 'Jquery',
                path: '/assets/jquery.svg',
            },
        ],
    },
    {
        title: 'SnakeFruit',
        desc: 'A game developed in Java and published in Greenfoot. In this game you are a snake that have to catch the fruits and avoid different obstacles and enemies to make it to the next level.',
        subdesc:
            'To win you need 5000 points, and you have 5 lives, if you lose them the game is over.',
        href: 'https://www.greenfoot.org/scenarios/28145',
        texture: '/textures/project/snakefruit.mp4',
        logo: '/assets/snakelogo.png',
        logoStyle: {
            backgroundColor: '#033600',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'Java',
                path: '/assets/java.svg',
            },
        ],
    },
    {
        title: 'Expense Tracker',
        desc: 'Web application to keep track of expenses. It has a user-friendly interface and allows you to add, edit, and delete expenses with ease.',
        subdesc:
            'Made with React.',
        href: 'https://control-de-gastos-con-react.netlify.app/',
        texture: '/textures/project/expensetracker.mp4',
        logo: '/assets/wallet.svg',
        logoStyle: {
            backgroundColor: '#031747',


            border: '0.2px solid #5D8AF1',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
        ],
    },
    {
        title: 'Nutritional Agenda - Body Balance',
        desc: 'A simple website where you can book appointments for a nutritionist, and get a personalized plan for your body.',
        subdesc:
            'Made with HTML, CSS and vanilla JS. No frameworks here, as simple as it gets.',
        href: 'http://agenda-nutricional.infinityfreeapp.com/view/index.php',
        texture: '/textures/project/bodybalance.mp4',
        logo: '/assets/bodybalancelogo.png',
        logoStyle: {
            backgroundColor: '#053252',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'HTML',
                path: '/assets/html.svg',
            },
            {
                id: 2,
                name: 'CSS',
                path: 'assets/css.svg',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/javascript.svg',
            },
            {
                id: 4,
                name: 'PHP',
                path: '/assets/php.svg',
            },
        ],
    },
    // {
    //     title: 'Imaginify - AI Photo Manipulation App',
    //     desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    //     subdesc:
    //         'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    //     href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    //     texture: '/textures/project/project5.mp4',
    //     logo: '/assets/project-logo5.png',
    //     logoStyle: {
    //         backgroundColor: '#1C1A43',
    //         border: '0.2px solid #252262',
    //         boxShadow: '0px 0px 60px 0px #635BFF4D',
    //     },
    //     spotlight: '/assets/spotlight5.png',
    //     tags: [
    //         {
    //             id: 1,
    //             name: 'React.js',
    //             path: '/assets/react.svg',
    //         },
    //         {
    //             id: 2,
    //             name: 'TailwindCSS',
    //             path: 'assets/tailwindcss.png',
    //         },
    //         {
    //             id: 3,
    //             name: 'TypeScript',
    //             path: '/assets/typescript.png',
    //         },
    //         {
    //             id: 4,
    //             name: 'Framer Motion',
    //             path: '/assets/framer.png',
    //         },
    //     ],
    // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Framer',
        pos: 'Lead Web Developer',
        duration: '2022 - Present',
        title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
        icon: '/assets/framer.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Figma',
        pos: 'Web Developer',
        duration: '2020 - 2022',
        title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
        icon: '/assets/figma.svg',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Notion',
        pos: 'Junior Web Developer',
        duration: '2019 - 2020',
        title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
        icon: '/assets/notion.svg',
        animation: 'salute',
    },
];