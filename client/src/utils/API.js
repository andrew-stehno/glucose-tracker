import axios from "axios";

export default {
  // Gets data by day
  getByDay: function(date) {
      // console.log("api date: " + date);
    return axios.get("/api/glucose/date/" + date);
  },
  // Save input data to database
  saveData: function(data) {
    return axios.post("/api/glucose/", data);
  },
  // Gets data by id
  getOneRecord: function(id) {
    return axios.get("/api/glucose/" + id);
  },
  // Updated record with given id
  updateRecord: function(data) {
    console.log(data)
    // return axios.put("/api/glucose/" + data.id)
  },
  // Deletes data with given id
  deleteRecord: function(id) {
    return axios.delete("/api/glucose/" + id);
  }
};
