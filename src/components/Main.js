import React from 'react';
import styled from 'styled-components';
import sampleImg01 from '../asset/main/sampleImg_01.png';
import sampleImg02 from '../asset/main/sampleImg_02.png';
import sampleImg03 from '../asset/main/sampleImg_03.png';
import sampleImg04 from '../asset/main/sampleImg_04.png';
import sampleImg05 from '../asset/main/sampleImg_05.png';
import sampleImg06 from '../asset/main/sampleImg_06.png';
import sampleImg07 from '../asset/main/sampleImg_07.png';
import sampleImg08 from '../asset/main/sampleImg_08.png';
import sampleImg09 from '../asset/main/sampleImg_09.png';

const MainContainer = styled.section`
    width: 1440px;
    margin: 40px auto 0;
    display:flex;
    flex-flow: column wrap;
    height:2200px;
    @media (max-width: 768px) and (min-width:480px){
        width:768px;
        height:3300px;
        }
    @media (max-width: 480px){
        max-width:480px;
        width:100%;
        height:6000px;
    }
`;
const Article = styled.article`
    width:430px;
    margin: 0 15px;
    @media (max-width: 768px) and (min-width:480px){
       max-width: 430px;
       width:50%;
       margin: 0;
       padding: 0 15px;
    }
    @media (max-width: 480px){
        width:100%;
        margin: 0 auto;
        padding:0 5px;;
    }
`;
const ArticleThumbnail = styled.figure`
    margin:0;
    position:relative;
`;
const ArticleThumbImg = styled.img`
    width:100%;
`;
const ArticleCategory = styled.div`
    position: absolute;
    background-color: #ff565c;
    color: #fff;
    font-weight: 600;
    padding: 15px 25px;
    bottom: 25px;
    left: -5px;
`;
const ArticleTitle = styled.h3`
    margin: 30px 0 0 0;
    font-size: 2rem;
`;
const ArticleSubtitle = styled.p`
    margin: 20px 0 65px 0;
    font-size: 1.5rem
`;
const data = [
    {
        idx: 1,
        imgUrl: sampleImg01,
        category: 'TECHNOLOGY',
        title: 'Using Banners Will Increase Trade Show Traffic',
        subTitle: 'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.'
    },
    {
        idx: 2,
        imgUrl: sampleImg02,
        category: 'TECHNOLOGY',
        title: '15 Tips To Increase Your Adwords Profits',
        subTitle: 'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.'
    },
    {
        idx: 3,
        imgUrl: sampleImg03,
        category: 'ENTERTAINMENT',
        title: '6 Powerful Tips For Creating Testimonials That Sell Your Products Fast',
        subTitle: 'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.'
    },
    {
        idx: 4,
        imgUrl: sampleImg04,
        category: 'TECHNOLOGY',
        title: 'Search Engine Optimization And Advertising',
        subTitle: 'There is a lot of excit              ing stuff going on in the stars above us that makes astronomy so much fun.'
    },
    {
        idx: 5,
        imgUrl: sampleImg05,
        category: 'ENTERTAINMENT',
        title: '15 Tips To Increase Your Adwords Profits',
        subTitle: 'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.'
    },
    {
        idx: 6,
        imgUrl: sampleImg06,
        category: 'FINANCE',
        title: 'How to Write A Good Headline For Facebook Ads',
        subTitle: 'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.'
    },
    {
        idx: 7,
        imgUrl: sampleImg07,
        category: 'FINANCE',
        title: 'How to Write A Good Headline For Facebook Ads',
        subTitle: 'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.'
    },
    {
        idx: 8,
        imgUrl: sampleImg08,
        category: 'TECHNOLOGY',
        title: 'Using Banners Will Increase Trade Show Traffic',
        subTitle: 'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.'
    },
    {
        idx: 9,
        imgUrl: sampleImg09,
        category: 'TECHNOLOGY',
        title: 'Search Engine Optimization And Advertising',
        subTitle: 'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.'
    }
]
const Main = () => {
    return (
        <MainContainer>
            {data.map( data => (
                <Article key={data.idx}>
                    <ArticleThumbnail>
                        <ArticleThumbImg src={data.imgUrl} alt="thumbnail" />
                        <ArticleCategory>
                            {data.category}
                        </ArticleCategory>
                    </ArticleThumbnail>
                    <ArticleTitle>
                        {data.title}
                    </ArticleTitle>
                    <ArticleSubtitle>
                        {data.subTitle}
                    </ArticleSubtitle>
                </Article>
            ))}
        </MainContainer>
    )
}  

export default Main;
