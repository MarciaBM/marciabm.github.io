const settings = {
    isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
    title: "Márcia Matias | Portfolio",
    description:
        "A Data Science practitioner who thrives to leverage startups with AI based solutions with a blend of UI/UX",
    og: {
        title: "Márcia Portfolio",
        type: "website",
        url: "http://rohankokkula.ml/",
    },
};

//Home Page
const greeting = {
    title: "Hello!",
    sub: "Márcia Matias",
    logo_name: "Márcia Matias",
    resumeLink: "",
};

// home logos
const competitiveSites = {
    competitiveSites: [
        {
            siteName: "LinkedIn",
            iconifyClassname: "simple-icons:linkedin",
            style: {
                color: "#0077b5",
            },
            profileLink: "https://www.linkedin.com/in/marciabm/",
        },
        {
            siteName: "Github",
            iconifyClassname: "simple-icons:github",
            style: {
                color: "black",
            },
            profileLink: "https://github.com/MarciaBM",
        },
    ],
};

//what i do?
const skills = {
    data: [
        {
            title: "Team Lead",
            fileName: "DesignImg",
            skills: [
                "⚡ Leading in the development of a web application and a Python API.",
                "⚡ Very good skills of organisation and responsibility.",
                "⚡ Helped guiding eight students through theirs master's thesis.",
                "⚡ Master's thesis reviewing.",
                "⚡ Making contact between the stakeholders and the students.",
            ],
            softwareSkills: [
                {
                    skillName: "git",
                    fontAwesomeClassname: "logos-git-icon",
                },
                {
                    skillName: "Docker",
                    fontAwesomeClassname: "logos-docker-icon",
                },
            ]
        },
        {
            title: "Full-Stack Development",
            fileName: "FullStackImg",
            skills: [
                "⚡ Modeling and implementing spatial and relational databases using PostgreSQL & PostGIS, or similar database systems.",
                "⚡ Modeling and creating a back-end API from scratch using Java, Quarkus, or similar frameworks.",
                "⚡ Experience in handling with spatial data, specially cleaning and organizing it.",
                "⚡ Experience in creating front-end applications using ReactJS, NextJS, or similar frameworks.",
                "⚡ Experience in use spatial interactive frameworks, like OpenLayers and ArcGIS Maps SDK, to show maps and geometries.",
            ],
            softwareSkills: [
                {
                    skillName: "Java",
                    fontAwesomeClassname: "logos-java",
                },
                {
                    skillName: "PostgreSQL",
                    fontAwesomeClassname: "logos-postgresql",
                },
                {
                    skillName: "TypeScript",
                    fontAwesomeClassname: "logos:typescript-icon",
                },
                {
                    skillName: "Quarkus",
                    fontAwesomeClassname: "logos-quarkus-icon",
                },
                {
                    skillName: "ReactJS",
                    fontAwesomeClassname: "logos-react",
                },
                {
                    skillName: "NextJS",
                    fontAwesomeClassname: "logos-nextjs-icon",
                },

                {
                    skillName: "OpenLayers",
                    fontAwesomeClassname: "logos-openlayers",
                },
                {
                    skillName: "IntelliJ IDEA",
                    fontAwesomeClassname: "logos-intellij-idea",
                },
            ],
        },

        {
            title: "Data Analysis",
            fileName: "DataScienceImg",
            skills: [
                "⚡ Developing highly scalable production-ready models for various deep learning and statistical use cases",
                "⚡ Experience in working with Computer Vision using OpenCV and NLP projects(T5-Transformer & OpenAI)",
                "⚡ Having good hands-on with Data Cleaning, processing & Analysing using Pandas, Tableau & PowerBI",
                "⚡ Experience with Text-to-speech encoders/decoders (speech synthesis) & Voice Cloning",
            ],
            softwareSkills: [
                {
                    skillName: "PostgreSQL",
                    fontAwesomeClassname: "logos-postgresql",
                },
                {
                    skillName: "Neo4j",
                    fontAwesomeClassname: "logos-neo4j",
                },
                {
                    skillName: "Python",
                    fontAwesomeClassname: "logos-python",
                },
                {
                    skillName: "Tableau",
                    fontAwesomeClassname: "logos-tableau-icon",
                },
                {
                    skillName: "MongoDB",
                    fontAwesomeClassname: "logos-mongodb",
                },
            ],
        },

    ],
};

