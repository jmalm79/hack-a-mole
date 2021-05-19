import React, { useState } from 'react';
import API from '../../utils/API';

function AddHighScore(props) {
    
    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.name && props.score) {
          API.newHighscore({
            name: formObject.name,
            score: props.score,
          })
          .catch(err => console.log(err));
        }
      };

      function PlayAgain() {
        props.PlayAgain();
      }
    
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
        <label htmlFor="score">Score</label>{props.score}
        <button type="submit"
        disabled={!(formObject.name && props.score)}
        onClick={() => {
          handleFormSubmit();
          PlayAgain();
        }}
        >Save</button>
      </form>
    );
  };

export default AddHighScore;