/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  // Gets all phrases/insults
  getInsults: function() {
    return axios.get("/api/phrases")
  }
};