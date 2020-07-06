import React from 'react';
import styled from 'styled-components';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import replyImg from '../asset/post/PostThumbAuthor.png';

const CommentsContainer = styled.div`
    width: 660px;
    margin: 200px auto 0;
    .header {
        font-size:1.8rem;
    }
    .count {
        color:#fe777c;
    }
`;

const Commentbox = styled.div`
    position:relative;
    padding-left: 60px;
    margin-bottom: 100px;
    .author {
        display:flex;
        height:45px;
        font-size:1.3rem;
    }
    .thumb > img {
        width:45px;
        height:45px;
        border-radius:30px;
    }
    .thumb {
        position:absolute;
        left:0;
        overflow:hidden;
    }
    .time {
        color:#aaa;
        font-size:1.1rem;
        margin-left:10px;
    }
    .content {
        font-size:1.3rem;
        line-height:1.8rem;
        color:#777;
    }
    .replyButton {
        background: none;
        border:none;
        color: #777;
    }

`;

const Commnet = props => {
    return (
        <Commentbox>
            <div className="author">
                <div className="thumb"><img src={replyImg} alt="reply_thumbnail" /></div>
                <div className="name">{props.name}</div>
                <div className="time"><AccessTimeIcon /></div>
                <div className="time">
                    <time>18 February, 2018 14:27</time>
                </div>
            </div>
            <div className="content">
                <p>
                    {props.children}
                </p>
            </div>
            <button className="replyButton">
                <QuestionAnswerIcon />REPLY
            </button>
        </Commentbox>
    )
}
const Comments = () => {
    return (
        <CommentsContainer>
            <h4 className="header">Comments<span className="count">(2)</span></h4>
            <Commnet thumbnail={replyImg} name="Dorothy Tarwater">
            The universe is a constantly changing and moving. Some would say it’s a “living” thing because you never know what you are going to see on any given night of stargazing. It really is a splendid thing.
            </Commnet>
        </CommentsContainer>
    )
}
export default Comments;