const settings = {
    isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
    title: "Márcia Matias | Portfolio",
    description:
        "A Data Science practitioner who thrives to leverage startups with AI based solutions with a blend of UI/UX",
    og: {
        title: "Márcia Portfolio",
        type: "website",
        url: "https://marciabm.github.io/",
    },
};

//Home Page
const greeting = {
    title: "Hello!",
    sub: "Márcia Matias",
    logo_name: "Márcia Matias",
    resumeLinkPT: "https://drive.google.com/file/d/1OWxaL91urPPg9OlFWunv3KJ05pL87r7M/view?usp=drive_link",
    resumeLinkENG: "https://drive.google.com/file/d/1k00iPZJzdoD2i1SPoMGSoEHqxSn9eCOr/view?usp=drive_link",
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
                "⚡ Project and team management.",
                "⚡ Helped guiding nine students through theirs master's thesis.",
                "⚡ Master's thesis reviewing.",
                "⚡ Making contact between the stakeholders and the project team.",
            ],
            softwareSkills: [
                {
                    skillName: "git",
                    fontAwesomeClassname: "logos-git-icon",
                },
                {
                    skillName: "Jira",
                    fontAwesomeClassname: "devicon:jira",
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
                "⚡ Modeling and implementing spatial and relational databases using PostgreSQL & PostGIS, or similar database systems (experience on systems with +60 tables).",
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
            title: "Data",
            fileName: "DataScienceImg",
            skills: [
                "⚡ Experience in data analysis and visualization, which was also my focus area during my master's degree.",
                "⚡ Experience with geospatial data, specially PostGIS and GeoTools.",
                "⚡ Having good hands-on with Tableau.",
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
        "In here are present the projects that I considered the most relevant during my master," +
        " two personal projects that I developed for fun" +
        " and the biggest project that I've ever made, LAND IT, also my master's thesis.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
    list: [
        {
            title: "LAND IT",
            img_path: "land_it.png",
            description:
                "LAND IT is a spatial decision support system to help its stakeholders planning and " +
                "managing the new design of the territory in some areas that are constantly " +
                "affected by wildfires, with the goal to turn the territory more resilient and economically viable." +
                " This project was started from scratch as my master's thesis. ",
            tags: [
                {
                    lang: "Java",
                    color: "#ea8c10",
                },
                {
                    lang: "JavaScript",
                    color: "#e0b610",
                },
                {
                    lang: "NextJS",
                    color: "#00a100",
                },
                {
                    lang: "Quarkus",
                    color: "#0cb9ee",
                },
                {
                    lang: "OpenLayers",
                    color: "#10da21",
                },
                {
                    lang: "PostgreSQL + PostGIS",
                    color: "#c30fd7",
                },
            ],
            link: "https://land-it.github.io",
            linkcolor: "black",
        },

        {
            title: "Sorting Memories",
            subTitle: "(Personal Project)",
            img_path: "art-gallery.jpg",
            description:
                "A desktop app that allows its users to organize photos by year and detect and delete duplicates.",
            tags: [
                {
                    lang: "JavaFX",
                    color: "#f5a206",
                },
                {
                    lang: "OpenCV",
                    color: "#ec0b59",
                },
            ],
            link: "",
            code: "https://github.com/MarciaBM/Sorting_Memories",
            linkcolor: "black",
        },
        {
            title: "ISplit",
            subTitle: "(Personal Project)",
            img_path: "split.png",
            description:
                "A mobile app that allows its users to create an activity and split the costs among the participants.",
            tags: [
                {
                    lang: "Flutter",
                    color: "#e38c18",
                },
                {
                    lang: "Dart",
                    color: "#0383c9",
                },
                {
                    lang: "Android Studio",
                    color: "#06c42c",
                },
            ],
            linkcolor: "black",
        },
        {
            title: "Analysis of Chicago's Security",
            subTitle: "(Visualization and Data Analytics Course)",
            img_path: "tableau.png",
            description:
                "The goal of this project was to analyze the security of Chicago," +
                " using several public datasets. The analysis was done using Tableau dashboards. Grade: 20 / 20 mark.",
            tags: [
                {
                    lang: "Tableau",
                    color: "#10b0ea",
                },
            ],
            link: "https://drive.google.com/file/d/1ytPRTztOA1yJ-8imzq9kJPdt-TRtpUWj/view?usp=drive_link",
            linkcolor: "black",
        },
        {
            title: "Performance Analysis of Geospatial Queries Using Pre-Aggregates",
            subTitle: "(Data Modelling Course)",
            img_path: "postgres.png",
            description:
                "Using my master's thesis theme, the goal of this project was to analyze the performance" +
                "of some geospatial queries based on datasets with the territory characteristics of Mação." +
                " Grade: 20 / 20 mark.",
            tags: [
                {
                    lang: "PostgreSQL + PostGIS",
                    color: "#10b0ea",
                },
            ],
            link: "https://drive.google.com/file/d/15HE3NUAUYoUWz-QFqz7qRAhFIrQ4A87D/view?usp=drive_link",
            linkcolor: "black",
        },
        {
            title: "Chat",
            img_path: "azure.png",
            subTitle: "(Cloud Computing Systems Course)",
            description:
                "The goal of this project was to develop a chat application back-end, Discord like," +
                " with the use of a cloud database and a cloud computing system, in this case, Azure. Grade: 19 / 20 mark.",
            tags: [
                {
                    lang: "Java",
                    color: "#e59909",
                },
                {
                    lang: "Redis",
                    color: "#ec0e37",
                },
                {
                    lang: "Cosmos DB",
                    color: "#12ec98",
                },
                {
                    lang: "Databricks",
                    color: "#a81a33",
                },
                {
                    lang: "Spark",
                    color: "#e1c511",
                },
            ],
            linkcolor: "black",
        },
    ],
};

const resumeleft = {
    left: [
        {
            title: ["Experience"],
            data: [
                {
                    title: "Full-Stack Lead Engineer",
                    subtitle: "Aflomação",
                    date: "April 2025 - present",
                    companies: ["aflomacao.png"],
                    content: [
                        "Continued the implementation of the LAND IT project.",
                        "Team and project management.",
                        "Assignment and planning of tasks in sprints.",
                    ],
                },
                {
                    title: "Lead Research Fellow | Full-Stack Developer",
                    subtitle: "NOVA School of Science and Technology & AZR",
                    date: "September 2024 - March 2025",
                    companies: ["fct.png", "azr.png"],
                    content: [
                        "Continued the implementation of the LAND IT project.",
                        "Reviewed and approved merge requests to ensure code quality and maintainability.",
                        "Helped guiding eight students through their master's thesis, related to the LAND IT project."
                    ],
                },
                {
                    title: "Research Fellow | Full-Stack Developer",
                    subtitle: "NOVA School of Science and Technology & AZR",
                    date: "June 2023 - August 2024",
                    companies: ["fct.png", "azr.png"],
                    content: [
                        "Full-Stack Developer for the LAND IT project, which was also my Master's thesis, created from scratch",
                        "The LAND IT project is a decision support system for land management, in specific for the AIGP (Integrated Landscape Management Areas)",
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
        }]
}

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
                    content: [
                        <span><b>Bachelor Degree</b><br/>
                            &emsp;• Final grade - 17 mark | A (scale: 0-20 | ECTS grading system)<br/>
                            &emsp;• <a target="_blank"
                                       href={"https://drive.google.com/file/d/1s-azyCqSU8Uy9qh5XuCNGHviL2LSJFSt/view?usp=drive_link"}> Certificate</a><br/>
                            &emsp;• Research Project: <a target="_blank"
                                                         href={"https://drive.google.com/file/d/1FTNs24QeeYogWHhZp9s_ggy4zCTTc9wB/view?usp=drive_link"}>Java Collections with Data-Centric Concurrency</a><br/>
                            &emsp;• Project Grade: 19 mark | A (scale: 0-20 | ECTS grading system)<br/>
                        </span>,
                        <span><b>Master's Degree</b><br/>
                            &emsp;• Final grade - 18 mark | A (scale: 0-20 | ECTS grading system)<br/>
                            &emsp;• <a target="_blank"
                                       href={"https://drive.google.com/file/d/1e9pHEilMFKkeXvAX2DtUkWXIaV-OufTH/view?usp=drive_link"}> Certificate</a><br/>
                            &emsp;• Thesis: <a target="_blank"
                                               href={"https://run.unl.pt/handle/10362/163563"}> Decision Support System for the Integrated Areas of the Territory </a> <br/>
                            &emsp;• Thesis Grade: 19 mark | A (scale: 0-20 | ECTS grading system)<br/>
                            &emsp;• Main Courses:<br/>
                            &emsp;&emsp;- Visualization and Data Analytics <br/>
                            &emsp;&emsp;- Data Modelling<br/>
                            &emsp;&emsp;- Databases Systems<br/>
                            &emsp;&emsp;- Concurrency and Parallelism<br/>
                            &emsp;&emsp;- Cloud Computing Systems<br/>
                            &emsp;&emsp;- Information Retrieval<br/>
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
        },
        {
            title: ["Publications"],
            data: [
                {
                    title: "LAND IT: A Decision Support System for Optimising Land Use Planning Strategies",
                    subtitle: "AGILE-GISS 2025",
                    companies: [],
                    content: [<span>Publication of a <a target="_blank"
                                                        href={"https://agile-giss.copernicus.org/articles/6/39/2025"}>short paper</a> in the 2025 AGILE Conference</span>,]
                }
            ]
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
            "I am available on almost every social media." +
            " You can message me, I will reply as soon as I can.",
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
    // {
    //     name: "Email",
    //     link: "mailto:marciab.matias@hotmail.com",
    //     fontAwesomeIcon: "vscode-icons:file-type-outlook", // Reference https://fontawesome.com/icons/google?style=brands
    //     backgroundColor: "#126ce5", // Reference https://simpleicons.org/?q=gmail
    // },
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
