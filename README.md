# Personal Website v2

My personal website's second iteration, this time bringing a UI revamp and TypeScript!

## Get Started ⚒

Start by cloning and going into the repo folder

```
git clone https://github.com/SpencerMcMurray/PersonalSite-v2.git
cd PersonalSitev2
```

Install dependancies with `npm i`

### Development:

Generate a GitHub personal access token [here](https://github.com/settings/tokens)

Then create a .env file for development

```
GH_AUTH=my-personal-access-token
GH_NAME=my-github-username
```

You can now run the site locally with `next`.

### Hosting:

For hosting use [Zeit Now](https://zeit.co). Start by installing the CLI & creating a deployment.

```
npm i -g now
now
```

Now set up the environment variables on the deployed version by running

```
now secret add gh-auth my-personal-access-token
now secret add gh-name my-github-username
```

You can now view the deployed site on the url given.

### Important Note

If you want to fork this for personal use, don't forget to change the constants.ts & resume.pdf to fit yourself.

## Tech used

This is the up to date (but to be added upon) list of the tech stack

- [Next.js](https://github.com/zeit/next.js)
- [Next.js Serverless Functions](https://zeit.co/docs/v2/serverless-functions/introduction)
- [Zeit Now](https://zeit.co/)
- [GitHub API v3](https://developer.github.com/v3/)
