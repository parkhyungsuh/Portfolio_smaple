import React from 'react';
import styled from 'styled-components';
import logoImg from '../asset/LogoFooter.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import FacebookIcon from '@material-ui/icons/Facebook';



const FooterContainer = styled.div`
    background-color: #1d1f24;
    .FooterContainerBox {
        max-width:1440px;
        margin:0 auto;
        min-height:160px;
        display:flex;
        flex-wrap: wrap;
    }
`;
const Copyright = styled.div`
    width:180px;
    margin-left: 35px;
    color: #eee;
    font-size:12px;
    padding-top:40px;
    @media (max-width:753px){
        margin-left:20px;
    }
`;
const CopyrightText = styled.p`
    font-size:10px
`;
const Sitemap = styled.div`
    width:800px;
    display:flex;
    flex-flow: row wrap;
    padding: 50px 0 40px 80px;
    @media (max-width: 1015px ){
        width:auto;
        max-width:600px;
    }
    @media (max-width:753px){
        padding-top:0;
        padding-left:20px;
        order:1;
    }
`;
const SitemapItem = styled.div`
    max-width:200px;
    width:25%;
    font-size:13px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #fff;
    @media (max-width: 1355px) {
        width:33%;
    }
`;
const Community = styled.div`
    min-width: 300px;
    margin-left:auto;
    margin-right:40px;
    @media (max-width: 1355px) {
        margin-right: auto;
        margin-left 40px;
        display:flex;
        flex-flow:row-reverse wrap;
        padding-bottom: 50px
    }
    @media (max-width:753px){
        margin-top:20px;
        margin-left:20px;
        margin-right:0;
    }
    @media (max-width:605px){
        width:100%;
        flex-flow: row wrap;
    }
`;
const CommunitySocial = styled.div`
    margin-top:50px;
    display:flex;
    flex-flow: row-reverse wrap;
    color: #ddd;
    @media (max-width: 1355px) {
        margin-top:0;
        flex-flow: row-reverse nowrap;
        padding-top: 5px;
        .MuiSvgIcon-root {
            margin-left:20px;
        }
    }
    @media (max-width:753px){
        padding-top: 10px;
        order:1;
    }
`;
const CommunitySocialTitle = styled.h2`
    display:inline-block;
    font-size: 15px;
`;
const CommunitySubscribe = styled.div`
    margin-top: 18px;
    width:300px;
    height:35px;
    display:flex;
    @media (max-width: 1355px) {
        margin-top:0;
        margin-right:30px;
    }
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
            <div className="FooterContainerBox">
                <Copyright>
                    <div>
                        <img src={logoImg} alt="logo" />
                    </div>
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
            </div>
        </FooterContainer>
    )
}
export default Footer; 
