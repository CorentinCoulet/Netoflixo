# Netoflixo Project

## Objective

The objective of this project is to create a movie platform inspired by Netflix, with particular attention to user authentication. The main features include:

- **Front-End** : A user-friendly interface including a list of movies, a search bar, and advanced features such as client-side authentication. Users will also be able to access categories such as "Favorites" and "Currently Watching."

- **Back-End** : A local server using Node.js and Express, which will make requests to a MongoDB database to retrieve various movies. Secure server-side authentication management will be implemented.

- **Local Database** : Gathering different movies to be displayed on the site, this database will include essential information such as genre tags, an ID, a name, an image, and a synopsis.

## Languages / Frameworks / Tools

- **Front-End** : TypeScript, React, Vite, Redux.
  
- **Back-End** : Node.js, Express, MongoDB.

- **Containerization Tools** : Docker.

## Details on Authentication

User authentication will be managed both on the front-end and back-end to ensure a secure environment. The main steps include:

### Front-End

- **Authenticated Search Bar** : Authenticated users will have access to an advanced search bar, enhancing the browsing experience.

- **Custom Categories** : Users can mark movies as "Favorites" and categorize them as "Currently Watching."

### Back-End

- **Secure User Management** : Authentication information will be securely stored in the database.

- **Access Control** : Queries to sensitive data will be protected to ensure only authenticated users have access.

- **JWT (JSON Web Tokens)** : A JWT system will be implemented to manage user sessions, ensuring secure authentication.
