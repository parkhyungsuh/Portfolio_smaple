import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import styled, {createGlobalStyle} from 'styled-components';
import logoImg from '../asset/Logo.png';

const Globalstyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }
    ul,li {
        margin:0;
        paading:0;
        list-style:none;
    }
`;

const CategoryItem = styled.li`
    color: #bbb;
    cursor: pointer;
    &:hover {
        color: #333;
    }
    &.active {
        color: #333;
    }
    &+& {
        margin-left: 30px;
    }
`;


const HaederContain = styled.div`
    display: flex;
    max-width: 1366px;
    margin: 0 auto;
    background-color: #fff;
    padding-top: 30px;
    padding-bottom:30px;
    @media (max-width: 768px) {
        justify-content: space-between;
      }
    `;

const CategoryList = styled.ul`
    display:flex;
`;

const Logo = styled.div`
    cursor: pointer;
    width:70px;
    margin-left:20px;
    `;

const Navigation = styled.div`
    width:100%;
    max-width:1263px;
    @media (max-width: 768px) {
        display:none;
      }
`;

const category = [
    'TECHNOLOGY',
    'IDEAS',
    'LEADERSHIP',
    'VIDEO',
    'NEWS',
    'FINANCE',
    'ENTERTAINMENT'
]

const Header = () => {
    const [ selected , setSelected ] = useState('');

    return (
        <HaederContain as="header">
            <Globalstyle />
            <Logo onClick={() => setSelected('')}><img src={logoImg} alt='logo' /></Logo>
            <Navigation>
                <CategoryList>
                    {category.map( cat => (
                        <CategoryItem 
                            key={cat}
                            onClick={()=> setSelected(cat)}
                            className={cat === selected && 'active'}
                        >
                            {cat}
                        </CategoryItem>
                        ))}
                </CategoryList>
            </Navigation>
            <div style={{marginRight:'30px'}}>
                <MenuIcon />
            </div>
        </HaederContain>
    )
}

export default Header;