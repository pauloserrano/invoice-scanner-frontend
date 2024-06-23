<p align="center">
  <a href="mailto:pvsserrano@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />        
  </a>&nbsp;
  <a href="https://www.linkedin.com/in/pvsserrano/">
    <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
</p>

<br />
<div align="center">

  <!-- PROJECT LOGO -->
  <!--
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>
  -->

  <h1>Invoice Scanner</h1>
</div>

<!-- TECHS -->

[![Nextjs][Nextjs-badge]][Nextjs-url]&nbsp;
[![Tailwind][Tailwind-badge]][Tailwind-url]&nbsp;
[![Typescript][Typescript-badge]][Typescript-url]&nbsp;
[![Node][Node-badge]][Node-url]&nbsp;
[![Nestjs][Nestjs-badge]][Nestjs-url]&nbsp;
[![Prisma][Prisma-badge]][Prisma-url]&nbsp;
[![Postgresql][Postgresql-badge]][Postgresql-url]&nbsp;
[![JWT][JWT-badge]][JWT-url]&nbsp;
[![EsLint][EsLint-badge]][EsLint-url]&nbsp;

<br />

<!-- ABOUT -->

## About The Project

An app that allows users to upload an invoice image to a webpage, automatically extract its text using AWS Textract, and display a structured summary of the extracted data to the user.

This repository is the frontend of the application. The backend can be found [here](https://github.com/pauloserrano/invoice-scanner-backend)

<br />

<!-- GETTING STARTED -->

## Getting Started

Access the app here: [Deploy](https://invoice-scanner-frontend.vercel.app/)

Alternatively, you can run a local copy by following the steps below.

<br />

### Installation

**1.** If you haven't already, [get your backend up and running](https://github.com/pauloserrano/invoice-scanner-backend)

**2.** Clone this repository

```sh
git clone git@github.com:pauloserrano/invoice-scanner-frontend.git
```

**3.** Install the dependencies

```sh
npm i
```

**4.** Create a .env.local file copying the .env.example variables

- **NEXT_PUBLIC_DB_BASE_URL**: The backend url you setup at step 1.
- **NEXTAUTH_URL**: The frontend url. By default [http://localhost:3000/](http://localhost:3000/)
- **NEXTAUTH_SECRET**: A random string
- **GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET**: To get these API Keys you'll need a Google account and this [Documentation](https://developers.google.com/workspace/guides/create-credentials)

**5.** Run the app

```sh
npm build && npmstart
```

or

```sh
npm run dev
```

**6.** Access the app at [http://localhost:3000/](http://localhost:3000/)

<br />

<!-- CONTACT -->

## My Contacts

Email: [pvsserrano@gmail.com](mailto:pvsserrano@gmail.com)

Linkedin: [Paulo Serrano](https://www.linkedin.com/in/pvsserrano/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Typescript-badge]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
[EsLint-badge]: https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white
[EsLint-url]: https://eslint.org/
[Sass-badge]: https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white
[Sass-url]: https://sass-lang.com/
[Angular-badge]: https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Node-badge]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/
[Nextjs-badge]: https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white
[Nextjs-url]: https://nextjs.org/
[Tailwind-badge]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[Prisma-badge]: https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white
[Prisma-url]: https://www.prisma.io/
[Postgresql-badge]: https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white
[Postgresql-url]: https://www.postgresql.org/
[Nestjs-badge]: https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white
[Nestjs-url]: https://nestjs.com/
[JWT-badge]: https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens
[JWT-url]: https://jwt.io/
