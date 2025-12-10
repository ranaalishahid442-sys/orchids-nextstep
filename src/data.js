window.careerData = {
    medical: {
        title: "Medical",
        careers: [
            { name: "MBBS (Bachelor of Medicine, Bachelor of Surgery)", description: "Become a doctor, diagnose and treat illnesses." },
            { name: "BDS (Bachelor of Dental Surgery)", description: "Specialize in dental health and surgery." },
            { name: "DPT (Doctor of Physical Therapy)", description: "Help patients recover movement and manage pain." },
            { name: "Pharm-D (Doctor of Pharmacy)", description: "Expert in medicines, their usage, and effects." },
            { name: "Medical Lab Technology", description: "Perform diagnostic tests in laboratories." },
            { name: "Nursing", description: "Provide care and support to patients in hospitals." }
        ],
        universities: [
            {
                id: "uhs",
                name: "University of Health Sciences (UHS), Lahore",
                criteria: "FSc (Pre-Medical) with min 60%, MDCAT passed.",
                formula: { matric: 10, fsc: 40, test: 50 },
                testName: "MDCAT"
            },
            {
                id: "kemU",
                name: "King Edward Medical University (KEMU), Lahore",
                criteria: "High merit in MDCAT and FSc.",
                formula: { matric: 10, fsc: 40, test: 50 },
                testName: "MDCAT"
            },
            {
                id: "aku",
                name: "Aga Khan University (AKU), Karachi",
                criteria: "AKU Entry Test + Interview.",
                formula: { matric: 0, fsc: 0, test: 100 }, // Simplified for calculator, AKU has complex internal scoring
                testName: "AKU Entry Test"
            },
            {
                id: "dow",
                name: "Dow University of Health Sciences, Karachi",
                criteria: "Sindh Domicile, MDCAT.",
                formula: { matric: 10, fsc: 40, test: 50 },
                testName: "MDCAT"
            },
            {
                id: "rmu",
                name: "Rawalpindi Medical University, Rawalpindi",
                criteria: "Punjab Domicile, MDCAT.",
                formula: { matric: 10, fsc: 40, test: 50 },
                testName: "MDCAT"
            }
        ]
    },
    computer: {
        title: "Computer Science",
        careers: [
            { name: "Software Engineer", description: "Design and build software applications." },
            { name: "Data Scientist", description: "Analyze complex data to help make decisions." },
            { name: "AI/ML Engineer", description: "Build intelligent systems and algorithms." },
            { name: "Cyber Security Analyst", description: "Protect systems and networks from cyber attacks." },
            { name: "Web Developer", description: "Create websites and web applications." },
            { name: "Game Developer", description: "Design and create video games." }
        ],
        universities: [
            {
                id: "nust-cs",
                name: "NUST, Islamabad",
                criteria: "FSc (Pre-Eng/ICS) min 60%, NET passed.",
                formula: { matric: 10, fsc: 15, test: 75 },
                testName: "NET"
            },
            {
                id: "fast",
                name: "FAST-NUCES (All Campuses)",
                criteria: "FSc min 60%, NU Test or SAT.",
                formula: { matric: 0, fsc: 50, test: 50 }, // Approx formula
                testName: "NU Test"
            },
            {
                id: "pucit",
                name: "PUCIT (Punjab University), Lahore",
                criteria: "FSc min 60%, PU Entry Test.",
                formula: { matric: 25, fsc: 75, test: 0 }, // PU often uses academic record heavily, formula varies
                testName: "Entry Test (Qualifying)"
            },
            {
                id: "giki-cs",
                name: "GIKI, Topi",
                criteria: "FSc min 60%, GIKI Entry Test.",
                formula: { matric: 0, fsc: 15, test: 85 },
                testName: "GIKI Test"
            },
            {
                id: "comsats",
                name: "COMSATS, Islamabad",
                criteria: "FSc min 50%, NTS-NAT.",
                formula: { matric: 10, fsc: 40, test: 50 },
                testName: "NTS NAT"
            }
        ]
    },
    engineering: {
        title: "Engineering",
        careers: [
            { name: "Civil Engineer", description: "Design and supervise construction projects." },
            { name: "Mechanical Engineer", description: "Design and manufacture mechanical systems." },
            { name: "Electrical Engineer", description: "Work with electrical systems and electronics." },
            { name: "Chemical Engineer", description: "Process raw materials into useful products." },
            { name: "Aerospace Engineer", description: "Design aircraft and spacecraft." },
            { name: "Mechatronics Engineer", description: "Combine mechanics, electronics, and computing." }
        ],
        universities: [
            {
                id: "nust-eng",
                name: "NUST, Islamabad",
                criteria: "FSc (Pre-Eng) min 60%, NET passed.",
                formula: { matric: 10, fsc: 15, test: 75 },
                testName: "NET"
            },
            {
                id: "uet",
                name: "UET, Lahore",
                criteria: "FSc min 60%, ECAT.",
                formula: { matric: 0, fsc: 70, test: 30 }, // 70-30 rule often used
                testName: "ECAT"
            },
            {
                id: "giki-eng",
                name: "GIKI, Topi",
                criteria: "FSc min 60%, GIKI Entry Test.",
                formula: { matric: 0, fsc: 15, test: 85 },
                testName: "GIKI Test"
            },
            {
                id: "pieas",
                name: "PIEAS, Islamabad",
                criteria: "FSc min 60%, PIEAS Test.",
                formula: { matric: 15, fsc: 25, test: 60 },
                testName: "PIEAS Test"
            },
            {
                id: "ned",
                name: "NED University, Karachi",
                criteria: "Sindh Domicile, Entry Test.",
                formula: { matric: 0, fsc: 50, test: 50 },
                testName: "NED Test"
            }
        ]
    },
    freelancing: {
        title: "Freelancing Skills",
        skills: [
            {
                id: "web-dev",
                name: "Web Development",
                description: "Build websites and web applications.",
                image: "assets/web.jpg", // Placeholder
                roadmap: [
                    "Learn HTML, CSS, and JavaScript",
                    "Master a frontend framework (React, Vue, or Angular)",
                    "Learn backend basics (Node.js, Python, or PHP)",
                    "Understand databases (SQL vs NoSQL)",
                    "Build a portfolio of projects",
                    "Start freelancing on Upwork or Fiverr"
                ],
                courses: [
                    { title: "freeCodeCamp - Web Design", link: "https://www.freecodecamp.org/learn/2022/responsive-web-design/" },
                    { title: "The Odin Project", link: "https://www.theodinproject.com/" },
                    { title: "MDN Web Docs", link: "https://developer.mozilla.org/" }
                ],
                jobSearch: ["Upwork", "Fiverr", "LinkedIn", "Toptal", "RemoteOK"]
            },
            {
                id: "graphic-design",
                name: "Graphic Design",
                description: "Create visual content to communicate messages.",
                image: "assets/design.jpg", // Placeholder
                roadmap: [
                    "Learn design principles (Color, Typography, Layout)",
                    "Master tools like Adobe Photoshop, Illustrator, Figma",
                    "Create a portfolio on Behance or Dribbble",
                    "Learn about branding and logo design",
                    "Start with small gigs on freelance platforms"
                ],
                courses: [
                    { title: "Canva Design School", link: "https://www.canva.com/designschool/" },
                    { title: "Envato Tuts+", link: "https://design.tutsplus.com/" },
                    { title: "Adobe Creative Cloud Tutorials", link: "https://helpx.adobe.com/creative-cloud/tutorials-explore.html" }
                ],
                jobSearch: ["Behance", "Dribbble", "99designs", "Upwork", "Fiverr"]
            },
            {
                id: "content-writing",
                name: "Content Writing",
                description: "Write engaging content for websites and blogs.",
                image: "assets/writting.png", // Placeholder
                roadmap: [
                    "Improve grammar and vocabulary",
                    "Learn SEO basics",
                    "Practice writing different types of content (blogs, copy, technical)",
                    "Build a portfolio on Medium or LinkedIn",
                    "Pitch to clients and job boards"
                ],
                courses: [
                    { title: "HubSpot Content Marketing", link: "https://academy.hubspot.com/courses/content-marketing" },
                    { title: "Google Digital Garage", link: "https://learndigital.withgoogle.com/digitalgarage" },
                    { title: "Copyblogger", link: "https://copyblogger.com/" }
                ],
                jobSearch: ["Medium", "LinkedIn", "ProBlogger", "Upwork", "Fiverr"]
            },
            {
                id: "digital-marketing",
                name: "Digital Marketing",
                description: "Promote products and services online.",
                image: "assets/digital.jpg", // Placeholder
                roadmap: [
                    "Learn basics of SEO, SEM, and Social Media Marketing",
                    "Understand Google Analytics and Ads",
                    "Learn Content Marketing strategies",
                    "Get certified (Google, HubSpot)",
                    "Practice on personal projects or small businesses"
                ],
                courses: [
                    { title: "Google Digital Garage", link: "https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing" },
                    { title: "HubSpot Academy", link: "https://academy.hubspot.com/" },
                    { title: "Meta Blueprint", link: "https://www.facebook.com/business/learn" }
                ],
                jobSearch: ["LinkedIn", "Upwork", "Fiverr", "Indeed", "Glassdoor"]
            },
            {
                id: "video-editing",
                name: "Video Editing",
                description: "Edit and produce video content.",
                image: "assets/video.webp", // Placeholder
                roadmap: [
                    "Learn video editing software (Premiere Pro, DaVinci Resolve)",
                    "Understand storytelling and pacing",
                    "Learn color grading and sound design",
                    "Build a showreel",
                    "Offer services to YouTubers or businesses"
                ],
                courses: [
                    { title: "DaVinci Resolve Training", link: "https://www.blackmagicdesign.com/products/davinciresolve/training" },
                    { title: "Premiere Gal (YouTube)", link: "https://www.youtube.com/c/PremiereGal" },
                    { title: "Vimeo Video School", link: "https://vimeo.com/blog/category/video-school/" }
                ],
                jobSearch: ["Upwork", "Fiverr", "YTJobs", "LinkedIn", "Behance"]
            },
            {
                id: "app-dev",
                name: "App Development",
                description: "Create mobile applications for iOS and Android.",
                image: "assets/app.avif", // Placeholder
                roadmap: [
                    "Choose a platform (iOS/Swift or Android/Kotlin) or Cross-platform (Flutter/React Native)",
                    "Learn the programming language",
                    "Understand UI/UX for mobile",
                    "Build and publish your first app",
                    "Freelance or find a job"
                ],
                courses: [
                    { title: "Android Developers", link: "https://developer.android.com/courses" },
                    { title: "Swift Playgrounds", link: "https://www.apple.com/swift/playgrounds/" },
                    { title: "Flutter Build", link: "https://flutter.dev/learn" }
                ],
                jobSearch: ["Upwork", "Toptal", "LinkedIn", "Fiverr", "Freelancer"]
            },
            {
                id: "seo",
                name: "SEO Specialist",
                description: "Optimize websites to rank higher in search results.",
                image: "assets/seo.jpg", // Placeholder
                roadmap: [
                    "Understand how search engines work",
                    "Learn On-page and Off-page SEO",
                    "Master keyword research tools",
                    "Learn technical SEO",
                    "Audit websites and implement improvements"
                ],
                courses: [
                    { title: "Moz Beginner's Guide to SEO", link: "https://moz.com/beginners-guide-to-seo" },
                    { title: "Google Search Central", link: "https://developers.google.com/search/docs" },
                    { title: "Ahrefs Academy", link: "https://ahrefs.com/academy" }
                ],
                jobSearch: ["Upwork", "Fiverr", "LinkedIn", "PeoplePerHour", "Indeed"]
            },
            {
                id: "ui-ux",
                name: "UI/UX Design",
                description: "Design user-friendly interfaces and experiences.",
                image: "assets/uiux.avif", // Placeholder
                roadmap: [
                    "Learn design thinking and user research",
                    "Master wireframing and prototyping tools (Figma, Adobe XD)",
                    "Understand usability principles",
                    "Build a design portfolio",
                    "Collaborate with developers"
                ],
                courses: [
                    { title: "Google UX Design Certificate (Coursera Audit)", link: "https://www.coursera.org/professional-certificates/google-ux-design" },
                    { title: "Figma Learn", link: "https://help.figma.com/hc/en-us/categories/360002050113-Tutorials" },
                    { title: "Laws of UX", link: "https://lawsofux.com/" }
                ],
                jobSearch: ["Behance", "Dribbble", "LinkedIn", "Upwork", "Toptal"]
            },
            {
                id: "data-entry",
                name: "Data Entry",
                description: "Input and manage data accurately.",
                image: "assets/data.avif", // Placeholder
                roadmap: [
                    "Improve typing speed and accuracy",
                    "Learn Excel and Google Sheets proficiently",
                    "Learn basic data management tools",
                    "Create profiles on freelance sites",
                    "Build a reputation for reliability"
                ],
                courses: [
                    { title: "GCFGlobal Excel", link: "https://edu.gcfglobal.org/en/excel/" },
                    { title: "Typing.com", link: "https://www.typing.com/" },
                    { title: "Google Sheets Training", link: "https://support.google.com/a/users/answer/9282959" }
                ],
                jobSearch: ["Upwork", "Fiverr", "Freelancer", "Clickworker", "Guru"]
            },
            {
                id: "virtual-assistant",
                name: "Virtual Assistant",
                description: "Provide administrative support remotely.",
                image: "assets/virtual.jpg", // Placeholder
                roadmap: [
                    "Identify your skills (admin, social media, email management)",
                    "Learn tools like Trello, Asana, Slack, Zoom",
                    "Create service packages",
                    "Network and find clients",
                    "Manage multiple clients effectively"
                ],
                courses: [
                    { title: "VA Networking", link: "https://www.vanetworking.com/" },
                    { title: "HubSpot Email Marketing", link: "https://academy.hubspot.com/courses/email-marketing" },
                    { title: "Zapier University", link: "https://zapier.com/university" }
                ],
                jobSearch: ["Upwork", "Fiverr", "LinkedIn", "Belay", "Time Etc"]
            }
        ]
    }
};

