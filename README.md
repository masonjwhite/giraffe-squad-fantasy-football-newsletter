# Giraffe Squad Fantasy Football Newsletter

## Pre-requisites

- 💻 Node.js v21
- 🏈 A passion for Fantasy Football
- 🤣 A good sense of humor and creative spirit

## Local setup

1. Clone the repository
2. Change into the created project directory and run `npm install`
3. Duplicate the `.env.example` and name it `.env` 
4. Add an `APP_KEY` and `APP_SECRET` to your newly created `.env` file
5. Run `npm run dev` to start the project
6. The project should be accessible at http://localhost:5173

## Folder structure
- `api/createData.js` - Script to automate data collection from the Yahoo Fantasy Football API 
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

1. Modify the `create-weekly-file` script in the `package.json` to take the week of the file you want to create. (the number after `createDataFile.js`)
2. Run the `create-weekly-file` script
3. To see your page in the site, add your route component and route name in the `src/main.tsx` file.
4. Once ready to publish, change the `CURRENT_PUBLISHED_WEEK` value to your new week in the `src/settings.ts` file.
5. All routing and navigation should be automatically handled for you thanks to some pretty cheeky component design if I do say so myself 😜
6. PUSH, CELEBRATE AND SHARE!
