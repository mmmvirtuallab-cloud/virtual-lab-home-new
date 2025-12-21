// js/content.js

// --- HEADER & FOOTER DATA ---
export const SITE_DATA = {
    brandName: 'Virtual Laboratory',
    brandSub: 'By MIT',
    footerText: 'Developed and coordinated by: Dr. S.Vijayakumar, Dr.S.Sathish',
    footerSubText: ' Department of Production Technology, MIT Campus, Anna University, Chennai.'
};

// --- HOME PAGE CONTENT ---
export const HOME_CONTENT = {
    heroTitle: '',
    heroDescription:"",
    experimentsTitle: 'Available Experiments'
};

// --- ABOUT PAGE CONTENT ---
// This is an array of sections. 
// If 'isList' is true, 'text' should be an array of strings.
export const ABOUT_CONTENT = [
    {
        title: 'An Initiative',
        text: 'This virtual laboratory experimentation initiative of the Department of Production Technology (DoPT), MIT Campus, Anna University, Chennai, delivers engineering principles through digital innovation to create impactful learning tools that reflect the high academic standards of Anna University.',
        isList: false
    },
    {
        title: 'Vision',
        text: 'To provide an interactive and accessible virtual learning environment that enhances understanding of engineering principles, analytical thinking, and practical competence among engineering students through digital experimentation.',
        isList: false
    },
    {
        title: 'Objective',
        text: [
            'To complement conventional laboratory practices by providing a virtual platform for engineering experiments.',
            'To enhance understanding of the principles, construction, and operation of instruments through simulation-based learning.',
            'To promote self-paced, experiential, and self-directed learning beyond physical and time constraints.',
            'To improve experimental accuracy, data analysis, safety awareness, and preparedness for real laboratory sessions using modern engineering tools and industry practices.'
        ],
        isList: true
    },
    {
        title: 'Outcome',
        text: [
            'Apply fundamental engineering principles through effective use of virtual laboratory experiments.',
            'Understand and explain the working, construction, and application of engineering instruments.',
            'Perform experiments independently, analyze data accurately, and identify experimental errors.',
            'Demonstrate improved safety awareness and readiness for hands-on laboratory sessions using modern engineering tools and practices.'
        ],
        isList: true,
        intro: 'Upon successful use of the virtual lab, students will be able to:' // Optional intro text before list
    }
];

// --- SUBJECT CATEGORIES (Home Page Cards) ---
export const HOME_CATEGORY_CARDS = [
    {
        id: 'Metrology',
        displayTitle: 'Metrology',
        description: 'Precision measurement and calibration experiments.',
        image: 'images/metrology.png'
    },
    {
        id: 'Egineering Graphics',
        displayTitle: 'Engineering Graphics',
        description: 'Experiments related to technical drawing and design.',
        image: 'images/edrawing.png'
    },
    {
        id: 'Fluid',
        displayTitle: 'Fluid Mechanics',
        description: 'Experiments related to the mechanics of fluids.',
        image: 'images/micrometer.png'
    }
];

// --- EXPERIMENTS DATA ---
const EXPERIMENTS = [
    {
        id: 'exp-1',
        subject: 'Metrology',
        title: 'Profile Projector',
        description: 'Study of Profile Projector and Measurement of Object Dimensions.',
        imagePath: 'images/profileprojector.png',
        // link: "https://mmmvirtuallab-cloud.github.io/profile-projector/"
        link:"/profile-projector/"

    },
    {
        id: 'exp-2',
        subject: 'Metrology',
        title: "Micrometer",
        description: 'An outside micrometer is a precision measuring instrument used to measure external dimensions with high accuracy.',
        imagePath: 'images/micrometer.png',
        link: "/micro-meter/"
    },
    {
        id: 'exp-3',
        subject: 'Metrology',
        title: "Surface Roughness (Profilometer)",
        description: 'A profilometer is a precision measuring instrument used to measure the surface profile of a material.',
        imagePath: 'images/profile.jpg',
        link: "https://mmmvirtuallab-cloud.github.io/surface-roughness"
    },
    {
        id: 'exp-4',
        subject: 'Metrology',
        title: "Three Wire Method",
        description: 'Technique used to accurately measure the effective diameter of a screw thread.',
        imagePath: 'images/threewire.png',
        link: "/three-wire/"
    },
    {
        id: 'exp-5',
        subject: 'Metrology',
        title: 'Optical Autocollimator',
        description: 'Measure minute angular deviations and verify surface straightness using precision optical principles.',
        imagePath: 'images/autocollimator.png',
        link: 'https://mmmvirtuallab-cloud.github.io/autocollimator-lab/'
    },
    {
        id: 'exp-6',
        subject: 'Metrology',
        title: 'Bevel Protractor',
        description: 'Measure and layout angles with high precision using a versatile bevel protractor.',
        imagePath: 'images/bevelprotractor.png',
        link: '/bevel-protractor/'
    },
    {
        id: 'exp-7',
        subject: 'Metrology',
        title: 'Taper Angle Measurement',
        description: 'Measure taper angles accurately using precision sphere.',
        imagePath: 'images/taper.png',
        link: '/taper-angle/'
    },
    {
        id: 'exp-8',
        subject: 'Metrology',
        title: 'Vernier Caliper Experiment',
        description: 'Measure internal and external dimensions with high precision using a vernier caliper.',
        imagePath: 'images/vernier.png',
        link: '/vernier-caliper/'
    },
    {
        id: 'exp-9',
        subject: 'Metrology',
        title: 'Roundness Measurement',
        description: 'Mesure roundness deviations of cylindrical objects using v-block and dial gauge.',
        imagePath: 'images/roundness.png',
        link: '/roundness-exp/'
    }
];

export default EXPERIMENTS;