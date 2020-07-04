import React from 'react';
import styled from 'styled-components';
import similarThumb01 from '../asset/vediogallerry/Similar_Video_01.png';
import similarThumb02 from '../asset/vediogallerry/Similar_Video_02.png';
import similarThumb03 from '../asset/vediogallerry/Similar_Video_03.png';
import similarThumb04 from '../asset/vediogallerry/Similar_Video_04.png';
import backGround from '../asset/vediogallerry/video_backgorund.png';



const GalleryContainer = styled.section`
    width: 100%;
    position:relative;
    overflow:hidden;
    padding-bottom:30px;
    background-image:url('${props => props.back||'none'}');
    background-size:cover;
    & > video {
        width:100%;
        position:absolute;
        top:0;
        left:0;
        z-index:-3;
    }
`;

const ContainerLayout = styled.div`
    width: 1130px;
    margin: 0 auto;
    @media (max-width: 768px) {
        width: 95%;
    }
    
`;
const VideoContainer = styled(ContainerLayout)`
    padding-top: 120px;
    @media (max-wdith: 768px) and (min-width: 480px){
        padding-top:80px;
    }
    @media (max-width: 480px){
        padding-top:0;
    }
    & > video {
        width:100%;
        height:100%;
        overflow:hidden;
    }
`;
const SimilarVideosContainer = styled(ContainerLayout)`
    margin-top:30px;
    height: 290px;
    background-color: #fff;
    padding-top:20px;
    & .itemBox{
        overflow-x:scroll;
        display:flex;
        flex-flow: row nowrap;
    }
    & > h3 {
        margin-left 25px;
        margin-top:0px;
    }
`;
const SimilarVideo = styled.div`
    width:250px;
    margin-left: 25px;
    & .thumbnail {
        width:250px;
        height:120px;
        overflow:hidden;
    }
    & .thumbnail > img {
        position:relative;
        width:100%;
    }
    & .title {
        font-size: 1.2rem;
    }
`;
const data = [
    {
        idx: 1,
        title: 'Compare Prices: Find The Best Computer Accessory',
        imgUrl: similarThumb01
    },
    {
        idx: 2,
        title: 'Compare Prices: Find The Best Computer Accessory',
        imgUrl: similarThumb02
    },
    {
        idx: 3,
        title: 'Compare Prices: Find The Best Computer Accessory',
        imgUrl: similarThumb03
    },
    {
        idx: 4,
        title: 'Compare Prices: Find The Best Computer Accessory',
        imgUrl: similarThumb04
    }
]


const VedioGallery = () => {
    return (
        <GalleryContainer back={backGround}>
            <VideoContainer>
                <video controls mediaGroup="video">
                    <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4" />
                </video>
            </VideoContainer>
            <SimilarVideosContainer>
                <h3>SIMILAR VIDEOS</h3>
                <div className="itemBox">
                    {data.map( data => 
                        <SimilarVideo key={data.idx}>
                            <div className="thumbnail">
                                <img src={data.imgUrl} alt="similar_thumbnail" />
                            </div>
                            <h4 className="title">{data.title}</h4>
                        </SimilarVideo>
                    )}
                </div>
            </SimilarVideosContainer>
        </GalleryContainer>
    )
}

export default VedioGallery;