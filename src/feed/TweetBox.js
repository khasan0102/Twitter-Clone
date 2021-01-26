import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import './tweetBox.css';
function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu-K90yT3aVmevS-F5iodqbhyqfVIJlRA9GYFZ_Z=s83-c-mo" />
                    <input placeholder="What's happening.." />
                </div>
                <input placeholder="Enter image URL" type="url" required className="tweetBox_inputImage" />
                <Button className="tweetBox_btn">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
