/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  // Gets all insults from Phrase table
  getInsults: function() {
    return axios.get("/api/phrases")
  }
};