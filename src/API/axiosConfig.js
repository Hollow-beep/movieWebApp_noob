import axios from "axios";

export default axios.create({
        //Base URL address of API endpoint that 
        //the client React application will be calling with HTTP request
        baseURL:'https://9c96-103-106-239-104.ap.ngrok.io',
        headers: {"ngrok-skip-browser-warning": "true"}
})