// Projects Page
const projectsHeader = {
    title: "Projects",
    description:
        "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
    list: [
        {
            title: "TEATH",
            img_path: "project-06.png",
            description:
                "A WebApp for Extracting Text from Images and applying various thresholding methods with sentiment analysis using TextBlob",
            tags: [
                {
                    lang: "python",
                    color: "#004782",
                },
                {
                    lang: "TextBlob",
                    color: "#820032",
                },
                {
                    lang: "OpenCV",
                    color: "#00a100",
                },
                {
                    lang: "Streamlit",
                    color: "#ff4b4b",
                },
                {
                    lang: "Heroku",
                    color: "#3c0095",
                },
            ],
            link: "https://teath.herokuapp.com ",
            code: "https://github.com/rohankokkula/TEATH",
            linkcolor: "white",
        },

        {
            title: "Voice Gender Detection",
            img_path: "voice.gif",
            description:
                "A streamlit webapp which detects user's gender and emotion based on realtime audio input.",
            tags: [
                {
                    lang: "ongoing",
                    color: "red",
                },
                {
                    lang: "python",
                    color: "#004782",
                },
                {
                    lang: "matplotlib",
                    color: "#c47206",
                },
                {
                    lang: "tensorflow",
                    color: "#4257f5",
                },
                {
                    lang: "Streamlit",
                    color: "#ff4b4b",
                },
            ],
            link: "",
            code: "",
            linkcolor: "white",
        },
        {
            title: "NeuralViz",
            img_path: "neural.gif",
            description:
                "A webapp to visualize Neural Networks based on no. of layers and neurons, calculate Loss and understand math behind Back Propagation algo.",
            tags: [
                {
                    lang: "python",
                    color: "#004782",
                },
                {
                    lang: "numpy",
                    color: "#8700b0",
                },
                {
                    lang: "matplotlib",
                    color: "#c47206",
                },
                {
                    lang: "Streamlit",
                    color: "#ff4b4b",
                },
                {
                    lang: "Heroku",
                    color: "#3c0095",
                },
            ],
            link: "https://neuralviz.herokuapp.com/",
            code: "https://github.com/rohankokkula/neuralviz",
            linkcolor: "white",
        },
        {
            title: "Semantic Search APP",
            img_path: "project-03.png",
            description:
                "Demo of OpenAI's GPT-3 model on Semantic search using streamlit.",
            tags: [
                {
                    lang: "ongoing",
                    color: "red",
                },
                {
                    lang: "Streamlit",
                    color: "#ff4b4b",
                },
            ],
            link: "",
            code: "",
            linkcolor: "white",
        },
        {
            title: "Youtube Thumbnail Generator & AutoUploader",
            img_path: "project-02.png",
            description:
                "A python streamlit webapp to automate generating & uploading youtube thumbnails using Youtube v3 API",
            tags: [
                {
                    lang: "internal project",
                    color: "red",
                },
                {
                    lang: "youtube v3 api",
                    color: "red",
                },
            ],
            link: "",
            code: "",
            linkcolor: "white",
        },

        {
            title: "Newsearcher",
            img_path: "news.gif",
            description:
                "Enter your search keyword and get a summary of news weblinks with images without actually opening the links.",
            tags: [
                {
                    lang: "python",
                    color: "#004782",
                },
                {
                    lang: "newspaper3k",
                    color: "#303030",
                },
                {
                    lang: "Streamlit",
                    color: "#ff4b4b",
                },
                {
                    lang: "nltk",
                    color: "#051c61",
                },
            ],
            link: "https://newsearcher.herokuapp.com/",
            code: "https://github.com/rohankokkula/Newsearcher",
            linkcolor: "white",
        },
        {
            title: "ActiWeight",
            img_path: "acti.gif",
            description:
                "ActiWeight is an Interactive Visualizer for understanding intuition behind 10 Activation Functions used in Neural Networks.",
            tags: [
                {
                    lang: "python",
                    color: "#004782",
                },
                {
                    lang: "matplotlib",
                    color: "#c47206",
                },
                {
                    lang: "Streamlit",
                    color: "#ff4b4b",
                },
                {
                    lang: "Heroku",
                    color: "#3c0095",
                },
            ],
            link: "https://www.youtube.com/watch?v=2vk9lQuX_1Q",
            code: "https://github.com/rohankokkula/Actiweight",
            linkcolor: "white",
        },
    ],
};

