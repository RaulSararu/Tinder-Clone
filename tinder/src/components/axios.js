import axios from "axios"

const instance = axios.create({
    baseURL: "https://tinder-clone-backend-files.herokuapp.com"
})

export default instance;