// Update University Images
// Medical
window.careerData.medical.universities[0].image = "assets/uhs.jpg"; // UHS (using KEMU as placeholder/representative)
window.careerData.medical.universities[1].image = "assets/kemu.png"; // KEMU
window.careerData.medical.universities[2].image = "assets/aku.png"; // AKU
window.careerData.medical.universities[3].image = "assets/dow.webp"; // Dow
window.careerData.medical.universities[4].image = "assets/rmu.jpg"; // RMU

// Computer Science
window.careerData.computer.universities[0].image = "assets/nust.png"; // NUST
window.careerData.computer.universities[1].image = "assets/fast.jpeg"; // FAST
window.careerData.computer.universities[2].image = "assets/puc.jpg"; // PUCIT
window.careerData.computer.universities[3].image = "assets/giki.jpg"; // GIKI
window.careerData.computer.universities[4].image = "assets/comsat.jpg"; // COMSATS

// Engineering
window.careerData.engineering.universities[0].image = "assets/nust.png"; // NUST
window.careerData.engineering.universities[1].image = "assets/uet.jpg"; // UET
window.careerData.engineering.universities[2].image = "assets/giki.jpg"; // GIKI
window.careerData.engineering.universities[3].image = "assets/pieas.jpeg"; // PIEAS
window.careerData.engineering.universities[4].image = "assets/ned.jpg"; // NED
