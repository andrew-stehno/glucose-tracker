import axios from "axios";

export default {
  // Gets data by day
  getByDay: function(date) {
    return axios.get("/api/glucose/" + date);
  },
  // Save input data to database
  saveData: function(data) {
    return axios.post("/api/glucose/", data);
  }
};
