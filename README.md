# trash-truck
SF Developer Week Hackathon Challenge

## Build and Run Instructions

This project has a Dockerfile to build the app for deployment, and a Docker Compose file meant for use in development.

All the commands assume you have Docker installed ([Mac](https://store.docker.com/editions/community/docker-ce-desktop-mac)/[Windows](https://store.docker.com/editions/community/docker-ce-desktop-windows)), and are in a shell at with the repository as the current working directory.

### Building the Image

```
docker-compose build
```

### Running the App for Development

```
docker-compose up
```

The app will be run in development mode and accessible at [http://localhost:3000/](http://localhost:3000/). The local src directory will be mounted into the container for live updates.

### Running the App for Deployment

```
COMPOSE_FILE=trash-truck.yml docker-compose up
```

The app will be accessible at [http://localhost:5000/](http://localhost:5000/).