const resumeleft = {
    left: {
        title: ["Experience"],
        data: [
            {
                title: "Lead Research Fellow | Full-Stack Developer",
                subtitle: "NOVA School of Science and Technology & AZR",
                date: "September 2024 - present",
                companies: ["fct.png", "azr.png"],
                content: [
                    "Continued the implementation of the LAND IT project",
                    "Helped guiding eight students through their master's thesis, related to the LAND IT project",
                ],
            },
            {
                title: "Research Fellow | Full-Stack Developer",
                subtitle: "NOVA School of Science and Technology & AZR",
                date: "June 2023 - August 2024",
                companies: ["fct.png", "azr.png"],
                content: [
                    "Full-Stack Developer for the LAND IT project, which was also my Master's thesis, created from scratch",
                    "The LAND IT project is a decision support system for land management, in specific for the AIGP (PRR)",
                    "This web application uses Quarkus, PostgreSQL, ReactJS, and OpenLayers",
                    "Worked with large amounts of geospatial data, cleaning and organizing them",
                ],
            },
            {
                title: "Teaching Assistant",
                subtitle: "NOVA School of Science and Technology",
                date: "September 2022 - January 2023",
                companies: ["fct.png"],
                content: [
                    "Teaching assistant for the course of Introduction to Programming",
                    "Taught the practical classes",
                    "Helped students with their assignments and projects"
                ],
            },
            {
                title: "Introduction to Programming Tutor",
                subtitle: "Autonomous",
                companies: [],
                date: "November 2020 - July 2022",
                content: [
                    "Covered programming languages: Java, C# and JavaFX",
                    "Communication skills"
                ],
            },
        ],
    },
};

const resumeright = {
    right: [
        {
            title: ["Education"],
            data: [
                {
                    title: "Integrated Master in Computer Science and Engineering",
                    subtitle: "NOVA School of Science and Technology",
                    companies: ["fct.png"],
                    date: "Sept. 2018 - Dec. 2023",
                    content: [<span>Bachelor Degree: Final grade - <b>17 mark</b> | A (scale: 0-20 | ECTS grading system)</span>,
                        <span>Master's Degree: Final grade - <b>18 mark</b> | A (scale: 0-20 | ECTS grading system)</span>,
                        <span>Master's Thesis: <a target="_blank" href={"https://run.unl.pt/handle/10362/163563"}> Decision Support System for the Integrated Areas of the Territory </a> </span>,
                        <span>Master's Thesis Grade: <b>19 mark</b> | A (scale: 0-20 | ECTS grading system)</span>,
                        <span>Master's Main Courses:<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;• Data Visualization and Analysis <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;• Data Modeling<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;• Database Systems<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;• Concurrency and Parallelism<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;• Cloud Computing Systems<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;• Information Retrieval<br/>
                        </span>

                    ]
                },
                {
                    title: "Scientific-Humanistic Course in Science and Technology",
                    subtitle: "Escola Secundária José Saramago, Mafra",
                    companies: [],
                    date: "2015 - 2018",
                    content: ["Final grade: 16 mark out of 20"],
                },
            ],
        },
        {
            title: ["Achievements & Awards"],
            data: [
                {
                    title: "Merit Scholarship by DGES",
                    companies: [],
                    content: [
                        <span>Awarded with a <a target="_blank"
                                                href={"https://www.fct.unl.pt/estudante/informacao-academica/bolsas-de-merito-referentes-ao-aproveitamento-escolar-em-2022/2023"}>merit scholarship</a> by DGES for the academic year 2022/2023, for being among the top-performing integrated master's students in the faculty that year</span>,
                    ],
                },
                {
                    title: "3rd place in the National University Championship of Archery (CNU) ",
                    companies: [],
                    content: [
                        "3rd place in the National University Championship of Archery (CNU) in the academic year 2022/2023, in the category of Feminine Recurve Bow",
                    ]
                }
            ],
        }
    ],
};

