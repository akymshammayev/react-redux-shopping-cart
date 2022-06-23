import React from 'react'
import styled from 'styled-components'

const FooterSection = styled.section`
    width: 100%;
    height: 60px;
    display: flex;
    padding: 0 40px;
    justify-content: space-between;
    background-color: var(--blue);
    align-items: center;
    bottom: 0;
    left: 0;
    span, p {
        color: white;
        font-size: 18px;
        font-weight: 500;
    }
`
const Footer = () => {
  return (
    <FooterSection>
        <span>
            Created by  {new Date().toDateString()}.
        </span>
        <p>
            Copyright © {new Date().getFullYear()} . All rights reserved.        
        </p>
    </FooterSection>
  )
}

export default Footer