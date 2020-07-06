import React from 'react';
import Comments from './Commnets';
import styled from 'styled-components';
import titleBackgroundImg from '../asset/post/PostTitleBackground.png';
import authorImg from '../asset/post/PostThumbAuthor.png';
import post2Img from '../asset/post/postlayout2background.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import FacebookIcon from '@material-ui/icons/Facebook';

const PostSection = styled.article`
    width: 1440px;
    posistion:relative;
    margin:0 auto;
`;
const TitleContainer = styled.div.attrs(props =>({
    background:titleBackgroundImg
}))`
    width: 100%;
    height: 650px;
    background: url(${props =>props.background});
    background-size: cover;
    position:relative;
    text-align: center;
    padding-top: 185px;
    .category {
        margin: 0 auto;
        color:#999;
        font-size:1rem;
    }
    .title {
        width:850px;
        margin: 50px auto 0;
        color: #fff;
        font-size:3rem
    }
`;
const ContentContainer = styled.div`
    width: 100%;
    position:relative;
`;
const Sns = styled.div`
    position:absolute;
    width:30px;
    top:0;
    left:-150px;
    color: #e6e6e6
`;
const PostLayout1 = styled.div`
    width:700px;
    margin:100px auto 0;
    position:relative;
    line-height: 1.8rem;
    & > .title {
        font-size:1.4rem;
        color:#111;
    }
    & > .content {
        font-size:1.2rem;
        color: #777;
    }
`;
const SubContent = styled.div`
    position:relative;
    border-top: 1px solid #eee;
    border-bottom:1px solid #eee;
    padding:40px 50px;
    .subContentBox {
        position:relative;
    }
    .numbering {
        position:absolute;
        top:0;
        left:-50px;
        color:#ff565c;
        width: 35px;
        height: 35px;
        border: 3px solid #ff565c;
        border-radius: 20px;
        text-align: center;
        font-weight:600;
    }
    .title {
        font-size:1.4rem
        color:#111;
    }
    .content {
        font-size:1.2rem;
        color: #777;
    }
`;
const PostLayout2 = styled.div`
    width:1130px;
    margin: 0 auto;
    position:relative;
    color: #fff;
    .imgBox {
        width: 100%;
        height: 560px;
        background: url(${post2Img});
        background-size: cover;
    }
    .modalBox {
        position:absolute;
        top:0;
        width: 100%;
        height: 560px;
        background-color: rgba(0,0,0,0.5);
        text-align:center;
    }
    .title {
        margin: 120px auto 0;
        font-size: 2rem;
    }
    .info {
        margin: 20px auto 0;
        font-size:1.1rem;
        color:#bbb;
    }
    .box {
        width: 420px;
        height:80px;
    }
    .inputbox {
        padding:30px;
        font-size:1.3rem;
        color:#fff;
        border:1px solid #fff;
        background:none;
        display:block;
        margin: 40px auto 0;
    }
    .inputbox::placeholder {
        color: #fff;
        opacity: 1; 
    }
    .button {
        margin: 20px auto 0;
        background: #ff565c;
        text-align: center;
        padding:30px;
        color:#fff;
    }
    .caption {
        font-size:0.8rem;
        color:#777;
    }
`;
const PostLayout3 = styled.div`
    margin:100px auto 0;
    width: 850px;
    display:flex;
    flex-flow: row nowrap;
    line-height: 1.8rem;
    .content {
        width:530px;
        color: #777;
    }
    .authorBox {
        width:280px;
        margin-left:auto;
    }
    .authorBox > p {
        font-size : 1.5rem;
    }

`;
const OtherPostConatiner = styled.div``;
const OtherPost = styled.div`
`;
const AuthorStyle = styled.div`
    display:flex;
    flex-flow: row nowrap;
    width:${props => props.width || '200px'};
    margin:30px auto 0;
    text-align: left;
    color:#fff;
    & p {
        margin:0;
    }
    .thumb{
        width:60px;
        height:60px;
        border-radius:30px;
        }
    .textBox{
        margin-left:15px;
        margin-top:5px;
    }
    .title {
        color: #a5a5a7;
        font-size:1.1rem;
        margin:0;
    }
    .name {
        color: ${props =>props.color || "#000"};
        font-size:1rem;
    }
`;
const Author = (props) => {
    return (
        <AuthorStyle color={props.color}>
            <img className="thumb" src={props.thumbnail} alt="author_thumbnail" />
            <div className="textBox">
                <p className="title">Author</p>
                <p className="name">{props.name}</p>
            </div>
        </AuthorStyle>
    )};

