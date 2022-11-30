import styled from "styled-components"
import Image from "next/image"
import logo from "./logo.png"
import { Icon } from '@iconify/react';



export default function Header() {
    return (
        <StyledHeader>
            <Image src={logo} width="150" height="100" alt="the main logo" />
            
            <EveryLink href=""><em>Movies</em></EveryLink>            
            <EveryLink href=""><em>Series</em></EveryLink>
            
            <Search htmlFor="search"><Icon icon="ic:baseline-search" width="35" height="35" /></Search>
            <Input type="search" id="search" placeholder="Search..." />

            <EveryLink href=""><Icon icon="material-symbols:login" width="25" height="25" /></EveryLink>
            <EveryLink href=""><Icon icon="mdi:register" width="35" height="35" /></EveryLink>
        </StyledHeader>
    )

}


// header element
const StyledHeader = styled.header`
    width: 100vw;
    height: 120px;
    background-color: #000000;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    text-align: center;
    border-bottom: 5px solid #ffffff;

    @media screen and (max-width: 600px){
        font-size: 13px;
    }
    
`

// Link element
const EveryLink = styled.a`
    text-decoration: none;
    color: #ffffff;
`

// input element
const Input = styled.input`
    border-radius: 15px;
    height: 40px;
    width: 200px;
    background-color: #9A9595;
    color: #ffffff;
    padding-left: 40px;

    @media screen and (max-width: 600px){
        width: 170px;
    }
`

// search Icon
const Search = styled.label`
    position: absolute;
    left: 795px;
    top: 40px;

    @media screen and (max-width: 600px){
        left: 315px;
    }
`