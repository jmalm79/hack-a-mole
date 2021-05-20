import React from "react";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";

function Share(props) {
  if (props.isVisible === "true") { 
    return (
      <div className="App">
        <FacebookShareButton
          url={"https://enigmatic-sierra-05882.herokuapp.com/"}
          quote={""}
          hashtag={"#hashtag"}
          description={"bootcamp_project"}
          className="Demo__some-network__share-button"
        >
          <FacebookIcon size={32} round /> 
        </FacebookShareButton>
        <br />
        <TwitterShareButton
          title={"Hack-A-Mole"}
          url={"https://enigmatic-sierra-05882.herokuapp.com/"}
          hashtags={["hashtag1", "hashtag2"]}
        >
          <TwitterIcon size={32} round />
          
        </TwitterShareButton>
      </div>
    );
  } else {
    return (
      <div />
    )
  }
}


export default Share;