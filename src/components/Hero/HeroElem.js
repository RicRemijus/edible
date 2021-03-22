import styled from 'styled-components';
import ImgBg from '../../images/spag.png';

export const HeroContainer = styled.div`
background : linear-gradient(to right,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.1)
    ),
    url(${ImgBg});
    height:100vh;
    background-position :center;
    background-size : cover;

`;
export const HeroContent = styled.div`
width:100vw;
max-height : 100%;
height : calc(100vh -80px);
padding: 0rem calc((100vw -1330px)/2);
`;

export const HeroItems = styled.div`
color: #fff;
width: 650px;
height:100vh;
max-height: 100%;
padding: 0 2rem;
line-height: 1;
font-weight: bold;
text-transform: uppercase;
display:flex;
align-items: flex-start;
flex-direction: column;
justify-content: center;

@media screen and (max-width:650px){
    width: 100%;
}
`;

export const HeroH1 = styled.h1`
letter-spacing : 3px;
margin-bottom: 1rem;
box-shadow: 3px 5px #e9ba23;
font-size: clamp(2.5rem, 10vw, 5rem);
`;

export const HeroP = styled.p`
margin-bottom:2rem;
font-size: clamp(2rem, 2.5vw, 3rem);
`;

export const HeroBtn = styled.button`
color:#fff;
border: none;
font-size:1.4rem;
padding: 1rem 4rem;
background: #e31837;
transition: 0.2s ease-out;

&:hover{
    color:#000;
    cursor: pointer;
    background:#ffc500;
    transition: 0.2s ease-out;
}
`;

