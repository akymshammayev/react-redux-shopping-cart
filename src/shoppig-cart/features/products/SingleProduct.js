import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectProductById } from './productsSlice'
import styled from 'styled-components'
import { addCartItem } from '../carts/cartSlice'

const ProductDetail = styled.section`
  width: 80%;
  height: 75vh;
  border: 1px solid rgba(0,0,0,0.9);
  margin: 20px auto;
  display: flex;
  
  @media(max-width: 968px) {
    height: auto;
  }

  @media(max-width: 768px) {
    flex-direction: column;
    height: auto;
  }

  div.img {
    width: 50%;
    background-color: black;
    img {
      width: 100%;
      height: 100%;
    }
    @media(max-width: 768px) {
      width: 100%;
    }
  }

  div.info {
    width: 50%;
    padding: 50px 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    h2 {
      margin: 10px 0px;
      font-size: 32px;
    }
    p {
      text-transform: capitalize;
      margin: 5px 0px; 
      font-size: 24px;
      color: lightblue;
    }
    & > span {
      color: crimson;
      line-height: 30px;
    }
    .priceCart {
      display: flex;
      flex-direction: column;
      span {
        margin: 5px 0px;
        font-size: 24px;
        font-weight: 600;
      }
      button {
        border: none;
        outline: 1px solid rgba(0,0,0,0.9);
        border-radius: 2px;
        margin: 5px 0px;
        padding: 10px 10px;
        width: 40%;
        font-size: 18px;
        background-color: var(--blue);
        color: white;
      }
    }
    @media(max-width: 768px) {
      width: 100%;
      padding: 20px 20px;
    }
  }

`

const SingleProduct = () => {
  const { productId } = useParams()
  const product = useSelector(state => selectProductById(state, Number(productId)))
  const dispatch = useDispatch()

  const addProductToCart = () => {
    dispatch(addCartItem(product))
  }
  

  return (
    <ProductDetail>
      <div className='img'>
        <img src={`${product.image}`} alt={`${product.title}`}/>
      </div>     
      <div className='info'> 
        <h2>{product.title}</h2>
        <p>{product.category}</p>
        <span>{product.description.substring(0,200)}</span>

        <div className='priceCart'>
          <span>Price: {product.price}</span>
          <button onClick={addProductToCart}>Add to cart</button>
        </div>
        
      </div>
     
    </ProductDetail>
  )
}

export default SingleProduct