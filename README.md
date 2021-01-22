# BSDashboard

Simple dashboard asset created by BS

## Introduction

Before starting, make sure to have latest version of Node.js.

To run application server:
```
npm start
```

Application will be served on `http://127.0.0.1:8080`

## Component basis

Here is the full list of 3rd party npm dependencies used in this project:

<ul>
    <li>"react": "^16.13.1",
    <li>"react-dom": "^16.13.1",
    <li>"react-router-dom": "^5.2.0"
    <li>"postcss": "^6.0.19",
    <li>"chart.js": "^2.9.4",
    <li>"moment": "^2.29.1",
    <li>"react-flagkit": "^2.0.4",
    <li>"react-grid-layout": "^1.2.0",
</ul>

## Important Note

Ratings are not displayed properly because of confusing between data with expectations denoted in sheet. It's shown as ratings could be represented with 5 stars however these values can exceed amount of 5 stars. It's not a component bug and it can be easily fixed with a minor improvement.