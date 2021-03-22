import styled from 'styled-components';


export const ProductsContainer = styled.div`
color:#fff;
width:100vw;
min-height:100vh;
background : #150f0f;
padding: 5rem calc((100vw-1300px)/2);
`;

export const ProductWrapper = styled.div`
margin:0 auto;
display: flex;
flex-wrap: wrap;
justify-content: center;
`;

export const ProductCard = styled.div`
width:300px;
margin:0 2rem;
line-height: 2;
`;

export const ProductImg = styled.img`
height:300px;
max-width:100%;
min-width:300px;
box-shadow: 8px 8px #fcd500;
`;

export const ProductsHeading = styled.h1`
text-align : center;
margin-bootom : 5rem;
`;

export const ProductTitle = styled.h2`
font-weight:400;
font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
display: flex;
padding: 2rem;
text-align: center;
align-items: center;
flex-direction: column;
justify-content: center;
`;

export const ProductDsc = styled.p`
margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
font-size: 2rem;
margin-bottom: 1rem;
`;

export const ProductButton = styled.button`
color:#fff;
border:none;
font-size:1rem;
padding:1rem 4rem;
background:#e31837;
transition: 0.2s ease-out;

&:hover{
    color:#000;
    cursor:pointer;
    background: #ffc500;
    transition: 0.2s ease-out;
}
`;