# The Cosmos Databank Applicaiton
POC application powered by NativeScript + Angular-2 and using Angular HTTP and NASA API.

[Install Cosmos Databank from Google Play Store](https://play.google.com/store/apps/details?id=org.nativescript.curiosity&hl=bg) or use the instructions below to create a local build.

Main sections:

- Astronomical Photo of the Day (APOD).

Daily selection of great astronomical photos.

- Asteroids Proximity Checker.

Weekly list of the closest known asteroids orbiting near the Earth.

- Mars Rovers Photo Gallery.

Over 500k (five hundred thousand!) photos made from Opportunty, Spirit and Curiosity rovers of the Mars environment.

## Requirements
- NativeScript 3.x.x.
- Android (API 19 and above) or iOS device or emulator.

## Instructions
- Clone the repository.
- Add the neeeded credentials in `app/settings.json` as described in [settings.json.md](./settings.json.md) file.
- Add `google-services.json` and `GoogleService-Info.plist` files in the related _app/App_Resources/_ platform folders.
- Run the application.

**Android**
```
npm i
tns platform add android
tns run android --bundle --env.uglify --env.aot --env.snapshot
```

> Note: The project's `app.gradle` file is setting `minSdkVersion` to 19

**iOS**
```
npm i
tns platform add ios
tns run ios --bundle --env.uglify --env.aot 
```