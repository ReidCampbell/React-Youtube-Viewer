import axios from "axios";

const KEY = "AIzaSyAOXYReZi-sdWLv2ASC3NnrEUdQPmqRbnk";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});