const Post = () => {
    return (
        <PostSection>
            <TitleContainer>
                <h3 className="category">Technology</h3>
                <h4 className="title">The beauty of <br />astronomy is that anybody can do it</h4>
                <Author thumbnail={authorImg} name="Kinga Cichewicz" color="#fff"/>
            </TitleContainer>
            <ContentContainer>
                <PostLayout1>
                <Sns>
                    <FacebookIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                    <PinterestIcon />
                </Sns>
                <p className="title">
                    The universe is a constantly changing and moving. Some would say it’s a “living” thing because you never know what you are going to see on any given night of stargazing.
                </p>
                <p className="content">
                There is a lot of exciting stuff going on in the stars above us that makess astronomy so much fun. The universe is constantly changing and moving. Some would say it’s a “living” thing because you never know what you are going to see on any given night of stargazing.
<br /><br />
Of the many celestial phenomenons, there is probably none as exciting as when you see your first asteroid on the move in the heavens. To call asteroids the “rock stars” of astronomy is both a bad joke and an accurate depiction of how astronomy fans view them. Unlike suns, planets, and moons, asteroids are on the move, ever changing and, if they appear in the night sky, they are exciting and dynamic.
                </p>
                    <SubContent>
                        <div className="subContentBox">
                            <div className="numbering">1</div>
                            <p className="title">Unmatched Toner Cartridge Quality</p>
                            <p className="content">There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun. The universe is constantly changing and moving. Some would say it’s a “living” thing because you never know what you are going to see on any given night of stargazing.</p>
                        </div>
                        <div className="subContentBox">
                            <div className="numbering">2</div>
                            <p className="title">Unmatched Toner Cartridge Quality</p>
                            <p className="content">There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun. The universe is constantly changing and moving. Some would say it’s a “living” thing because you never know what you are going to see on any given night of stargazing.</p>
                        </div>
                    </SubContent>
                    <p className="content">
                        There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun. The universe is constantly changing and moving. Some would say it’s a “living” thing because you never know what you are going to see on any given night of stargazing. 
                    </p>
                    <p className="title">
                        Unmatched Toner Cartridge Quality
                    </p>
                    <p className="content">
                    There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun. The universe is constantly changing and moving. Some would say it’s a “living” thing because you never know what you are going to see on any given night of stargazing.
                    <br /><br />
Of the many celestial phenomenons, there is probably none as exciting as when you see your first asteroid on the move in the heavens. To call asteroids the “rock stars” of astronomy is both a bad joke and an accurate depiction of how astronomy fans view them. Unlike suns, planets, and moons, asteroids are on the move, ever changing and, if they appear in the night sky, they are exciting and dynamic.
                    </p>
                </PostLayout1>
                <PostLayout2>
                    <div className="imgBox">
                    </div>
                    <div className="modalBox">
                        <h5 className="title">LET'S STAY IN TOUCH</h5>
                        <p className="info">All our latest content for email marketing pros delivered to your inbox a few times a month</p>
                        <input className="box inputbox" placeholder="YOUR E-MAIL" type="text" />
                        <button className="box button">SEND</button>
                    </div>
                    <figcaption className="caption">There is a lot of exciting stuff going on in the stars</figcaption>
                </PostLayout2>
                <PostLayout3>
                    <div className="content">
                        <p>
                        There is a lot of exciting stuff going on in the stars above us that makess astronomy so much fun. The universe is constantly changing and moving. Some would say it’s a “living” thing because you never know what you are going to see on any given night of stargazing.
                            <br /> <br />
Of the many celestial phenomenons, there is probably none as exciting as when you see your first asteroid on the move in the heavens. To call asteroids the “rock stars” of astronomy is both a bad joke and an accurate depiction of how astronomy fans view them. Unlike suns, planets, and moons, asteroids are on the move, ever changing and, if they appear in the night sky, they are exciting and dynamic.
                        </p>
                    </div>
                    <div className="authorBox">
                        <p>
                        To call asteroids the “rock stars” of astronomy is simultaneously a bad joke but an accurate depiction of how astronomy fans view them.
                        </p>
                        <Author thumbnail={authorImg} name="Kinga Cichewicz" width="300px"/>
                    </div>
                </PostLayout3>
            </ContentContainer>
            <Comments />
            <OtherPostConatiner>
                <OtherPost>

                </OtherPost>
            </OtherPostConatiner>
        </PostSection>
    )
}

export default Post;