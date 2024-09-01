# Giraffe Squad Fantasy Football Newsletter

## Pre-requisites
- 💻 Node.js v21
- 🏈 A passion for Fantasy Football
- 🤣 A good sense of humor and creative spirit

## Local setup
1. Clone the repository
2. Change into the created project directory and run `npm install`
3. Run `npm run dev` to start the project 
4. The project should be accessible at http://localhost:5173

## Folder structure
- `src/components` - Reusable components that are utilized in various pages
- `src/data` - The data that will be used to populate content for a week. 
    - **IMPORTANT: Each week should have its own unique data file.**
- `src/hooks` - React hooks that are used throughout the project
- `src/images` - Various images that are used throughout the project
- `src/routes` - The various pages for the site.
    - **IMPORTANT: Each week should have its own unique route file.**
- `src/global.module.css` - Reusable global styles that are used throughout the site
- `src/settings.tsx` - Global settings that are used throughout the site
- `src/types.ts` - Global TypeScript types that are used throughout the site

## Adding a new week
To add a new week to the site, please follow the steps below.

1. Create a new week file under `src/routes/weeks` with the name of the week
2. Customize the week file to include any combination of components you'd like. The only required components are: `Title`, `WeekSelector` and `WeekNav` (see previous weeks for usage example), however the `Scores` and `Standings` are strongly recommended.
3. Create a new data file under `src/data` with the name of the week and add the data that will be needed by the components on your page.
4. To see your page in the site, add your route component and route name in the `src/main.tsx` file.
5. Once ready to publish, change the `CURRENT_PUBLISHED_WEEK` value to your new week in the `src/settings.ts` file.
6. All routing and navigation should be automatically handled for you thanks to some pretty cheeky component design if I do say so myself 😜
7. PUSH, CELEBRATE AND SHARE!