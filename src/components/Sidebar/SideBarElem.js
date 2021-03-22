import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

export const SideBarcontainer = styled.aside`
top:0;
display: grid;
z-index:999;
width: 350px;
height: 100%;
position: fixed;
align-items: center;
background:#ffc500;
transition:0.3s ease-in-out;
right:${ ({isOpen})=> (isOpen ? '0' : '-1000px') };

@media screen and (max-width:400px){
    width:100%;
}
`;

export const CloseIcon = styled(FaTimes)`
color:#000;
`;

export const Icon = styled.div`
top:1.2rem;
right:1.5rem;
outline: none;
font-size: 2rem;
cursor: pointer;
position: absolute;
border: transparent;
background:transparent;
`;

export const SideBarMenu = styled.div`
display:grid;
text-align: center;
grid-template-columns : 1fr;
grid-template-rows: repeat(3, 80px);

@media screen and (max-width:480px){
    grid-template-rows:repeat(3, 60px);
}
`;

export const SideBarLink = styled(Link)`
color: #000;
display: flex;
cursor: pointer;
list-style: none;
font-size: 1.5rem;
align-items: center;
text-decoration: none;
justify-content: center;
transition: 0.2s ease-in-out;

&:hover{
    color:#e31837;
    transition: 0.2s ease-in-out;
}
`;

export const SideBtnWrap = styled.div`
display: flex;
justify-content: center;
`;

export const SideBarRout = styled(Link)`
color: #fff;
border:none;
outline: none;
font-size:16px
cursor: pointer;
padding: 16px 64px;
white-space: nowrap;
background: #e31837;
text-decoration: none;
transition: 0.2s ease-in-out;

&:hover{
    color:#010606;
    background:#fff;
    transition: 0.2s ease-in-out;
}
`;
