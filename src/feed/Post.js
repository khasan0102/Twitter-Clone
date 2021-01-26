import React from 'react';
import { Avatar, Button } from '@material-ui/core';
import './Post.css';
import { ChatBubbleOutline, FavoriteBorder, Repeat, VerifiedUser, Publish  } from '@material-ui/icons';
function Post({
    displayName, userName, verified, text, image, avatar
}) {
    return (
        <div className="Post">
            <div className="post-Avatar">
                <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu-K90yT3aVmevS-F5iodqbhyqfVIJlRA9GYFZ_Z=s83-c-mo" />
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post-header-text">
                        <h3>Khasan{" "}<span> <VerifiedUser className="post_badge"/>@khasan</span></h3>
                    </div>
                    <div className="post_headerDecription">
                        <p>I challenge you build a Twitter clone with Reactjs</p>
                    </div>
                </div>
                <img src="https://im0-tub-com.yandex.net/i?id=e01f225da8215697cf1766bae0a12803&n=13" alt="Gif" />
                <div className="post_footer">
                    <ChatBubbleOutline  fontSize="small"/>
                    <Repeat  fontSize="small"/>
                    <FavoriteBorder fontSize="small" />
                    <Publish fontSize="small" />
                </div>
            </div>

        </div>
    )
}

export default Post
