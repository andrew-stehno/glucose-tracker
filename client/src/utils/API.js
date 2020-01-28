import axios from "axios";

export default {
// Save input data to database
saveData: function(data) {
    return axios.post("/api/glucose/", data);
}
};