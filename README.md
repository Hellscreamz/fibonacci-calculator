# Fibonacci System App

This is a simple web application that calculates Fibonacci values and stores them in a PostgreSQL database. It consists of several Docker containers for different services.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

1. **Clone this repository** to your local machine:

   ```bash
   git clone https://github.com/your-username/fibonacci-system-app.git
   cd fibonacci-system-app

## Setup

1. **Create an .env file** in the root directory with the following environment variables.
    `Take a look at .env.sample file`


2. **Start the application** using Docker Compose:

    ```bash
    docker-compose up --build
    ```

    This will build and start the PostgreSQL, Redis, API, Client, and Worker containers.

3. **Access the application** in your web browser at http://localhost:3050.

## Usage

- Enter an index in the input field and click "Submit" to calculate the Fibonacci value for that index.
- The calculated values and seen indexes are displayed on the main page.
### Keep in mind for larger indexes takes longer time to calculate the result based on your system capabilities ###

## Cleanup

To stop and remove the Docker containers, use the following command:

```bash
docker-compose stop

OR

docker-compose kill
