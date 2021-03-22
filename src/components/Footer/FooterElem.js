import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const FooterContainer = styled.footer`
background: green;
`;

export const FooterWrap = styled.div`
display:flex;
margin:0 auto;
max-width:1300px;
padding:16px 24px;
align-items:center;
flex-direction:column;
justify-content:center;
`;

export const SocialMedia = styled.section`
width:100%;
max-width:1300px;
`;

export const SocialMediaWrap = styled.div`
display:flex;
max-width:1100px;
align-items:center;
margin:16px auto 0 auto;
justify-content:space-between;

@media screen and(max-width:820px){
    flex-direction:column;
}
`;

export const SocialLogo = styled(Link)`
color:#fff;
display:flex;
cursor:pointer;
font-weight:bold;
font-size:1.5rem;
align-items:center;
margin-bottom:16px;
justify-self:start;
text-decoration:none;
`;

export const SocialIcons = styled.div`
width:240px;
display:flex;
align-items:center;
justify-content:space-between;
`;

export const SocialIconLink = styled.a`
color:#fff;
font-size:24px;
`;