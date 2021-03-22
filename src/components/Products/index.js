import React from 'react'
import { ProductsContainer, ProductsHeading,
         ProductWrapper, ProductCard,
          ProductImg, ProductInfo,ProductTitle,
           ProductDsc, ProductPrice, ProductButton } from './ProdElem';

const Products = ({heading, Data}) => {
    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                {Data.map((product, index)=>{
                    return(
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt}/>
                         <ProductInfo>
                             <ProductTitle>{product.name}</ProductTitle>
                              <ProductDsc>{product.desc}</ProductDsc> 
                              <ProductPrice>{product.price}</ProductPrice>
                              <ProductButton>{product.button}</ProductButton>

                         </ProductInfo>

                        </ProductCard>
                    )
                })}
            </ProductWrapper>
        </ProductsContainer>
    )
}

export default Products;
