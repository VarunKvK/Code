import styled from 'styled-components';

export const WebsitePage = styled.body`
    padding:0;
    margin:0;
    box-sizing:border-box;
    min-height:100vh;
    background:#EDFCFF;
    border:1px solid black;

    @media screen and (max-width:960px){
        overflow-x: hidden;
    }
`

export const Navcontainer = styled.div`
    height:5rem;
    width:100%;
    border-bottom:1px solid black;
`

export const Nav = styled.nav`
    cursor:pointer;
`
export const Logoname = styled.h1`
    font-size:2rem;
    position:relative;
    float:left;
    margin-left:43px;
    color:#006096;
    margin-top:1rem;
    font-family: 'Allerta', sans-serif;
`
export const Navmenu=styled.ul`
    display:flex;
    list-style:none;
    position:relative;
    width:30rem;
    left:2rem;
    top:1.5rem;
    z-index:3;
    display:flex;
    align-items: center;

    @media screen and (max-width:960px){
        margin:0;
        padding:0;
        top:0;
        left:100%;
        box-sizing:border-box;
        display:block;
        position:absolute;
        background:#72CCFF;
        height:100%;
        width:100%;
}
` 
export const NavOption=styled.li`
    font-size:1rem;
    margin-right:4rem;
    @media screen and (max-width:960px){
        font-size:3rem;
        margin-top:2rem;
        margin-right:0rem;
        color:#fff;
        position:relative;
        top:3rem;
        text-align:right;
        display:flex;
        justify-content:center;
        &.active{
            width:100%;
            height:5rem;
            background:#fff;
        }

}
`
export const Navlink=styled.a`
    font-family: 'Allerta', sans-serif;
    color:#006096;
    &.active{
        padding:1rem 2rem;
        background:#006096;
        color:#fff;
    }
    @media screen and (max-width:960px){
        &.active{
            padding:0rem 0rem;
            background:#fff;
            color:#006096;
        }    
    }

    
`

export const PetPaws = styled.span`
color:#FFB648;
`
export const Menu = styled.div`
font-size:3rem;
color:#006096;
position:absolute;
right:0rem;
top:0;
display:flex;
justify-content:center;
align-items:center;
width:4rem;
cursor:pointer;
height:5rem;
border-left:1px solid #000;

@media screen and (min-width:960px){
        display:none;
}
`
