## Test application utilizing expo modules

### Setup instructions

1. Clone the repository
2. Run `npm install` in the root directory
3. Generate the `ios` and `android` directories
   1. If this is the first time running the app `npm run ios`/`npx expo run:ios` or `npm run android`/`npx expo run:android` will generate the directories. If you have generated them already and made any changes to the `app.config.ts` or want to test using different
      env vars you will need to run `npx expo prebuild --clean` before running the `run` command
4. Once you have the app running on a simulator, you should see a screen with the dynamic app information and the custom
   web view surrounded in a black border
