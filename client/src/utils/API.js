import axios from "axios";

export default {
  // Gets data by day
  getByDay: function(date) {
      // console.log("api date: " + date);
    return axios.get("/api/glucose/" + date);
  },
  // Save input data to database
  saveData: function(data) {
    return axios.post("/api/glucose/", data);
  },
  // Deletes data with given id
  deleteRecord: function(id) {
    return axios.delete("/api/glucose/" + id);
  }
};
