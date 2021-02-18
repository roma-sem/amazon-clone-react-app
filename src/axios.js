import axios from 'axios';

const instance = axios.create({
    // THE API (cloud function) URL

    // Local testing/development:
    // baseURL: 'http://localhost:5001/clone-97be1/us-central1/api/'

    // Deployed to Firebase:
    // -- run command: firebase deploy --only functions
    // -- copy URL from Firebase >> Functions
    baseURL: 'https://us-central1-clone-97be1.cloudfunctions.net/api'
});

export default instance;
