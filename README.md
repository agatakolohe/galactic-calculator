# Galactic Calculator

#### Test Driven Development and Environments with JS Independent Project for Epicodus 11-13-2020

#### By Agata Kolodziej

## Description

Fifth independent project for Epicodus to demonstrate my understanding of creating modern development environments, using ES6 features  and Test-driven development. It is a website to calculate a user's age on the planets Mercury, Venus, Mars, and Jupiter. I wrote automated tests for my code functions. I created an environment that will make it easier to incorporate JavaScript libraries and scaffold large projects. I demonstrated this by using module bundling with webpack, Jest for line coverage, dependencies are managed using npm, webpack is used to lint, bundle, and process code. 

## Specifications

<details>
  <summary>Expand Specs</summary>

### Describe: Mercury()

| Test | Expect |
| ---- | ------ |
| It should correctly create a Mercury object and store user inputted age | Mercury(age).toEqual(30); |
| It should correctly calculate the user's age on Mercury | age.mercuryAge().toEqual(125); |
| It should correctly calculate the user's life expectancy on Mercury | age.mercuryLifeExpectancy().toEqual(333.33); |
| It should correctly check if the user has outlived their expectancy on Mercury and return how many years the user has outlived the expectancy | age(200).timeLeftOnMercury().toEqual(-500); |
| It should correctly return how many years left the user has to live on Mercury | age.timeLeftOnMercury().toEqual(208.33)

### Describe: Venus()
| Test | Expect |
| ---- | ------ |
| It should correctly create a Venus object and store user inputted age | Venus(age).toEqual(30); |
| It should correctly calculate the user's age on Venus| age.venusAge().toEqual(48.38); |
| It should correctly calculate the user's life expectancy on Venus | age.venusLifeExpectancy().toEqual(129.03); |
| It should correctly check if the user has outlived their expectancy on Venus and return how many years the user has outlived the expectancy | age(200).timeLeftOnVenus().toEqual(-193.54); |
| It should correctly return how many years left the user has to live on Venus | age.timeLeftOnVenus().toEqual(80.64); |

### Describe: Mars()
| Test | Expect |
| ---- | ------ |
| It should correctly create a Mars object and store user inputted age | Mars(age).toEqual(30); |
| It should correctly calculate the user's age on Mars| age.marsAge().toEqual(15.957); |
| It should correctly calculate the user's life expectancy on Mars | age.marsLifeExpectancy().toEqual(42.55); |
| It should correctly check if the user has outlived their expectancy on Mars and return how many years the user has outlived the expectancy | age(200).timeLeftOnMars().toEqual(-63.82); |
| It should correctly return how many years left the user has to live on Mars | age.timeLeftOnMars().toEqual(26.59); |

### Describe: Jupiter()
| Test | Expect |
| ---- | ------ |
| It should correctly create a Jupiter object and store user inputted age | Jupiter(age).toEqual(30); |
| It should correctly calculate the user's age on Jupiter| age.jupiterAge().toEqual(2.52); |
| It should correctly calculate the user's life expectancy on Jupiter | age.jupiterLifeExpectancy().toEqual(6.74); |
| It should correctly check if the user has outlived their expectancy on Jupiter and return how many years the user has outlived the expectancy | age(200).timeLeftOnJupiter().toEqual(-10.11); |
| It should correctly return how many years left the user has to live on Jupiter | age.timeLeftOnJupiter().toEqual(4.21); |

</details>

## Setup/Installation Requirements

##### Software Requirements

1. Internet browser
2. A code editor such as VSCode to view and edit the code


##### Open Locally

- Click on the link to my repository: [My Repository](https://github.com/agatakolohe/galactic-calculator.git)
- Click on the green "Code" button and copy the repository URL
- Open your terminal and use the command `git clone https://github.com/agatakolohe/galactic-calculator.git` into the directory you would like to clone the repository
- Open in text editor to view code and make changes
  - Open terminal and navigate to the project directory.
  - Run the command `npm run install` to download and install all necessary packages for the project to function. 

  <details>
  <summary><strong>PC Users Please Read</strong></summary>

    If you are on a PC, in package.json please remove `;` and replace with ` & ` in `"scripts: { "start":`

      CHANGE

    `"scripts": {... "start": "npm run build; webpack-dev-server --open --mode development",`

      TO

    `"scripts": {... "start": "npm run build & webpack-dev-server --open --mode development",`

  </details>   

## Known Bugs

If you are using a version of Jest where the coverage directory is not automatically generated, you will need to update package.json file:

`"scripts": {..."test": "jest --coverage"},"jest": { "collectCoverage": true, "coverageReporters": ["html"]},`

## Support and Contact Details

If any errors or bugs occur use Chrome DevTools or please email me, <agatakolohe@gmail.com>

## Technologies Used

- HTML
- CSS
- Bootstrap
- JavaScript
- jQuery
- VS Code
- GitHub
- npm
- Webpack

### License

This software is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

Copyright (c) 2020 Agata Kolodziej