//certificate cards
const certifications = {
    certifications: [
        {
            title: "Electoral Agents – Board Members",
            subtitle: "Plataforma NAU",
            logo_path: "nau.png",
            certification_code: "7aa9d84ae0354fcfb2e3df6130dfdb2a",
            certificate_link: "https://lms.nau.edu.pt/certificates/7aa9d84ae0354fcfb2e3df6130dfdb2a",
            alt_name: "NAU",
            date: "May 2024",
            color_code: "#e7e7e7",
        },
        {
            title: "SQL (Basic)",
            subtitle: "Hacker Rank",
            logo_path: "hr.png",
            certification_code: "cc607b0c39c8",
            certificate_link: "https://www.hackerrank.com/certificates/cc607b0c39c8",
            alt_name: "NAU",
            date: "October 2023",
            color_code: "#e7e7e7",
        },
        {
            title: "Preliminary English Test (PET) - Level B1",
            subtitle: "Cambridge University Press & Assessment",
            logo_path: "cambridge.png",
            certification_code: "0049593824",
            certificate_link: "",
            alt_name: "PET",
            date: "July 2015",
            color_code: "#e7e7e7",
        },
    ],
};

// Contact Page
const contactPageData = {
    contactSection: {
        title: "Contact Me",
        profile_image_path: "contact.jpg",
        description:
            "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Cloud and Opensource Development.",
    },
    addressSection: {
        title: "Address",
        subtitle: "Mafra, Lisboa",
    },
    phoneSection: {
        title: "Phone Number",
        subtitle: "+91 9022817659",
    },
};

//contact icons
const socialMediaLinks = [
    {
        name: "Github",
        link: "https://github.com/MarciaBM",
        fontAwesomeIcon: "logos-github-icon",
        // fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
        backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/marciabm/",
        fontAwesomeIcon: "logos-linkedin-icon", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
        backgroundColor: "rgb(0,119,181)", // Reference https://simpleicons.org/?q=linkedin
    },
    {
        name: "Email",
        link: "mailto:marciab.matias@hotmail.com",
        fontAwesomeIcon: "vscode-icons:file-type-outlook", // Reference https://fontawesome.com/icons/google?style=brands
        backgroundColor: "#126ce5", // Reference https://simpleicons.org/?q=gmail
    },
];

const languages = [
    {
        name: "Java",
        value: 5
    },
    {
        name: "SQL",
        value: 4
    },
    {
        name: "TypeScript",
        value: 4
    },
    {
        name: "Python",
        value: 3
    }
]

const idioms = [
    {
        name: "Portuguese",
        value: 5
    },
    {
        name: "English",
        value: 4
    },
    {
        name: "Spanish",
        value: 2
    }
]

const softSkills = [
    "⚡ Motivation by challenges",
    "⚡ Organization",
    "⚡ Working under pressure",
    "⚡ Communication",
    "⚡ Critical thinking",
]

const hobbies = [
    {
        skillName: "Watch TV Shows",
        fontAwesomeClassname: "tabler-device-tv",
    },
    {
        skillName: "Going to the Gym",
        fontAwesomeClassname: "mdi-gym",
    },
    {
        skillName: "Outdoor Relaxation",
        fontAwesomeClassname: "twemoji:sun",
    },
    {
        skillName: "Doing my Nails",
        fontAwesomeClassname: "fluent-emoji:nail-polish-light",
    },
    {
        skillName: "Playing board games",
        fontAwesomeClassname: "noto-chess-pawn"
    },
    {
        skillName: "Archery",
        fontAwesomeClassname: "noto:bow-and-arrow",
    },
    {
        skillName: "Playing video games",
        fontAwesomeClassname: "noto:video-game"
    }
]

export {
    settings,
    seo,
    greeting,
    socialMediaLinks,
    skills,
    competitiveSites,
    projectsHeader,
    contactPageData,
    projectcards,
    certifications,
    resumeleft,
    resumeright,
    languages,
    idioms,
    softSkills,
    hobbies
};
