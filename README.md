# Dev Pathways - ACM Resource Compilation 📚 📈

![Production Build](https://github.com/uclaacm/dev-pathways/workflows/Production%20Build/badge.svg)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)
[![Netlify Status](https://api.netlify.com/api/v1/badges/103c2d04-cd84-4939-a9e5-aae35ee68a3c/deploy-status)](https://app.netlify.com/sites/dev-pathways/deploys)

Hey, welcome to the Dev Pathways repo! Dev Pathways is a React app that aims to compile learning resources for popular technologies and serve them to users in a personalized way. As ACM has grown it’s become clear that we as an organization need to find a better way to support our new devs, and its our mission at the Dev Pathways team to make that happen! By establishing a single source for learning all the technologies that the ACM dev teams use, we hope to make onboarding new developers smoother than ever before.

## Development Setup

We'll use a really common Node.js project workflow!

First, let's clone our repository, and install all of our node dependencies:

```
git clone https://github.com/uclaacm/dev-pathways.git
cd dev-pathways
npm install
```

To start our app, you just need to run `npm start`!

```
npm start
```

And to build our project for production (with CRA's webpack bundling and all that goodness),

```
npm run build
```

## Contribution Workflow

Want to make a change? Great! Here are the steps:

1. Either make a new branch or a fork of this repository. `master` is a protected branch, **so you cannot push to it**.
2. Follow the instructions in "Development Setup" above. If you're on a fork, replace the URL with the fork's URL; if you're on a different branch, check it out using `git checkout`.
3. Make your changes!
4. **Before you push**, make sure your app builds with `npm run build`. If there are any errors, our CI/CD service will **reject your build**.
5. Once you're ready, stage and commit your changes!
6. Make a [pull request](https://github.com/uclaacm/dev-pathways/pulls) with your changes, and let someone on the dev team know. Netlify has a neat feature called "Deploy Previews" that give you a link to preview your changes; [see the blog post](https://www.netlify.com/blog/2016/07/20/introducing-deploy-previews-in-netlify/) for more info!
7. If your code passes code review, we'll merge it into `master`. Congratulations! If you'd like, it's now safe to delete your branch/fork.

## The Team
- [@EinarBalan](https://github.com/EinarBalan)
- [@c-m-kim](https://github.com/c-m-kim)
- [@nicole-chang](https://github.com/nicole-chang)
- [@nendow02](https://github.com/nendow02)

## Licensing & Attribution

This project and its code are licensed under the MIT License. You're free to use them however you wish, though we'd love to hear from you if you found this useful!

