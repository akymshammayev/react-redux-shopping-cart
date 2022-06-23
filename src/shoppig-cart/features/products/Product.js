import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { addCartItem } from '../carts/cartSlice'

const ProductSection = styled.section`
    width: 240px;
    min-width: 240px;
    height: 300px;
    border: 1px solid rgba(0,0,0,0.75);
    padding: 5px 5px;
    margin: 5px 5px;
    border-radius: 5px;
    box-shadow: 3px 3px 4px rgba(0,0,0,0.75);
    transition: all 0.6s ease-in;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* &:hover {
      transform: scale(1.02);
    } */
    div.img {
      height: 60%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    div.info {
      height: 20%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding: auto 10px;
    }
    div.btnActions {
      display: flex;
      justify-content: space-evenly;

      a {
        text-decoration: none;
        color: white;
        border: none;
        padding: 10px 8px;
        font-size: 15px;
        font-weight: 500;
        outline: 1px solid rgba(0,0,0,0.85);
        background-color: var(--blue);
        border-radius: 2px;
      }
      button {
        border: none;
        padding: 10px 8px;
        font-size: 15px;
        font-weight: 500;
        outline: 1px solid rgba(0,0,0,0.85);
        background-color: var(--blue);
        color: white;
        border-radius: 2px;
      }
    }

`
const Product = ({product}) => {
  const dispatch = useDispatch()
  const addProductToCart = () => {
    dispatch(addCartItem(product))
  }
    return (
      <ProductSection>
        <div className='img'>
          <img src={`${product.image}`} alt={`${product.title}`}/>
        </div>
        <div className='info'>
          <h3>Title:{product.title.substring(0,10)}</h3>  
          <p>Price:{product.price}</p>
        </div>
        <div className='btnActions'>
          <Link to={`product/${product.id}`}>View Detail</Link>
          <button onClick={addProductToCart}>Add to Cart</button>
        </div>
      </ProductSection>
    )
  }
export default Product