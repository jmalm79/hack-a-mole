import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all phrases/insults
  getInsults: function() {
    return axios.get("/api/phrases")
  },
  getHighscores: function() {
    return axios.get("/api/highscores")
  },
  newHighscore: function(scoreData) {
    return axios.post("/api/highscores", scoreData)
  }
  // require in this file as something like this 
  // import API from "../../utils/API";

  // API.newHighscore(data) will post the new highscore
}
