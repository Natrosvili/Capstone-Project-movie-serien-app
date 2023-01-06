<section id="main-section">
    <a href="https://capstone-project-movies-series-app.vercel.app">
        <img style="border-radius: 0.8rem" src="./public/images/other/logo.png" alt="logo"/>
    </a>
    <h1>Description</h1>
    <p><strong>Note: This is a capstone project for <a class="neuefische" href="https://www.neuefische.de/en">neuefische</a> Web Development Bootcamp.</strong></p>
    <p>Search Find Go! - Just a better place to find Movies and Series in high Quality. It allows you to find the best streaming platforms of your favourite Movies and Series for free.</p>
    <img class="video" src="./public/images/other/georgios_natrosvili.gif" />
    <br>
    <h1>Demo</h1>
    <h3><strong>IMPORTANT NOTE: currently optimized for mobile!</strong></h3>
    <p>Just open this <a href="https://capstone-project-movies-series-app.vercel.app">vercel</a>, or click the image above the description, find your favorite Series and Movies, and have fun.</p>
    <br>
    <div>
        <h1>Tech Stack</h1>
        <div class="tech-stack">
            <p>Figma</p>
            <p>React</p>
            <p>React Hooks</p>
            <p>React Router</p>
            <p>NextJS</p>
            <p>Node.js</p>
            <p>Styled Components</p>
            <p>Vercel</p>
        </div>
    </div>
    <br>
    <div class="project-setup">
    <h1>Project Setup</h1>
        <ul class="project-setup-list">
            <li>1. Clone this repository.</li> 
            <li>2. Install all npm dependencies</li> 
            <span class="npm-install">npm install</span>.
            <li>3. To run the app in development mode <span class="npm-start">npm start</span>, then open http://localhost:3000 to view it in the browser.</li>
            <li>4. To run unit and component tests: <span class="npm-test">npm test</span>.</li>
            <li>5. to create a build ready for deploying: <span class="npm-run-build">npm run build</span>.</li>
        </ul>
    </div>

</section>

<style>
    #main-section{
        text-align: center
    }
    .video{
        border-radius: 1rem;
        width: 50%;
        height: 70%;
    }
    h1, h3 {
        font-style: italic;
    }
    .neuefische, .neuefische:hover{
        color: rgba(167, 49, 4);
    }
    .tech-stack{
        text-align: center;
    }

    .project-setup{
        line-height: 2.2;
    }
    .project-setup-list{
        list-style-type: none;
        padding: 0;
    }
    .npm-install, .npm-start, .npm-test, .npm-run-build{
        color: #ffe600;
    }
</style>

<!-- # Capstone-Project-Template for Octopodes

- Next.js project created with `create-next-app`
- [Default Styling (with CSS Modules) has been removed](#styling)
- [Styled Components support added](#styling)
- [Mongoose connectivity support added](#mongoose-connectivity)
- [Storybook support added](#storybook)
- [ESLint config added](#eslint)
- [React Testing Library & Jest support added](#testing)
- [Prettier config added](#prettier)

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

Run Storybook:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to inspect your components
with Storybook.

Run tests:

```bash
npm run test
# or
npm run test:watch
```

## Styling

We removed the Next.js default styles and added Styled Components support.

You can find an initial [`GobalStyles.js`](/styles/GlobalStyles.js) in the
`/styles` directory. Storybook is already configured to respect styles from
`GlobalStyles.js`

## Mongoose connectivity

We added a mongoose connection helper function in
[`/pages/api/_db/connect-db.js`](/pages/api/_db/connect-db.js).

Please remember to wrap your API route handler functions with the `connectDB()`
helper when exporting:

```
export default connectDB(handler);
```

To use your own DB, create a `.env.local` file and add your connection string as
shown in [`.env.local.example`](/.env.local.example). Please remember to add
your database name at the end of the connection string.

We prepared a demo API route handler
[`pages/api/octopodes.js`](/pages/api/octopodes.js) and some demo data in the
[`/_data`](/_data) folder. Additionally there is a mongoose model for the demo
data in [`/pages/api/_db/models`](/pages/api/_db/models). This is just for
demonstration purposes - create your own data and models following this pattern.

## Storybook

We created a demo component
[`/components/OctopusCard.js`](/components/OctopusCard.js) and corresponding
stories. Create your own stories following this pattern.

## ESLint

You can run ESLint from the terminal by typing

```bash
npm run lint
```

Please make sure that there are no linter errors before pushing to Github. Your
pull requests will report failed code quality checks otherwise.

## Testing

Please write your tests in the [`/__tests__`](/__tests__/) folder instead of
placing them next to your components. Next.js does not allow test files in its
`/pages` directory.

We prepared a demo test that tests if the Homepage renders a 🐙.

Please make sure that all tests pass before pushing to Github. Your pull
requests will report failed test runs otherwise.

## Prettier

We added a [Prettier configuration file](/.prettierrc) with basic formatting
rules. Feel free to edit these rules to your taste.

You can check the formatting of your files with `npm run prettier`

You can auto format all files in the project by calling
`npm run prettier:write`.

Please make sure that your code passes the prettier check before pushing to
Github. Your pull requests will report failed code quality checks otherwise. -->
