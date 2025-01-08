<h1 align="center">
  <br>
  <a href="https://openpecha.org"><img src="https://avatars.githubusercontent.com/u/82142807?s=400&u=19e108a15566f3a1449bafb03b8dd706a72aebcd&v=4" alt="OpenPecha" width="150"></a>
  <br>
</h1>

<h3 align="center">Monlam-OCR</h3>

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)

## Prerequisites

Before you begin, ensure you have the following prerequisites installed and configured:

- **Node.js**: You must have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

- **PostgreSQL**: Ensure that you have a PostgreSQL database up and running. You will need the database connection information to configure the application.

- **Auth0 Account**: Sign up for an Auth0 account at [auth0.com](https://auth0.com/) and create an Auth0 application to obtain the necessary authentication credentials.

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/OpenPecha/Monlam-OCR.git
   ```

2. Change into the project directory:

   ```bash
   cd Monlam-OCR
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Configuration

1. Create a `.env` file in the root of the project and add the following environment variables:

   ```env
   # PostgreSQL Database Configuration
   DATABASE_URL=your-db-connection-string

   # Auth0 Configuration
   AUTH0_DOMAIN=your-auth0-domain
   AUTH0_CLIENT_ID=your-auth0-client-id
   AUTH0_CLIENT_SECRET=your-auth0-client-secret
   AUTH0_CALLBACK_URL=http://localhost:3000/callback # Adjust this URL for your environment
   ```

   Replace `your-db-connection-string`, `your-auth0-domain`, `your-auth0-client-id`, `your-auth0-client-secret` with your specific database and Auth0 credentials.

2. You can also modify other configuration options in the `.env` file as needed for your application.

## Usage

To start the application, run the following command:

```bash
npm run dev
```

The application will be accessible at `http://localhost:3000` by default. You can change the port .

## Environment Variables

Here are the environment variables required for the web:

- `DATABASE_URL`: The hostname or IP address of your PostgreSQL database server.connection string provided from the database eg. formatted:postgresql://[database-user]:[database-password]@[database-host]/[database-name]?schema=public

- `AUTH0_DOMAIN`: Your Auth0 application's domain.
- `AUTH0_CLIENT_ID`: The Client ID of your Auth0 application.
- `AUTH0_CLIENT_SECRET`: The Client Secret of your Auth0 application.
- `AUTH0_CALLBACK_URL`: The callback URL for Auth0 authentication.

## Contributing

We welcome contributions to improve . If you find a bug, have a feature request, or want to contribute code, please open an issue or create a pull request on our [GitHub repository](https://github.com/OpenPecha/Monlam-OCR).