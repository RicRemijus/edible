import styled from 'styled-components';
import FeaturePic from '../../images/sauce.jpg';

export const FeatureContainer = styled.div`
color:#fff;
height:100vh;
display:flex;
padding:0 1rem;
max-height:500px;
text-align:center;
align-items:center;
flex-direction:column;
background-size:cover;
justify-content:center;
background-position:center;
background:linear-gradient(to right, 
    rgba(0,0,0,0.7),
    rgba(0,0,0,0.1)),
url(${FeaturePic});

h1{
    font-size:clamp(3rem, 5vw,5rem);
};

p{
    margin-bottom:1rem;
    font-size: clamp(1rem, 3vw, 2rem);
}
`;

export const FeatureButton = styled.button`
color:#000;
border:none;
font-size:1.4rem;
background:#ffc500;
padding:0.6rem 3rem;
transition:0.2s ease-out;

&:hover{
    color:#fff;
    cursor:pointer;
    background:#e31837;
    transition:0.2s ease-out;
}
`;