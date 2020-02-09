import axios from "axios";

export default {
  // Gets data by day
  getByDay: function(data) {
    return axios.post("/api/glucose/date/" + data.date , {userId: data.userId});
  },
  // Save input data to database
  saveData: function(data, user) {
    return axios.post("/api/glucose/", data, user);
  },
  // Gets data by id
  getOneRecord: function(id) {
    return axios.get("/api/glucose/" + id);
  },
  // Updated record with given id
  updateRecord: function(id, data) {
    return axios.put("/api/glucose/" + id, data)
  },
  // Deletes data with given id
  deleteRecord: function(id) {
    return axios.delete("/api/glucose/" + id);
  }
};
