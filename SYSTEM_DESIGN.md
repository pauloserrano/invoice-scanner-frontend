# [Invoice Scanner](https://github.com/pauloserrano/invoice-scanner-frontend) Design Documentation

**Date:** 20/06/2024  
**Written By:** [Paulo Serrano](https://github.com/pauloserrano)

<br />

## Project Overview

This project aims to design and implement a solution that allows users to upload an invoice image to a webpage, automatically extract its text using OCR, and display a structured summary of the extracted data to the user. All while providing an easy to use and aesthetic pleasing user interface.

<br />

## System Architecture

### Frontend (Next.js)

A website for users to upload images, see their extracted text and manage all of their invoices. It is the face of the application and how the user will interact with it

- **Authentication:** Integrate Google OAuth for user authentication via Next-auth. Users are only allowed to upload after being authenticated
- **Upload Form:** A form for users to upload images. Only one image can be uploaded at a time.
- **Feedback Mechanisms:** User feedback for asyncronous tasks: Eg: A spinner while uploading an image, and toasts to log success/error messages to the user.

#### **Router Pages**

- /
- /invoices
- /profile
- /auth/oauth
- /auth/signin
- /auth/signout

### Backend (NestJS)

An API that handles user authentication, image uploads, OCR processing, and database transactions.

- Image Upload Handling ("/invoice/upload"): Endpoint to receive image uploads.
- OCR Processing: Trigger Lambda function to process the image and extract text using Textract.
- Data Storage and Retrieval: Store extracted text in PostgreSQL and provide endpoints for retrieving processed data.

- **Auth Endpoints (/auth)**

  - POST (/signup)
  - POST (/signin)
  - POST (/oauth)
  - POST (/refresh)

- **User Endpoints (/user)**

  - GET (/:id)
  - PATCH (/:id)
  - DELETE (/:id)

- **Invoice Endpoints (/invoice)**
  - GET (/)
  - POST (/upload)
  - PATCH (/)
  - DELETE (/)

### Cloud/External Services

- Deploy (Vercel)
- Database Hosting (Supabase)
- OCR service (AWS Textract)
- Google Cloud (OAuth)

<br />

## Database Model

### Users Table

| Column    | Type      | Description            |
| --------- | --------- | ---------------------- |
| id        | Int       | Primary key            |
| email     | String    | User's email address   |
| name      | String    | User's name            |
| image     | String    | User's avatar          |
| hash      | String    | User's hashed password |
| provider  | Providers | Account provider       |
| createdAt | Timestamp | Creation timestamp     |
| updatedAt | Timestamp | Last update timestamp  |

### Invoices Table

| Column        | Type      | Description                   |
| ------------- | --------- | ----------------------------- |
| id            | Int       | Primary key                   |
| userId        | Int       | Foreign key to Users table    |
| extractedText | Text      | Extracted text from the image |
| createdAt     | Timestamp | Creation timestamp            |
| updatedAt     | Timestamp | Last update timestamp         |

## Architecture Diagrams

WIP
