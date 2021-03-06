//NOTE:
//  - resource names should be both descriptive and concise (< 40 characters)
//  - in general (with some exceptions), external resources should be ranked below resources coming from ACM
//  - each resource can contain several links (video, article, interactive, or doc) that indicate the resource type(s)
//  - only first 5 resources are shown in resources drop down (so most important are at top)
//  - these items will be selectable in resultsItem: video, article, interactive, doc (add new sources in ResultsBody)

import acm from "../img/acm_logo.svg"
import teachla from "../img/teachLA_logo_light.svg";
import hack from "../img/hack_logo_light.svg";
import external from "../img/external_source.svg"


const resources = [
    {
        category: "HTML/CSS",
        links: [
            {
                name: "Hackschool | Intro to HTML/CSS",
                video: "https://www.youtube.com/watch?v=sttIgSTnSg0",
                article: "https://github.com/uclaacm/hackschool-f20/blob/main/session-1-intro-to-html-css/README.md",
                source: "Hack",
                description: "Covers basic development environment setup, what is web development, and what HTML and CSS is.",
                icon: hack,
            },
            {
                name: "Hackschool | Advanced CSS",
                video: "https://www.youtube.com/watch?v=vZj9uawoGMg",
                article: "https://github.com/uclaacm/hackschool-f20/tree/main/session-4-advanced-css",
                source: "Hack",
                description: "Covers advanced styling and layout, including: cascading, specificity, inheritance, pseudo-classes, transitions, animations, Flexbox, and Grid.",
                icon: hack,
            },
            {
                name: "Learning Labs | Intro to HTML/CSS",
                video: "https://www.youtube.com/watch?v=TlfR0JU5gSg&list=PLPO7_kXilXFa6YdXxn5oln1gagcqnFI4l&index=2&t=0s",
                article: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/01-intro-html-css",
                source: "Teach LA",
                description: "With Matt and Leo, we will discuss the fundamental languages of the web: HTML and CSS. After completing this, you will be able to structure a basic website, style its components, and connect it to other resources on the web!",
                icon: teachla
            },
            {
                name: "Flexbox Froggy | CSS",
                interactive: "https://flexboxfroggy.com/",
                source: "External",
                description: '"Welcome to Flexbox Froggy, a game where you help Froggy and friends by writing CSS code!"',
                icon: external,
            },
            {
                name: "Grid Garden | CSS",
                interactive: "https://codepip.com/games/grid-garden/",
                source: "External",
                description: '"Welcome to Grid Garden, where you write CSS code to grow your carrot garden!"',
                icon: external,
            },
            {
                name: "Learning Labs | Intro to SASS",
                video: "https://www.youtube.com/watch?v=hJqrfq3r950",
                article: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/10-sass",
                source: "Teach LA",
                description: "With Leo, we will learn a little bit about what happens when you take preprocessing principles from compilers and apply them to CSS. The answer is SASS! We'll talk about some of the cool things that SASS can do to make your life easier, and the state of CSS in comparison.",
                icon: teachla,
            },
            {
                name: "Learning Labs | CSS Box Model & Positioning",
                video: "https://www.youtube.com/watch?v=ar1Ni6SNaEE&list=PLPO7_kXilXFa6YdXxn5oln1gagcqnFI4l&index=2",
                article: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/02-intermediate-css",
                source: "Teach LA",
                description: "With Matt, we'll cover some key concepts in CSS (and technically, some HTML) on how to position items in the screen. Once you finish this, you'll be able to position and size elements with more precision.",
                icon: teachla,
            },
            {
                name: "Learning Labs | CSS Flexbox & Grid",
                video: "https://www.youtube.com/watch?v=CBR0R50-jGg",
                article: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/04-flexbox-grid",
                source: "Teach LA",
                description: "In this session, we will learn about two of the most powerful tools in our vanilla CSS toolbox: CSS flexbox and CSS grid. By the end of this, you should be able to understand the flex axis and flow of a page. You should understand the differences between aligning versus justifying items and content in a flex container, and how CSS grid works.",
                icon: teachla,
            },
            {
                name: "Learning Labs | CSS Animations",
                video: "https://youtu.be/eqogXB3tLes",
                article: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/06-css-animations",
                source: "Teach LA",
                description: "Matt gives you a brief flyover of how CSS Animations work, making them by hand with keyframes, and then other options (CSS & JS, lottie).",
                icon: teachla,
            },
            {
                name: "Interneting is Hard | Intro to HTML/CSS",
                article: "https://www.internetingishard.com/html-and-css/",
                source: "External",
                icon: external,
                description: '"Learning HTML and CSS is hard, but it doesn’t have to be. This 14-chapter tutorial is one of the friendliest HTML and CSS guides on the Internet. We’ll walk you through everything from selecting a good text editor (which is surprisingly important) to building full-fledged, professional-quality web pages from scratch."',
            },
            {
                name: "Marksheet | Intro to HTML/CSS",
                article: "https://marksheet.io/",
                source: "External",
                icon: external,
                description: '"MarkSheet is a free tutorial to learn HTML and CSS. It\'s short (just as long as a 50 page book), simple (for everyone: beginners, designers, developers), and free (as in \'free beer\' and \'free speech\'). It consists of 50 lessons across 4 chapters, covering the Web, HTML5, CSS3, and Sass."',
            },
            {
                name: "Mozilla | CSS Basics",
                doc: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics",
                source: "External",
                icon: external,
                description: '"CSS (Cascading Style Sheets) is the code that styles web content. CSS basics walks through what you need to get started. We\'ll answer questions like: How do I make text red? How do I make content display at a certain location in the (webpage) layout? How do I decorate my webpage with background images and colors?"',
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
                icon: hack,
                description: "Covers console.log(), comments, types and values, variables, functions, conditionals, objects, and arrays."
            },
            {
                name: "Learning Labs | Intro to JavaScript",
                video: "https://www.youtube.com/watch?v=wTMeQSq2PJg",
                article: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/03-intro-js",
                source: "Teach LA",
                icon: teachla,
                description: "This lecture (and set of notes) is supposed to be a primer into Javascript for developers with experience in another imperative language (e.g. C++, Java, Python, etc.). By the end of this lesson, you'll know enough Javascript to make simple interactions on a website, and more importantly, have a strong-enough of a foundation to start exploring it on your own, if you'd like.",
            },
            {
                name: "Learning Labs | Testing in JavaScript",
                video: "https://www.youtube.com/watch?v=aPJm91_cDw4",
                article: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/17-intro-testing-js",
                source: "Teach LA",
                icon: teachla,
                description: "In this note, we'll go over some very basic concepts of testing, and then delve into how we can write tests using Jest (and Enzyme).",
            },
            {
                name: "Mozilla | Javascript Basics",
                doc: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics",
                source: "External",
                icon: external,
                description: '"JavaScript is a programming language that adds interactivity to your website. This happens in games, in the behavior of responses when buttons are pressed or with data entry on forms; with dynamic styling; with animation, etc. This article helps you get started with JavaScript and furthers your understanding of what is possible."',
            },
            {
                name: "Mozilla | Re-Intro to JavaScript",
                article: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript",
                source: "External",
                icon: external,
                description: '"Why a re-introduction? Because JavaScript is notorious for being the world\'s most misunderstood programming language. It is often derided as being a toy, but beneath its layer of deceptive simplicity, powerful language features await."',
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
                icon: hack,
                description: "Covers DOM, accessing and manipulating elements, colors, scheduling things to happen, and listening and reacting to events.",
            },
            {
                name: "Hackschool | Asynchronous JS & API's",
                video: "https://www.youtube.com/watch?v=KUr5qG_ZGuY",
                article: "https://github.com/uclaacm/hackschool-f20/tree/main/session-5-async-and-web-APIs",
                source: "Hack",
                icon: hack,
                description: "Covers callbacks, promises, async/await keywords, JSON vs JavaScript Objects, and the fetch() function.",
            },
            {
                name: "Learning Labs | Asynchronous JS",
                video: "https://www.youtube.com/watch?v=T9mslksU_Vg",
                article: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/15-async-js",
                source: "Teach LA",
                icon: teachla,
                description: "In this note, we'll go over asynchronous programming in Javascript; or in other words, how you can make code run \"in parallel\" to other code. This is particularly useful for making requests to outside data (e.g. loading an image or file, making an API request, or fetching an external resource), but it also pops up everywhere in modern coding!",
            },
            {
                name: "JavaScript Chats | Deep Dive into JS",
                article: "https://hack.uclaacm.com/posts/fall2019/js-chats-summary/",
                source: "Hack",
                icon: hack,
                description: "Come out to JavaScript Chats with ACM Hack, a weekly discussion on intermediate/advanced JavaScript. This series aims to deepen your understanding of the language’s features and designs. We also plan to cover frameworks related topics.",
            },
            {
                name: "Mozilla | Javascript DOM API",
                doc: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction",
                source: "External",
                icon: external,
                description: '"In this guide, we\'ll briefly introduce the DOM. We\'ll look at how the DOM represents an HTML or XML document in memory and how you use APIs to create web content and applications."',

            },
            {
                name: "Eloquent Javascript",
                doc: "https://eloquentjavascript.net/",
                source: "External",
                icon: external,
                description: '"This is a book about JavaScript, programming, and the wonders of the digital. You can read it online here, or buy your own paperback copy."',
            },
            {
                name: "Twilio | Async Javscript in Node.js",
                article: "https://www.twilio.com/blog/asynchronous-javascript-using-promises-rest-apis-nodejs",
                source: "External",
                icon: external,
                description: '"Learn how to use JavaScript Promises and the async and await keywords to perform a series of related REST API calls with this programming tutorial. You\'ll also see how to create a user interface element for command line applications to show that the asynchronous processes are running."',

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
                icon: hack,
                description: "Covers setting up and working with React, JSX, importing and exporting, rendering, props, and state.",
            },
            {
                name: "QWER Hacks | Intro to React & Firebase",
                article: "https://github.com/malsf21/qwerhacks-web-dev-workshop",
                source: "Teach LA",
                icon: teachla,
                description: "This repo contains the finished product of QWER Hacks's Intro to Web Development (with React & Firebase) workshop, and a written guide that summarizes and expands upon the content of the workshop.",
            },
            {
                name: "Javascript Chats | React Hooks",
                article: "https://hack.uclaacm.com/posts/fall2019/js-chats-3/",
                source: "Hack",
                icon: hack,
                description: "Reviews lifecycle methods and function components, and covers hooks, useState, useEffect, and debouncing.",
            },
            {
                name: "Learning Labs | Intro to React",
                video: "https://www.youtube.com/watch?v=3UKF9qMBIzA",
                article: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/07-intro-react",
                source: "Teach LA",
                icon: teachla,
                description: "Covers how to install node, NPM, create-react-app, classes and modules in JS, render, state, props, and how to make a component.",
            },
            {
                name: "Learning Labs | Intermediate React",
                video: "https://youtu.be/SJOWiYyRjkE",
                article: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/09-intermediate-react-1",
                source: "Teach LA",
                icon: teachla,
                description: "Covers good practices on planning app state, React component lifecycle, how to use events in React, passing functions as props, and the 'this' keyword.",
            },
            {
                name: "Learning Labs | React Hooks",
                video: "https://www.youtube.com/watch?v=-cKLNanIPYA",
                article: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/11-react-hooks",
                source: "Teach LA",
                icon: teachla,
                description: "In this write-up, we'll cover React Hooks: a different way to create and write React code, preferring functional programming and full composition over the previous class-based approach to components, state, and lifecycle actions.",
            },
            {
                name: "Facebook | Intro to React",
                article: "https://reactjs.org/tutorial/tutorial.html",
                source: "External",
                icon: external,
                description: '"We will build a small game during this tutorial. You might be tempted to skip it because you’re not building games — but give it a chance. The techniques you’ll learn in the tutorial are fundamental to building any React app, and mastering it will give you a deep understanding of React."',
            },
            {
                name: "Facebook | Thinking in React",
                article: "https://reactjs.org/docs/thinking-in-react.html",
                source: "External",
                iocn: external,
                description: '"In this document, we’ll walk you through the thought process of building a searchable product data table using React."',
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
                icon: hack,
                description: "Covers what is Git, why use version control, basic Git operations, branching and merging, viewing repository status, using undo commands, and using Git.",
            },
            {
                name: "QWER Hacks | Deploying with GitHub",
                video: "https://www.youtube.com/watch?v=u7uGoV9DT3M",
                source: "Teach LA",
                icon: teachla,
                description: "In this video, Matt (he/him) walks through how we can use GitHub and Netlify, two free services, to deploy our react app so anybody in the world can see it!",
            },
            {
                name: "GitHub | Hello World",
                article: "https://guides.github.com/activities/hello-world/",
                source: "External",
                icon: external,
                description: '"The Hello World project is a time-honored tradition in computer programming. It is a simple exercise that gets you started when learning something new. Let’s get started with GitHub!"',
            },
            {
                name: "GitHub | Mastering Issues",
                article: "https://guides.github.com/features/issues/",
                source: "External",
                icon: external,
                description: '"Most software projects have a bug tracker of some kind. GitHub’s tracker is called Issues, and has its own section in every repository."',
            },
            {
                name: "GitHub | All Guides",
                article: "https://guides.github.com/",
                source: "External",
                icon: external,
                description: '"A collection of guides on how to use GitHub."',
            },
        ],
    },
    {
        category: "Graphic Design",
        links: [
            {
                name: "Bloom Design | Storytelling",
                video: "https://www.youtube.com/watch?v=CPel8OzGRSc",
                source: "Creative Labs",
                description: "Creative Labs' Justine Du connects the concepts behind storytelling with design to teach Bloom fellows how to use Figma, an industry standard tool, for collaboration & storyboarding.",
            },
            {
                name: "Bloom Design | Typography",
                video: "https://www.youtube.com/watch?v=ol9KoOUqK4c",
                source: "Creative Labs",
                description: "Justin Liu, designer and CL alumni, explains the basics of typography on the web. We cover how to choose fonts for your project, how to use them, and why Comic Sans might not suck as much as you think it does.",
            },
            {
                name: "Bloom Design | Design & Colors",
                video: "https://www.youtube.com/watch?v=Zbonn0ysq5M",
                source: "Creative Labs",
                description: "This week at Bloom, Ruth Lee—DMA/Communications major and Adobe Ambassador walks you through tips and tricks to bring out the best of your design skills, whatever level you’re at. Here you can explore the strategy behind color, the science of design elements, and have access to a handy design toolkit you can use instead of Canva. Time to learn how to make your designs pop!",
            },
            {
                name: "Bloom Design | Grid & Layout",
                video: "https://www.youtube.com/watch?v=WUjqASyONLE",
                source: "Creative Labs",
                description: "Sam Chai, UX Designer and Creative Labs Co-Director, teaches you how to get started on a design, no prior experience needed. The workshop goes over basic website structure, designing for different screen sizes, text & image placement, and more.",
            },
            {
                name: "Bloom Design | UI Design Flow",
                video: "https://www.youtube.com/watch?v=p1Y5jqpDP-M",
                source: "Creative Labs",
                description: "Kailey Nichols, from the Creative Labs family, breaks down design patterns of beautiful websites and explains how to build an interaction model for your own website's user experience. This workshop teaches you different design tips and how to identify and create a beautiful design!",
            },
            {
                name: "Bloom Design | How Shit Looks!",
                video: "https://www.youtube.com/watch?v=VQ8eaYMKS90",
                source: "Creative Labs",
                description: "Jess Lam, who is apart of the Creative Labs family teaches our final Bloom Workshop!  She gives an in-depth tutorial in creating high-fidelity designs, and show you how to put the finishing touches in your beautiful designs!",
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
                icon: hack,
                description: "Covers Chrome Developer Tools, max width, media queries, the viewport meta tag, image alt text, labels for form inputs, and semantic HTML.",
            },
            {
                name: "Learning Labs | Web Accessibility",
                video: "https://youtu.be/C4owSuA5S1Y",
                article: "https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/13-accessibility",
                source: "Teach LA",
                icon: teachla,
                description: "Welcome to Karen's introduction to accessibility on the web! After this workshop, you should have a basic understanding of what kinds of needs we should be meeting as web developers. You should be able to evaluate websites using your familiarity with accessibility guidelines, with the help of convenient tools.",
            },
            {
                name: "Google | Web Accessibility",
                article: "https://developers.google.com/web/fundamentals/accessibility/",
                source: "External",
                icon: external,
                description: '"This document set is a text-based version of part of the content covered in the Udacity course on Accessibility. Rather than a direct transcription of the video course, it is meant to be a more concise treatment of accessibility principles and practices, using the course\'s original content as a base."',
            },
            {
                name: "W3 | Web Accessibility",
                article: "https://www.w3.org/WAI/tips/designing/",
                source: "External",
                icon: external,
                description: '"This page introduces some basic considerations to help you get started making your user interface design and visual design more accessible to people with disabilities. These tips are good practice to help you meet Web Content Accessibility Guidelines (WCAG) requirements."',
            },
            {
                name: "Digital.gov | Web Accessibility",
                article: "https://digital.gov/resources/introduction-accessibility/",
                source: "External",
                icon: external,
                description: '"This page is an introduction to why accessibility matters, and we hope that you share it with your team."',

            },
            {
                name: "Marcy Sutton | Auditing Accessibility",
                article: "https://marcysutton.com/how-i-audit-a-website-for-accessibility",
                source: "External",
                icon: external,
                description: 'Marcy Sutton describes testing websites for accessibility in structure, keyboard interactivity, automated testing, screen readers, and color contrast.',

            },
        ],
    },
    {
        category: "Product Management",
        links: [
            {
                name: "Hack | Passion Talks: What is a PM?",
                article: "https://www.youtube.com/watch?v=lcvhWjPMZR8",
                source: "Hack",
                icon: hack,
                description: "Product managers lie at the intersection of engineering, design, and business. They help drive the vision for a product, and ensure everyone involved contributes to that vision! Want to know more about this interdisciplinary field? At this week's Passion Talks, our ACM PREZ Rucha Patki will be talking about Product Management!",
            },
            {
                name: "ACM | PM Interview Prep",
                article: "https://github.com/keianasnell/pm-interview-prep",
                source: "ACM",
                icon: acm,
                description: "A compilation of resources about the interview process.",
            },
            {
                name: "5 Must-Know PM Resources",
                article: "https://medium.com/swlh/5-must-know-resources-for-product-management-in-2020-e5f005d46986",
                source: "External",
                icon: external,
                description: '"Behind every successful product is a product manager. But exactly what is a product manager and what do they do?"',
            },
            {
                name: "Evolution of a Product",
                article: "https://www.sequoiacap.com/article/evolution-of-a-product",
                source: "External",
                icon: external,
                description: '"Products evolve over time; the characteristics of an early-stage product are quite different from those of a mature one."',

            },
            {
                name: "Measuring Product Health",
                article: "https://www.sequoiacap.com/article/measuring-product-health",
                source: "External",
                icon: external,
                description: '"This post explores multiple dimensions of healthy products with a particular focus on how consumer companies should measure aspects such as growth, retention, stickiness and engagement."',

            },
            {
                name: "Everything You Were Going to Ask Me About APM",
                article: "https://medium.com/@emchenran/everything-you-were-going-to-ask-me-about-apm-92b9b5e82fe6",
                source: "External",
                icon: external,
                description: '"All the frequently asked Qs + As I get from the ~100 APM chats I\'ve done."',

            },
            {
                name: "Advice when Recruiting for Salesforce APM",
                article: "https://docs.google.com/document/d/1dNrdwlZpP8lbAWHok02XrF4b8u4Osci5UNTGpk7SY6M/edit",
                source: "External",
                icon: external,
                description: 'A doc written up by Austin Haag containing advice for Salesforce APM recruiting and some general advice.',

            },
            {
                name: "Preparing APM: Entry Level PM Interviews",
                article: "https://www.linkedin.com/pulse/preparing-apmentry-level-pm-case-interviews-ryan-ham/",
                source: "External",
                icon: external,
                description: 'An article by Ryan Ham about preparing for product case interview for APM and entry-level PM roles.',

            },
            {
                name: "Retention",
                article: "https://www.sequoiacap.com/article/retention",
                source: "External",
                icon: external,
                description: '"Wouldn\'t it be nice if every new user continued to engage with your product forever? That\'s retention—a measure of the people who tried your product and liked it enough to return."',

            },
            {
                name: "SaaS Growth Metrics",
                article: "https://www.appcues.com/blog/saas-growth-metrics",
                source: "External",
                icon: external,
                description: '"When you\'re trying to grow a SaaS company, traditional business metrics don\'t always cut it. These are the 7 most important SaaS growth metrics to track—including activation, CAC, LTV, and churn—and what to do with the data to improve the health and viability of your software company."',

            },
        ],
    },
]

export default resources;