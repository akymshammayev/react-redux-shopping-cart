import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { incrementCartItem, decrementCartItem } from "./cartSlice";

const CartOutDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 160px);
`;

const CartDivStyle = styled.div`
  /* border: 1px solid rgba(0,0,250, 0.76); */
  margin: 20px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: calc(100vh - 200px);
  width: 80%;
  padding: 20px;
  h3 {
    color: var(--blue);
  }
  a {
    margin: 10px 5px;
    padding: 5px 8px;
    font-size: 16px;
    border: none;
    outline: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 2px;
    color: white;
    background-color: var(--blue);
    text-decoration: none;
  }
  table {
    width: 90%;
    margin: 10px 0px;

    border-collapse: collapse;
    border: 1px solid black;
    text-align: center;
    vertical-align: middle;
    thead {
      background-color: #333;
      color: white;
      font-size: 24px;
      text-transform: capitalize;
      letter-spacing: 2%;
      tr {
        td {
          padding: 8px 4px;
        }
      }
    }
    tbody {
      text-align: center;
      tr {
        margin: 2px 0px;
        :hover {
          background-color: rgba(115, 115, 115, 0.5);
        }
        td {
          width: 20%;
          button {
            margin: 0px 5px;
            padding: 5px 8px;
            font-size: 16px;
            border: none;
            outline: 1px solid rgba(0, 0, 0, 0.5);
            border-radius: 2px;
            color: white;
            background-color: var(--blue);
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  div {
    padding: 10px;
    h4 {
      font-size: 24px;
      color: var(--blue);
    }
  }
`;
const CartItems = () => {
  const cartItems = useSelector((state) => state.carts.cartItems);
  const dispatch = useDispatch();
  let total = 0;
  cartItems.forEach((item) => {
    total += item.price * item.quantity;
  });

  const CountInc = (id) => {
    dispatch(incrementCartItem(id));
  };
  const CountDec = (id) => {
    dispatch(decrementCartItem(id));
  };

  const cartContent = cartItems.map((cart) => (
    <tbody key={cart.id}>
      <tr>
        <td>{cart.title}</td>
        <td>
          <img src={`${cart.image}`} alt={`${cart.title}`} />
        </td>
        <td>{cart.price}</td>
        <td>
          <button onClick={() => CountInc(cart.id)}>+</button>
          {cart.quantity}
          <button onClick={() => CountDec(cart.id)}>-</button>
        </td>
        <td>{Math.ceil(cart.totalPrice, 2)}</td>
      </tr>
    </tbody>
  ));

  return (
    <CartOutDiv>
      <CartDivStyle>
        <h3>
          {cartItems.length < 1
            ? `Cart no have item`
            : `Cart have ${cartItems.length} items`}{" "}
        </h3>
        {cartItems.length > 0 ? (
          <>
            <Link to="/" className="cart">
              Home to add cart
            </Link>
            <table>
              <thead>
                <tr>
                  <td>Title</td>
                  <td>Image</td>
                  <td>Price</td>
                  <td>QTY</td>
                  <td>TotalPrice</td>
                </tr>
              </thead>
              {cartContent}
            </table>
            <div>
              <h4>TotalPrice: {Math.ceil(total)}</h4>
            </div>
          </>
        ) : (
          <>
            <Link to="/">Home to add cart </Link>
            <p>Yet have not your cart Item</p>
          </>
        )}
      </CartDivStyle>
    </CartOutDiv>
  );
};
export default CartItems;
