import React, { useState } from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import { selectAllProducts } from "./productsSlice";
import styled from "styled-components";

const ProductsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 20px;
  min-height: calc(100vh - 190px);
  & > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;
const FilterSortStyled = styled.div`
  display: flex;
  align-items: center;
  select {
    margin: 10px 10px;
    padding: 6px 8px;
    font-size: 16px;
  }
`;

const ProductsList = ({ search }) => {
  const [select, setSelect] = useState('')
  const products = useSelector(selectAllProducts);
  const { status } = useSelector((state) => state.products);
  const { error } = useSelector((state) => state.products);
  
  const filterProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );

  let content;
  if (status === "idle") {
    content = <h3>Loading...</h3>;
  } else if (status === "succeeded") {
    content = filterProducts.map((product) => {
      return <Product key={product.id} product={product} />;
    });
    if(select === "asc") {
      content = filterProducts.sort((a,b)=>a.price-b.price).map((product) => {
      return <Product key={product.id} product={product} />;
      });    
    }
    else if(select === "desc") {
      content = filterProducts.sort((a,b)=>b.price-a.price).map((product) => {
      return <Product key={product.id} product={product} />;
      });    
    }
    else {
      content = filterProducts.map((product) => {
        return <Product key={product.id} product={product} />;
      });
    }
  } else if (status === "failed") {
    content = <p>{error}</p>;
  }

  const handleSelect = (e) => setSelect(e.target.value)
   

  return (
    <ProductsSection>

      <FilterSortStyled>
        <h1>Products </h1>
        <select  value={select} onChange={handleSelect}>
          <option>Sort by Price</option>
          <option value="asc">Sort Arzandan</option>
          <option value="desc">Sort Gymmatdan</option>
        </select>
      </FilterSortStyled>

      <div>{content}</div>
    </ProductsSection>
  )
}

export default ProductsList;
