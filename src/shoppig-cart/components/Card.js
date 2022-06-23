import React from 'react'
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledCard>
      <img src='./logo192.png' alt=''/>
      <footer>
        <h4> Logo </h4>
        <p> $15</p>
      </footer>
    </StyledCard>
    
  )
}

const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  width:80vw;
  max-width: 260px;
  height: 250px;
  background: white;
  border-radius: 0.15rem;
  outline: 1px solid rgb(200, 195, 195);
  img {
    margin: 0 auto;
    width: 90%;
    height: 80%;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  
    h4 {
      text-transform: capitalize;
      &::before {
        content: 'Name: ';
        color: var(--blue);
      }
    }
  
    p {
      text-transform: capitalize;
      font-weight: 600;
      color: black;
      &::before {
        content: 'Price: ';
        color: var(--blue);
      }
    }
  }

  transition: all 0.5s ease-in-out;
  &:hover {
    box-shadow: 0 3px 3px #222;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    max-width: 260px;
  }
  
`
export default Card;
