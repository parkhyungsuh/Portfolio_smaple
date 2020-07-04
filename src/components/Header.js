import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import styled, {createGlobalStyle} from 'styled-components';
import logoImg from '../asset/Logo.png';
import {NavLink} from 'react-router-dom';


const Globalstyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body,h1,h2 {
        margin: 0;
        padding: 0;
    }

    body{
        width: 100%;
        min-width:1440px;
    }
    ul,li {
        margin:0;
        paading:0;
        list-style:none;
    }
    a {
        color:#fff;
        text-decoration:none;
        outline:none;
    }
    a:hover, a:active {
        text-decoration: none;
        color:#fff;
    }
    @media (max-width: 768px) and (min-width:480px){
        body {
            min-width: 768px;
        }
    }
    @media (max-width: 480px) {
        body {
            min-width:auto;
            max-width:768px;
        }
    }
`;
const HaederContain = styled.header`
    width: 100%;
    border-bottom:1px solid #ebebeb;
    margin-bottom: 40px;
    .HeaderContainbox {
        display: flex;
        width: 1440px;
        margin: 0 auto;
        background-color: #fff;
        padding-top: 30px;
        padding-bottom:30px;
        @media (max-width: 768px) and (min-width:480px) {
            width:768px;
          }
        @media (max-width: 480px) {
            max-width:480px;
            width:100%;
        }
    }
    @media (max-width: 768px) {
        justify-content: space-between;
      }
    `;
const CategoryItem = styled.li`
    color: #bbb;
    cursor: pointer;
    &:hover {
        color: #333;
    }
    & > a {
        color:#bbb;
    }
    & > a:hover, & > a:active {
        color:#333;
    }
    &.active {
        color: #333;
    }
    &+& {
        margin-left: 30px;
    }
`;
const CategoryList = styled.ul`
    display:flex;
    margin-right:30px;
`;
const Logo = styled.div`
    cursor: pointer;
    width:70px;
    margin-left:20px;
    `;
const Navigation = styled.div`
    width:100%;
    max-width:1263px;
    overflow:hidden;
    margin-right:20px;
    @media (max-width: 768px) {
        display:none;
      }
`;
const Menu = styled.div`
      margin-left:auto;
      margin-right:20px;
`;

const Header = props => {
    const [ selected , setSelected ] = useState('');

    return (
        <HaederContain>
                <div className="HeaderContainbox">
                    <Globalstyle />
                    <NavLink to="/"><Logo onClick={() => setSelected('')}><img src={logoImg} alt='logo' /></Logo></NavLink>
                    <Navigation>
                        <CategoryList>
                            {props.category.map( cat => (
                                <CategoryItem 
                                    key={cat}
                                    onClick={()=> setSelected(cat)}
                                    className={cat === selected && 'active'}
                                >
                                    <NavLink to={cat}>{cat}</NavLink>
                                </CategoryItem>
                                ))}
                        </CategoryList>
                    </Navigation>
                    <Menu>
                        <MenuIcon />
                    </Menu>
                </div>
            </HaederContain>
    )
}

export default Header;