import React, { useState } from 'react';
import API from '../../utils/API';
import Scoreboard from '../Scoreboard'

function AddHighScore(props) {
    
    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.name && formObject.score) {
          API.newHighscore({
            name: formObject.name,
            score: formObject.score,
          })
            .catch(err => console.log(err));
        }
      };
    
    return (
      <form>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            onChange={handleInputChange}
            type="text"
            name="name"
          />
        </div>
          {props.score}
        <button type="submit"
        disabled={!(formObject.name && formObject.score)}
        onClick={handleFormSubmit}
        >Save</button>
      </form>
    );
  };

export default AddHighScore;