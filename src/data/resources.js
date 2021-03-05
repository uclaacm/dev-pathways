//NOTE:
//  - resource names should be both descriptive and concise (< 40 characters)
//  - in general (with some exceptions), external resources should be ranked below resources coming from ACM
//  - each resource can contain several links (video, article, game, or doc) that indicate the resource type(s)
//  - only first 5 resources are shown in resources drop down (so most important are at top)
//  - these items will be selectable in resultsItem: video, article, interactive, doc (add new sources in ResultsBody)

const resources = [
    {
        category: "HTML/CSS",
        links: [
            { 
                name: "Hackschool | Intro to HTML/CSS",
                video: "https://www.youtube.com/watch?v=sttIgSTnSg0",
                article: "https://github.com/uclaacm/hackschool-f20/blob/main/session-1-intro-to-html-css/README.md",
                source: "Hack",
                difficulty: "Beginner",
            },
            {
                name: "Hackschool | Advanced CSS",
                video: "https://www.youtube.com/watch?v=vZj9uawoGMg",
                article: "https://github.com/uclaacm/hackschool-f20/tree/main/session-4-advanced-css",
                source: "Hack",
                difficulty: "Beginner",
            },
            {
                name: "Learning Labs | Intro to HTML/CSS",
                video: "https://www.youtube.com/watch?v=TlfR0JU5gSg&list=PLPO7_kXilXFa6YdXxn5oln1gagcqnFI4l&index=2&t=0s",
                article: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/01-intro-html-css",
                source: "Teach LA",
                difficulty: "Beginner",
            },
            {
                name: "Flexbox Froggy | CSS",
                game: "https://flexboxfroggy.com/",
                source: "External",
                difficulty: "Beginner",
            },
            {
                name: "Grid Garden | CSS",
                game: "https://codepip.com/games/grid-garden/",
                source: "External",
                difficulty: "Beginner",
            },
            {
                name: "Learning Labs | Intro to SASS",
                video: "https://www.youtube.com/watch?v=hJqrfq3r950",
                article: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/10-sass",
                source: "Teach LA",
                difficulty: "Beginner",
            },
            {
                name: "Learning Labs | CSS Box Model & Positioning",
                video: "https://www.youtube.com/watch?v=ar1Ni6SNaEE&list=PLPO7_kXilXFa6YdXxn5oln1gagcqnFI4l&index=2",
                article: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/02-intermediate-css",
                source: "Teach LA",
                difficulty: "Beginner",
            },
            {
                name: "Learning Labs | CSS Flexbox & Grid",
                video: "https://www.youtube.com/watch?v=CBR0R50-jGg",
                article: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/04-flexbox-grid",
                source: "Teach LA",
                difficulty: "Beginner",
            },
            {
                name: "Learning Labs | CSS Animations",
                video: "https://youtu.be/eqogXB3tLes",
                article: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/06-css-animations",
                source: "Teach LA",
                difficulty: "Intermediate",
            },
            {
                name: "Interneting is Hard | Intro to HTML/CSS",
                article: "https://www.internetingishard.com/html-and-css/",
                source: "External",
                difficulty: "Intermediate",
            },
            {
                name: "Marksheet | Intro to HTML/CSS",
                article: "https://marksheet.io/",
                source: "External",
                difficulty: "Advanced",
            },
            {
                name: "Mozilla | CSS Basics",
                documentation: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics",
                source: "External",
                difficulty: "Advanced",
            },
        ],
    },
    {
        category: "Intro Javascript",
        links: [
            {
                name: "Hackschool | Intro to JavaScript",
                video: "https://www.youtube.com/watch?v=Dk9kob-9Wkw",
                article: "https://github.com/uclaacm/hackschool-f20/blob/main/session-2-intro-to-js",
                source: "Hack",
                difficulty: "Beginner",
            },
            {
                name: "Learning Labs | Intro to JavaScript",
                video: "https://www.youtube.com/watch?v=wTMeQSq2PJg",
                article: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/03-intro-js",
                source: "Teach LA",
                difficulty: "Beginner",
            },
            {
                name: "Learning Labs | Testing in JavaScript",
                video: "https://www.youtube.com/watch?v=aPJm91_cDw4",
                article: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/17-intro-testing-js",
                source: "Teach LA",
                difficulty: "Beginner",
            },
            {
                name: "Mozilla | Javascript Basics",
                documentation: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics",
                source: "External",
                difficulty: "Intermediate",
            },
            {
                name: "Mozilla | Re-Intro to JavaScript",
                article: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript",
                source: "External",
                difficulty: "Advanced",
            },
        ],
    },
    {
        category: "Advanced Javascript",
        links: [
            {
                name: "Hackschool | Javascript DOM API",
                video: "https://www.youtube.com/watch?v=Au3F9R0qr7M",
                article: "https://github.com/uclaacm/hackschool-f20/tree/main/session-3-dom-api",
                source: "Hack",
                difficulty: "Intermediate",
            },
            {
                name: "Hackschool | Asynchronous JS & API's",
                video: "https://www.youtube.com/watch?v=KUr5qG_ZGuY",
                article: "https://github.com/uclaacm/hackschool-f20/tree/main/session-5-async-and-web-APIs",
                source: "Hack",
                difficulty: "Intermediate",
            },
            {
                name: "Learning Labs | Asynchronous JS",
                video: "https://www.youtube.com/watch?v=T9mslksU_Vg",
                article: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/15-async-js",
                source: "Teach LA",
                difficulty: "Intermediate",
            },
            {
                name: "JavaScript Chats | Deep Dive into JS",
                article: "https://hack.uclaacm.com/posts/fall2019/js-chats-summary/",
                source: "Hack",
                difficulty: "Intermediate",
            },
            {
                name: "Mozilla | Javascript DOM API",
                documentation: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction",
                source: "External",
                difficulty: "Advanced",
            },
            {
                name: "Eloquent Javascript",
                documentation: "https://eloquentjavascript.net/",
                source: "External",
                difficulty: "Advanced",
            },
            {
                name: "Twilio | Async Javscript in Node.js",
                article: "https://www.twilio.com/blog/asynchronous-javascript-using-promises-rest-apis-nodejs",
                source: "External",
                difficulty: "Advanced",

            },
        ],
    },
    {
        category: "React",
        links: [
            {
                name: "Hackschool | Intro to React",
                video: "https://www.youtube.com/watch?v=1X84EQR92F4&ab_channel=ACMatUCLA",
                article: "https://github.com/uclaacm/hackschool-f20/tree/main/session-7-intro-react",
                source: "Hack",
                difficulty: "Beginner",
            },
            {
                name: "QWER Hacks | Intro to React & Firebase",
                article: "https://github.com/malsf21/qwerhacks-web-dev-workshop",
                source: "Teach LA",
                difficulty: "Beginner",
            },
            {
                name: "Javascript Chats | React Hooks",
                article: "https://hack.uclaacm.com/posts/fall2019/js-chats-3/",
                source: "Hack",
                difficulty: "Intermediate",
            },
            {
                name: "Learning Labs | Intro to React",
                video: "https://www.youtube.com/watch?v=3UKF9qMBIzA",
                article: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/07-intro-react",
                source: "Teach LA",
                difficulty: "Beginner",
            },
            {
                name: "Learning Labs | Intermediate React",
                video: "https://youtu.be/SJOWiYyRjkE",
                article: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/09-intermediate-react-1",
                source: "Teach LA",
                difficulty: "Intermediate",
            },
            {
                name: "Learning Labs | Intermediate React",
                video: "https://youtu.be/SJOWiYyRjkE",
                article: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/09-intermediate-react-1",
                source: "Teach LA",
                difficulty: "Intermediate",
            },
            {
                name: "Learning Labs | React Hooks",
                video: "https://www.youtube.com/watch?v=-cKLNanIPYA",
                article: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/11-react-hooks",
                source: "Teach LA",
                difficulty: "Intermediate",
            },
            {
                name: "Facebook | Intro to React",
                article: "https://reactjs.org/tutorial/tutorial.html",
                source: "External",
                difficulty: "Intermediate",
            },
            {
                name: "Facebook | Thinking in React",
                article: "https://reactjs.org/docs/thinking-in-react.html",
                source: "External",
                difficulty: "Advanced",
            },
        ],
    },
    {
        category: "Git & GitHub",
        links: [
            {
                name: "Tooling Series | Git",
                video: "https://www.youtube.com/watch?v=GBa6uuPTlr0",
                article: "https://github.com/uclaacm/hack-tooling-series/tree/master/session-2-git",
                source: "Hack",
                difficulty: "Beginner",
            },
            {
                name: "QWER Hacks | Deploying with GitHub",
                video: "https://www.youtube.com/watch?v=u7uGoV9DT3M",
                source: "Teach LA",
                difficulty: "Beginner",
            },
            {
                name: "GitHub | Hello World",
                article: "https://guides.github.com/activities/hello-world/",
                source: "External",
                difficulty: "Beginner",
            },
            {
                name: "GitHub | Mastering Issues",
                article: "https://guides.github.com/features/issues/",
                source: "External",
                difficulty: "Beginner",
            },
            {
                name: "GitHub | All Guides",
                article: "https://guides.github.com/",
                source: "External",
                difficulty: "Intermediate",
            },
        ],
    },
    {
        category: "Graphic Design",
        links: [
            {
                name: "Bloom Design | Storytelling",
                video: "https://www.youtube.com/watch?v=CPel8OzGRSc",
                source: "Design",
                difficulty: "Beginner",
            },
            {
                name: "Bloom Design | Typography",
                video: "https://www.youtube.com/watch?v=ol9KoOUqK4c",
                source: "Design",
                difficulty: "Beginner",
            },
            {
                name: "Bloom Design | Design & Colors",
                video: "https://www.youtube.com/watch?v=Zbonn0ysq5M",
                source: "Design",
                difficulty: "Beginner",
            },
            {
                name: "Bloom Design | Grid & Layout",
                video: "https://www.youtube.com/watch?v=WUjqASyONLE",
                source: "Design",
                difficulty: "Beginner",
            },
            {
                name: "Bloom Design | UI Design Flow",
                video: "https://www.youtube.com/watch?v=p1Y5jqpDP-M",
                source: "Design",
                difficulty: "Beginner",
            },
            {
                name: "Bloom Design | How Shit Looks!",
                video: "https://www.youtube.com/watch?v=VQ8eaYMKS90",
                source: "Design",
                difficulty: "Beginner",
            },
        ],
    },
    {
        category: "Accessibility",
        links: [
            {
                name: "Hackschool | Responsive, Accessibility",
                video: "https://www.youtube.com/watch?v=jy_OtcErlRY",
                article: "https://github.com/uclaacm/hackschool-f20/tree/main/session-6-responsive-design-and-accessibility",
                source: "Hack",
                difficulty: "Beginner",
            },
            {
                name: "Learning Labs | Web Accessibility",
                video: "https://youtu.be/C4owSuA5S1Y",
                article: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/13-accessibility",
                source: "Teach LA",
                difficulty: "Beginner",
            },
            {
                name: "Google | Web Accessibility",
                article: "https://developers.google.com/web/fundamentals/accessibility/",
                source: "External",
                difficulty: "Intermediate",
            },
            {
                name: "W3 | Web Accessibility",
                article: "https://www.w3.org/WAI/tips/designing/",
                source: "External",
                difficulty: "Intermediate",
            },
            {
                name: "Digital.gov | Web Accessibility",
                article: "https://digital.gov/resources/introduction-accessibility/",
                source: "External",
                difficulty: "Intermediate",
            },
            {
                name: "Marcy Sutton | Auditing Accessibility",
                article: "https://marcysutton.com/how-i-audit-a-website-for-accessibility",
                source: "External",
                difficulty: "Intermediate",
            },
        ],
    },
    {
        category: "Product Managment",
        links: [
            {
                name: "Hack | Passion Talks: What is a PM?",
                article: "https://www.youtube.com/watch?v=lcvhWjPMZR8",
                source: "Hack",
                difficulty: "Beginner",
            },
            {
                name: "ACM | PM Interview Prep",
                article: "https://github.com/keianasnell/pm-interview-prep",
                source: "Dev",
                difficulty: "Advanced",
            },
            {
                name: "5 Must-Know PM Resources",
                article: "https://medium.com/swlh/5-must-know-resources-for-product-management-in-2020-e5f005d46986",
                source: "External",
                difficulty: "Intermediate",
            },
            {
                name: "Evolution of a Product",
                article: "https://www.sequoiacap.com/article/evolution-of-a-product",
                source: "External",
                difficulty: "Intermediate",
            },
            {
                name: "Measuring Product Health",
                article: "https://www.sequoiacap.com/article/measuring-product-health",
                source: "External",
                difficulty: "Intermediate",
            },
            {
                name: "Everything You Were Going to Ask Me About APM",
                article: "https://medium.com/@emchenran/everything-you-were-going-to-ask-me-about-apm-92b9b5e82fe6",
                source: "External",
                difficulty: "Advanced",
            },
            {
                name: "Advice when Recruiting for Salesforce APM",
                article: "https://docs.google.com/document/d/1dNrdwlZpP8lbAWHok02XrF4b8u4Osci5UNTGpk7SY6M/edit",
                source: "External",
                difficulty: "Advanced",
            },
            {
                name: "Preparing APM: Entry Level PM Interviews",
                article: "https://www.linkedin.com/pulse/preparing-apmentry-level-pm-case-interviews-ryan-ham/",
                source: "External",
                difficulty: "Advanced",
            },
            {
                name: "Retention",
                article: "https://www.sequoiacap.com/article/retention",
                source: "External",
                difficulty: "Advanced",
            },
            {
                name: "SaaS Growth Metrics",
                article: "https://www.appcues.com/blog/saas-growth-metrics",
                source: "External",
                difficulty: "Advanced",
            },
        ],
    },
]

export default resources;