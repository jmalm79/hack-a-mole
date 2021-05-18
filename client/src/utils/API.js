import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all phrases/insults
  getInsults: function() {
    return axios.get("/api/phrases")
  },
  getHighscores: function() {
    return axios.get("/api/highscores")
  }
}
