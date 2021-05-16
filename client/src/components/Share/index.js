import React from "react";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";

function Share() {
  return (
    <div className="App">
      <FacebookShareButton
        url={"https://github.com/jmalm79/hack-a-mole"}
        quote={""}
        hashtag={"#hashtag"}
        description={"bootcamp_project"}
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={32} round /> Facebook share
      </FacebookShareButton>
      <br />
      <TwitterShareButton
        title={"Hack-A-Mole"}
        url={"https://github.com/jmalm79/hack-a-mole"}
        hashtags={["hashtag1", "hashtag2"]}
      >
        <TwitterIcon size={32} round />
        Twitter share
      </TwitterShareButton>
    </div>
  );
}

export default Share;