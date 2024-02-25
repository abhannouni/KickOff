# KickOff

"KickOff" is a mobile application developed with React Native Expo that allows users to view live football matches. Users can follow their favorite teams and players, get real-time updates on match scores, and check detailed player statistics. The application provides a comprehensive experience for football enthusiasts to stay connected with the latest match action.

## Features

- View live matches
- View match details
- Add matches to favorites
- Remove matches from favorites
- View player information
- Buy details of a player
- View favorite matches

## Technologies

- React Native
- Expo
- Redux
- React Navigation

## Installation

### Prerequisites

- Node.js

### Steps

1. Ensure you have Node.js installed.
2. Clone the repository.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the application.

## Dockerization

### Prerequisites

- Docker

1. Ensure you have Docker installed.
2. Run `docker build -t kickoff .` to build the Docker image.
3. Run `docker run -it -p 19000:19000 -p 19001:19001 -p 19002:19002 -p 8081:8081 kickoff` to run the Docker container.

## Testing

Run `npm test` to execute tests.

