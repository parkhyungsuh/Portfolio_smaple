import React from 'react';
import styled from 'styled-components';
import mainImg from '../asset/leadership/leadership.png';

const LeadershipContainer = styled.section`
    width:1440px;
    margin: 0 auto;
    display:flex;
    flex-flow: row nowrap;
    @media (max-width:768px) {
        width:100%;
        display:block;
    }
`;
const MainImgContainer = styled.section`
    width:50%;
    height:100%;
    position:relative;
    overflow:hidden;
    border-bottom: 4px solid #ff565c;
    @media (max-width:768px) and (min-width:480px) {
        width:100%;
        height:640px;
    }
    @media (max-width:480px) {
        width:100%;
        height:440px;
    }
`;
const MainImgTypoBox = styled.div`
    position:absolute;
    bottom:40px;
    color:#fff;
    text-align:center;
    width:100%;
    .title {
        width: 600px;
        font-size: 2.2rem;
        margin:0 auto 30px;
        @media (max-width:480px) {
            width:300px;
            font-size:1.8rem;
        }
    }
    .content {
        font-size: 1.4rem;
        width: 400px;
        margin: 0 auto 40px;
        @media (max-width:480px) {
            width:300px;
            font-size:1.2rem;
        }
    }
    .botton {
        font-size: 1.2rem;
        background: none;
        font-weight: 600;
        border:none;
        color:#ff565c;
    }
`;
const LeadershipContent = styled.section`
    width: 50%;
    @media (max-width:768px) {
        width:100%;
        margin-bottom:100px;
    }
`;
const LeadershipItem = styled.article`
    margin-left:75px;
    position:relative;
    border-bottom: 1px solid #eee;
    margin-top: 70px;
    .category {
        font-size:1.1rem;
        color:#ff565c;
        position:absolute;
        height:100%;
        border-bottom: 2px solid #ff565c;
    }
    .title {
        padding-top:30px;
        font-size:2rem;
        color: #000;
        margin-top:0;
    }
    .content {
        font-size:1.2rem;
        color:#555;
    }
    @media (max-width:768px) and (min-width:480px) {
        width:600px;
    }
    @media (max-width:480px) {
        width:auto;
        margin-left:80px;
        margin-right:50px;
    }
`;

const data = [
    {
        idx:1,
        title:"Differentiate Yourself And Attract More Attention, Sales, And Profits",
        content:"There is no denying that the success of an advertisement lies mostly in the headline. The headline should catch the reader’s attention and makes him read the rest of the advertisement.",
        category:"Technology"

    },
    {
        idx:2,
        title:"Branding: Do You Know Who You Are?",
        content:"For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes, and seeing magnificent displays in the heavens. ",
        category:"Finance"
    },
    {
        idx:3,
        title:"Enhance Your Brand Potential With Giant Advertising Blimps",
        content:"Of all of the celestial bodies that capture our attention and fascination as astronomers, none has a greater influence on life on planet Earth than it’s own satellite, the moon.",
        category:"Entertainment"
    }
]

const Leadership = () => {
    return (
        <LeadershipContainer>
            <MainImgContainer>
                <img src={mainImg} alt="main_image" />
                <MainImgTypoBox>
                    <h3 className="title">This tie brand is bucking the retail <br />apocalypse with a massive store expansion</h3>
                    <p className="content">
                    There is a lot of exciting stuff going on in the stars above
                     us that makess astronomy so mu
                     ch fun. The universe is a constantly changing and moving.
                    </p>
                    <a href="/" className="botton">READ MORE</a>
                </MainImgTypoBox>
            </MainImgContainer>
            <LeadershipContent>
                {data.map( data => (
                    <LeadershipItem key={data.idx}>
                        <h2 className="category">{data.category}</h2>
                        <h3 className="title">{data.title}</h3>
                        <p className="content">{data.content}</p>
                    </LeadershipItem>
                ))}
            </LeadershipContent>
        </LeadershipContainer>
    )
}

export default Leadership;