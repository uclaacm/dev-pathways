const resources = [
    {
        category: "HTML/CSS",
        links: [
            {
                name: "Hack| Hackschool Session 1a: Intro to HTML/CSS",
                url: "https://github.com/uclaacm/hackschool-f20/blob/main/session-1-intro-to-html-css/README.md",
            },
            {
                name: "Hack| Hackschool Session 1b: Intro to HTML/CSS",
                url: "https://www.youtube.com/watch?v=sttIgSTnSg0",
            },
            {
                name: "Dev| Mozilla CSS Basics",
                url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics",
            },
            {
                name: "TeachLA| Learning Lab 1a: Intro to HTML/CSS",
                url: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/01-intro-html-css",
            },
            {
                name: "TeachLA| Learning Lab 1b: Intro to HTML/CSS",
                url: "https://www.youtube.com/watch?v=TlfR0JU5gSg&list=PLPO7_kXilXFa6YdXxn5oln1gagcqnFI4l&index=2&t=0s",
            },
            {
                name: "TeachLA| Interneting is Hard: HTML/CSS",
                url: "https://www.internetingishard.com/html-and-css/",
            },
            {
                name: "TeachLA| MarkSheet: a free HTML/CSS tutorial",
                url: "https://marksheet.io/",
            },
            {
                name: "TeachLA| A Complete Guide to CSS Concepts and Fundamentals",
                url: "https://www.taniarascia.com/overview-of-css-concepts/",
            },
        ],
    },
    {
        category: "Javascript",
        links: [
            {
                name: "Hack| Hackschool Session 2a: Intro to JavaScript",
                url: "https://github.com/uclaacm/hackschool-f20/blob/main/session-2-intro-to-js/README.md",
            },
            {
                name: "Hack| Hackschool Session 2b: Intro to JavaScript",
                url: "https://www.youtube.com/watch?v=Dk9kob-9Wkw&ab_channel=JuliaWuJuliaWuOfficialArtistChannel",
            },
            {
                name: "Hack| JavaScript Chats: Curriculum",
                url: "https://hack.uclaacm.com/posts/fall2019/js-chats-summary/",
            },
            {
                name: "Hack| Functions and this",
                url: "https://hack.uclaacm.com/posts/fall2019/js-chat-1/",
            },
            {
                name: "Hack| Asynchronous JavaScript",
                url: "https://hack.uclaacm.com/posts/fall2019/js-chats-2/",
            },
            {
                name: "Hack| Multi-threading",
                url: "https://hack.uclaacm.com/posts/fall2019/js-chats-5/",
            },
            {
                name: "Hack| Testing",
                url: "https://hack.uclaacm.com/posts/fall2019/js-chats-6/",
            },
            {
                name: "Board| Mozilla Javascript Basics",
                url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics",
            },
            {
                name: "TeachLA| Learning Lab 3a: Intro to JS",
                url: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/03-intro-js",
            },
            {
                name: "TeachLA| Learning Lab 3b: Intro to JS",
                url: "https://www.youtube.com/watch?v=wTMeQSq2PJg",
            },
            {
                name: "TeachLA| Learning Lab 17a: Testing in JS with Jest",
                url: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/17-intro-testing-js",
            },
            {
                name: "TeachLA| Learning Lab 17b: Testing in JS with Jest",
                url: "https://www.youtube.com/watch?v=aPJm91_cDw4",
            },
            {
                name: "TeachLA| Eloquent JS",
                url: "https://eloquentjavascript.net/",
            },
            {
                name: "TeachLA| You Don't Know JS",
                url: "https://github.com/getify/You-Dont-Know-JS",
            },
            {
                name: "TeachLA| Dependency Injection",
                url: "https://medium.com/@daniel.oliver.king/dependency-injection-practical-examples-for-testing-and-refactoring-in-javascript-3cb5b58b50be",
            },
        ],
    },
    {
        category: "DOM API",
        links: [
            {
                name: "Hack| Hackschool 3a: DOM API",
                url: "https://github.com/uclaacm/hackschool-f20/tree/main/session-3-dom-api",
            },
            {
                name: "Hack| Hackschool 3b: DOM API",
                url: "https://www.youtube.com/watch?v=Au3F9R0qr7M&t=5s",
            },
            {
                name: "Board| Mozilla Introduction to the DOM",
                url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction",
            },
        ],
    },
    {
        category: "CSS",
        links: [
            {
                name: "Hack| Hackschool 4a: Advanced CSS",
                url: "https://github.com/uclaacm/hackschool-f20/tree/main/session-4-advanced-css",
            },
            {
                name: "Hack| Hackschool 4b: Advanced CSS",
                url: "https://www.youtube.com/watch?v=vZj9uawoGMg",
            },
            {
                name: "Board| Advanced CSS: 5 New Methods",
                url: "https://pagely.com/blog/advanced-css-5-methods/",
            },
            {
                name: "TeachLA| Learning Lab 2a: Box Model & Positioning",
                url: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/02-intermediate-css",
            },
            {
                name: "TeachLA| Learning Lab 2b: Box Model & Positioning",
                url: "https://www.youtube.com/watch?v=ar1Ni6SNaEE&list=PLPO7_kXilXFa6YdXxn5oln1gagcqnFI4l&index=2",
            },
            {
                name: "TeachLA| Learning Lab 4a: Flexbox & Grid",
                url: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/04-flexbox-grid",
            },
            {
                name: "TeachLA| Learning Lab 4a: Flexbox & Grid",
                url: "https://www.youtube.com/watch?v=CBR0R50-jGg",
            },
            {
                name: "TeachLA| Learning Lab 6a: Animations",
                url: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/06-css-animations",
            },
            {
                name: "TeachLA| Learning Lab 6b: Animations",
                url: "https://youtu.be/eqogXB3tLes",
            },
            {
                name: "TeachLA| Interneting is Hard: Adv CSS",
                url: "https://www.internetingishard.com/html-and-css/",
            },
            {
                name: "TeachLA| Marksheet: Adv CSS",
                url: "https://marksheet.io/",
            },
            {
                name: "TeachLA| Flexbox Froggy",
                url: "https://flexboxfroggy.com/",
            },
            {
                name: "TeachLA| Grid Garden",
                url: "https://codepip.com/games/grid-garden/",
            },
            {
                name: "TeachLA| Learn CSS Grid",
                url: "https://learncssgrid.com/",
            },
            {
                name: "TeachLA| A Complete Guide to CSS",
                url: "https://www.taniarascia.com/overview-of-css-concepts/",
            },
        ],
    },
    {
        category: "SASS",
        links: [
            {
                name: "TeachLA| Learning Lab 10a: Intro to SASS",
                url: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/10-sass",
            },
            {
                name: "TeachLA| Learning Lab 10b: Intro to SASS",
                url: "https://www.youtube.com/watch?v=hJqrfq3r950",
            },
        ],
    },
    {
        category: "Async JS and Web APIs",
        links: [
            {
                name: "Hack| Hackschool 5a: Async JS and Web APIs",
                url: "https://github.com/uclaacm/hackschool-f20/tree/main/session-5-async-and-web-APIs",
            },
            {
                name: "Hack| Hackschool 5b: Async JS and Web APIs",
                url: "https://www.youtube.com/watch?v=KUr5qG_ZGuY&t=2s",
            },
            {
                name: "Hack| JavaScript Chats: Deeper Dive",
                url: "https://hack.uclaacm.com/posts/fall2019/js-chats-2/",
            },
            {
                name: "Board| Async JS: Using Promises with REST APIs",
                url: "https://www.twilio.com/blog/asynchronous-javascript-using-promises-rest-apis-nodejs",
            },
            {
                name: "TeachLA| Learning Lab 15a: Async in JS",
                url: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/15-async-js",
            },
            {
                name: "TeachLA| Learning Lab 15b: Async in JS",
                url: "https://www.youtube.com/watch?v=T9mslksU_Vg",
            },
            {
                name: "TeachLA| MDN: Concurrency Model and Event Loop",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop",
            },
            {
                name: "TeachLA| How to Connect to an API with JS",
                url: "https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/",
            },
        ],
    },
    {
        category: "Responsive Design and Accessibility",
        links: [
            {
                name: "Hack| Hackschool 6a: Design and Accessibility",
                url: "https://github.com/uclaacm/hackschool-f20/tree/main/session-6-responsive-design-and-accessibility",
            },
            {
                name: "Hack| Hackschool 6b: Design and Acccessibility",
                url: "https://www.youtube.com/watch?v=jy_OtcErlRY",
            },
            {
                name: "Board| W3C: Designing for Web Accessibility",
                url: "https://www.w3.org/WAI/tips/designing/",
            },
            {
                name: "TeachLA| Learning Lab 13a: Accessibility on the Web",
                url: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/13-accessibility",
            },
            {
                name: "TeachLA| Learning Lab 13b: Accessibility on the Web",
                url: "https://youtu.be/C4owSuA5S1Y",
            },
            {
                name: "TeachLA| Web Fundamentals: Accessibility",
                url: "https://developers.google.com/web/fundamentals/accessibility",
            },
            {
                name: "TeachLA| Digital.gov: Introduction to Accessibility",
                url: "https://digital.gov/resources/introduction-accessibility/",
            },
            {
                name: "TeachLA| Introduction to Web Accessibility",
                url: "https://webaim.org/intro/",
            },
            {
                name: "TeachLA| How I Audit a Website for Accessibility",
                url: "https://marcysutton.com/how-i-audit-a-website-for-accessibility",
            },
        ],
    },
    {
        category: "Backend - Databases",
        links: [
            {
                name: "Hack| Hackschool: Databases",
                url: "https://github.com/uclaacm/hackschool-f19/tree/master/session-6-backend-database",
            },
        ],
    },
    {
        category: "Full Stack",
        links: [
            {
                name: "Hack| Hackschool: Full Stack",
                url: "https://github.com/uclaacm/hackschool-f19/tree/master/session-7-fullstack-bringing-it-together",
            },
            {
                name: "Board| How to Get Started with MERN",
                url: "https://www.digitalocean.com/community/tutorials/getting-started-with-the-mern-stack",
            },
        ],
    },
    {
        category: "React",
        links: [
            {
                name: "Sample React Curriculum",
                url: "https://www.codecademy.com/learn/react-101",
            },
            {
                name: "Build Your First App with Mobx and React",
                url: "https://dev.to/rosyshrestha/build-your-first-app-with-mobx-and-react-4896",
            },
            {
                name: "The MERN Stack Tutorial",
                url: "https://codingthesmartway.com/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-1/",
            },
            {
                name: "How to Get Started with the MERN Stack",
                url: "https://www.digitalocean.com/community/tutorials/getting-started-with-the-mern-stack",
            },
            {
                name: "Hack| Hackschool 7a: Intro to React",
                url: "https://github.com/uclaacm/hackschool-f20/tree/main/session-7-intro-react",
            },
            {
                name: "Hack| Hackschool 7b: Intro to React",
                url: "https://www.youtube.com/watch?v=1X84EQR92F4&ab_channel=ACMatUCLA",
            },
            {
                name: "Hack| Hackschool 2019: Intro to React",
                url: "https://github.com/uclaacm/hackschool-f19/tree/master/session-5-frontend-intro-to-react",
            },
            {
                name: "Hack| Hackschool 2019: More on React",
                url: "https://github.com/uclaacm/hackschool-f19/tree/master/session-6-frontend-more-on-react",
            },
            {
                name: "Hack| React Hooks",
                url: "https://hack.uclaacm.com/posts/fall2019/js-chats-3/",
            },
            {
                name: "Hack| Optimizing Frontend and React Apps",
                url: "https://hack.uclaacm.com/posts/fall2019/js-chats-4/",
            },
            {
                name: "Hack| Web Dev Simplified: React Hooks",
                url: "https://www.youtube.com/watch?v=O6P86uwfdR0&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&ab_channel=ACMatUCLAACMatUCLA",
            },
            {
                name: "Board| Official Documentation",
                url: "https://reactjs.org/tutorial/tutorial.html",
            },
            {
                name: "TeachLA| Learning Lab 7a: Intro to React",
                url: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/07-intro-react",
            },
            {
                name: "TeachLA| Learning Lab 7b: Intro to React",
                url: "https://www.youtube.com/watch?v=3UKF9qMBIzA",
            },
            {
                name: "TeachLA| Learning Lab 9a: Intermediate React",
                url: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/09-intermediate-react-1",
            },
            {
                name: "TeachLA| Learning Lab 9b: Intermediate React",
                url: "https://youtu.be/SJOWiYyRjkE",
            },
            {
                name: "TeachLA| Learning Lab 11a: React Hooks",
                url: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/11-react-hooks",
            },
            {
                name: "TeachLA| Learning Lab 11b: React Hooks",
                url: "https://www.youtube.com/watch?v=-cKLNanIPYA",
            },
            {
                name: "TeachLA| Learning Lab 7a: Intro to Firebase",
                url: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/18-firebase",
            },
            {
                name: "TeachLA| Learning Lab 7b: Intro to Firebase",
                url: "https://www.youtube.com/watch?v=K5OQD7DdDoo",
            },
            {
                name: "TeachLA| React Tutorial",
                url: "https://www.taniarascia.com/getting-started-with-react/",
            },
            {
                name: "TeachLA| Redux Tutorial",
                url: "https://www.taniarascia.com/redux-react-guide/",
            },
            {
                name: "TeachLA| Intro to Web Dev with React and Firebase",
                url: "https://github.com/malsf21/qwerhacks-web-dev-workshop",
            },
            {
                name: "W| create-react-app Tutorial",
                url: "https://reactjs.org/docs/create-a-new-react-app.html",
            },
            {
                name: "W| Getting Started with React",
                url: "https://reactjs.org/docs/getting-started.html",
            },
            {
                name: "W| Thinking in React",
                url: "https://reactjs.org/docs/thinking-in-react.html",
            },
            {
                name: "W| ACM Repo with React",
                url: "https://github.com/uclaacm/acm-w-website",
            },
            {
                name: "A Firebase in React Tutorial",
                url: "https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial",
            },
        ],
    },
    {
        category: "GraphQL",
        links: [
            {
                name: "W| Apollo GraphQL",
                url: "https://www.apollographql.com/docs/",
            },
            {
                name: "Board| Official Documentation",
                url: "https://graphql.org/learn/",
            },
        ],
    },
    {
        category: "Static Site Generators",
        links: [
            {
                name: "Let's Learn Eleventy!",
                url: "https://www.netlify.com/blog/2020/04/09/lets-learn-eleventy-boost-your-jamstack-skills-with-11ty/",
            },
            {
                name: "ACM Design Guideline",
                url: "http://www.github.com/uclaacm/design-guideline",
            },
        ],
    },
    {
        category: "Graphic Design",
        links: [
            {
                name: "Design| Training Menu: Graphic Design",
                url: "https://docs.google.com/document/d/1UhSDU4qNX1D9WPTY9qi46iJyVwvKnOjSTQ0wBfLcNJk/edit?usp=sharing",
            },
        ],
    },
    {
        category: "UX/UI",
        links: [
            {
                name: "Design| Training Menu: UX/UI",
                url: "https://docs.google.com/document/d/1UhSDU4qNX1D9WPTY9qi46iJyVwvKnOjSTQ0wBfLcNJk/edit?usp=sharing",
            },
            {
                name: "Hack/Bloom| Creative Labs",
                url: "https://www.youtube.com/channel/UC917WXknuSu1IMn34PdJr3Q",
            },
        ],
    },
    {
        category: "Vanilla JS",
        links: [
            {
                name: "JavaScript 30",
                url: "https://javascript30.com/",
            },
        ],
    },
    {
        category: "Express",
        links: [
            {
                name: "Hack| Hackschool: Express",
                url: "https://github.com/uclaacm/hackschool-f19/tree/master/session-4-backend-express",
            },
            {
                name: "Express Tutorial: The Local Library Website",
                url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website",
            },
            {
                name: "TeachLA| Learning Lab 16a: Intro to Backend w/Node & Express",
                url: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/16-intro-backend",
            },
            {
                name: "TeachLA| Learning Lab 16b: Intro to Backend w/Node & Express",
                url: "https://www.youtube.com/watch?v=kwy4U0980Eg",
            },
        ],
    },
    {
        category: "Flask",
        links: [
            {
                name: "The Flask Mega-Tutorial Part I",
                url: "https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world",
            },
            {
                name: "Flask Documentation Tutorial",
                url: "https://flask.palletsprojects.com/en/1.1.x/tutorial/",
            },
        ],
    },
    {
        category: "Meteor",
        links: [
            {
                name: "Meteor React Tutorial: Home",
                url: "https://www.meteor.com/tutorials/react/creating-an-app",
            },
        ],
    },
    {
        category: "DevOps",
        links: [
            {
                name: "TeachLA| Learning Lab 14: Misc DevOps",
                url: "https://youtu.be/HH2c3YZZasg",
            },
        ],
    },
    {
        category: "Go",
        links: [
            {
                name: "TeachLA| Learn Go with Test-Driven Development",
                url: "https://github.com/quii/learn-go-with-tests",
            },
        ],
    },
    {
        category: "PM",
        links: [
            {
                name: "PM Interview Prep",
                url: "https://github.com/keianasnell/pm-interview-prep",
            },
            {
                name: "Everything You Were Going to Ask Me About APM",
                url: "https://medium.com/@emchenran/everything-you-were-going-to-ask-me-about-apm-92b9b5e82fe6",
            },
            {
                name: "Advice when Recruiting for Salesforce APM",
                url: "https://docs.google.com/document/d/1dNrdwlZpP8lbAWHok02XrF4b8u4Osci5UNTGpk7SY6M/edit",
            },
            {
                name: "Preparing APM: Entry Level PM Interviews",
                url: "https://www.linkedin.com/pulse/preparing-apmentry-level-pm-case-interviews-ryan-ham/",
            },
            {
                name: "5 Must-Know PM Resources",
                url: "https://medium.com/swlh/5-must-know-resources-for-product-management-in-2020-e5f005d46986",
            },
            {
                name: "Hack| Passion Talks: What is a PM?",
                url: "https://www.youtube.com/watch?v=lcvhWjPMZR8",
            },
            {
                name: "Evolution of a Product",
                url: "https://www.sequoiacap.com/article/evolution-of-a-product",
            },
            {
                name: "Measuring Product Health",
                url: "https://www.sequoiacap.com/article/measuring-product-health",
            },
            {
                name: "Retention",
                url: "https://www.sequoiacap.com/article/retention",
            },
            {
                name: "SaaS Growth Metrics",
                url: "https://www.appcues.com/blog/saas-growth-metrics",
            },
        ],
    },
]

export default resources;
