# Notes App

This is a Notes App built with Node.js, Express, SQLite3, and React. The application allows users to save notes, list saved notes, and delete any note based on user selection.


## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technology Stack](#technologies-stack)
- [Deployment](#deployment)
- [Testing](#testing)
- [Resources](#resources)

## Features

- Create and save notes with a title and description
- List all saved notes
- Delete notes
- Error handling for various operations

## Prerequisites

Make sure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later)

## Installation

1. Clone the repository:

   ```
   https://github.com/sulemanshaik109/notes-app.git

   cd notes-app
   ```

2. Install backend dependencies:

    ```
    cd server

    npm install
    ```

3. Install frontend dependencies:

    ```
    cd client

    npm install
    ```

## Usage

### Running the Backend Server

- Navigate to the backend directory:

    ```
    cd server
    ```

- Start the backend server:

    ```
    node index.js
    ```

    The backend server will start on http://localhost:5000.

### Running the Frontend Application

- Navigate to the frontend directory:

    ```
    cd client
    ```

- Start the frontend development server:

    ```
    npm start
    ```

    The frontend application will start on http://localhost:3000.

## API Endpoints

- To retrieve all saved notes

    GET http://localhost:5000/api/notes

- To add a new note

    POST http://localhost:5000/api/notes

    ```
    {
        "title": "title of the note",
        "description": "description of the note"
    }
    ```

- To delete a note

    DELETE http://localhost:5000/api/notes/${id}

## Technology Stack

- **Frontend**: React, JavaScript, CSS
- **Backend**: Node.js, Express
- **Database**: SQLite3

## Deployment

### Backend Deployment on Render

1. Create a Render Account:
    - Sign up for a free account at Render.

2. Create a New Web Service:
    - In the Render dashboard, click on "New" and then "Web Service".
    - Connect your GitHub repository and select the notes-app repository.

3. Configure Build and Start Commands:
    - Root Directory:

        ```
        server
        ```

    - Build Command:

        ```
        npm install
        ```

    - Start Command:

        ```
        node index.js
        ```

4. Set Environment Variables:

    - In the Render service settings, add any necessary environment variables.

5. Deploy:

    - Trigger a new deploy by pushing changes to your GitHub repository or clicking the "Deploy" button in Render.

6. Access the Application:

    - Once the deployment is successful, you can access the backend at the URL provided by Render.

### Frontend Deployment on Netlify

1. Create a Netlify Account:

    - Sign up for a free account at Netlify.

2. Create a New Site:

    - In the Netlify dashboard, click on "Add new site" and connect your GitHub repository.
3. Configure Build and Publish Settings:

    - Build Command:

        ```
        npm install
        ```
    - Publish Directory:
        
        ```
        client
        ```

4. Deploy:

    - Trigger a new deploy by pushing changes to your GitHub repository or clicking the "Deploy site" button in Netlify.
5. Access the Application:

    - Once the deployment is successful, you can access the frontend at the URL provided by Netlify.

## Testing

### Using Postman

1. Add New Request:

    - Create a new request in Postman or Insomnia.
    - Set the request method to GET, POST, PUT, or DELETE depending on the endpoint you want to test.

2. Set URL:

    - Use the URL provided by Render for the backend. For example:

        ```
        https://suleman-notes-app.onrender.com/api/notes
        ```

3. Send Request:

    - Send the request and check the response.

## Resources

<details>
<summary>Colors</summary>
<br/>

<div style="background-color: #f1f1f1; width: 150px; padding: 10px; color: black">Hex: #f1f1f1</div>
<div style="background-color: #bd9100; width: 150px; padding: 10px; color: white">Hex: #bd9100</div>
<div style="background-color: #f0e3aa; width: 150px; padding: 10px; color: white">Hex: #f0e3aa</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #c88500; width: 150px; padding: 10px; color: black">Hex: #c88500</div>
<div style="background-color: #d5bf5d; width: 150px; padding: 10px; color: black">Hex: #d5bf5d</div>
<div style="background-color: #fff8d8; width: 150px; padding: 10px; color: black">Hex: #fff8d8</div>
<div style="background-color: #000000; width: 150px; padding: 10px; color: black">Hex: #000000</div>
<div style="background-color: #363636; width: 150px; padding: 10px; color: black">Hex: #363636</div>

</details>
<br/>

# Show Your Support

Give a ⭐️ if you like this project!
