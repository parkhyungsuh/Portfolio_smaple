import React from 'react';
import styled from 'styled-components';
import logoImg from '../asset/LogoFooter.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import FacebookIcon from '@material-ui/icons/Facebook';



const FooterContainer = styled.div`
    max-width:1440px;
    margin:0 auto;
    background-color: #1d1f24;
    height:160px;
    display:flex;
`;
const Copyright = styled.div`
    margin-left: 35px;
    color: #eee;
    font-size:12px;
    padding-top:40px
`;
const CopyrightLogo = styled.div`
`;
const CopyrightText = styled.p`
`;
const Sitemap = styled.div`
    display:flex;
    flex-flow: row wrap;
    padding: 50px 0 40px 80px;
`;
const SitemapItem = styled.div`
    width:200px;
    font-size:13px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #fff;
`;
const Community = styled.div`
    width: 300px;
    height: 70px;
    margin-left:auto;
    margin-right:40px;
`;
const CommunitySocial = styled.div`
    margin-top:50px;
    display:flex;
    flex-flow: row-reverse wrap;
    color: #ddd;
`;
const CommunitySocialTitle = styled.h2`
    display:inline-block;
    font-size: 15px;
`;
const CommunitySubscribe = styled.div`
    margin-top: 18px;
    width:100%;
    height:35px;
    display:flex;
`;
const CommunitySubscribeInput = styled.input`
    width:180px;
    height:100%;
    border:0;
    padding-left:15px;
`;
const CommunitySubscribeBotton = styled.button`
    width:120px;
    height:100%;
    color:#fff;
    background-color:#ff565c;
    border: 0;
`;



const Footer = (props) => {
    return (
        <FooterContainer>
            <Copyright>
                <CopyrightLogo>
                    <img src={logoImg} alt="logo" />
                </CopyrightLogo>
                <CopyrightText>
                    2018 Deck
                    <br />
                    Component base UI kit
                </CopyrightText>
            </Copyright>
            <Sitemap>
                {props.category.map( cat => (
                    <SitemapItem
                        key={cat}
                    >
                        {cat}
                    </SitemapItem>
                    ))}
            </Sitemap>
            <Community>
                <CommunitySocial>
                    <InstagramIcon />
                    <FacebookIcon />
                    <PinterestIcon />
                    <TwitterIcon />
                    <CommunitySocialTitle>Follow Us :</CommunitySocialTitle>
                </CommunitySocial>
                <CommunitySubscribe>
                    <CommunitySubscribeInput  type="text" placeholder="Your E-mail"/>
                    <CommunitySubscribeBotton>SUBSCRIBE</CommunitySubscribeBotton>
                </CommunitySubscribe>
            </Community>
        </FooterContainer>
    )
}

export default Footer; 