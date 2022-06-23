import React from "react";
import { Container } from "../styles/Container";
import styled from 'styled-components'
import { FaPhone } from 'react-icons/fa'

const HeadStyled = styled.section`
    padding: 15px 0px;
    width: 100%;
    background-color: var(--blue);
    color: white;
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        div.left {
            display: flex;
            justify-content: flex-start;
            span {
                i {
                    font-size: 16px;
                }
            }
        }
    }
`
const Header = () => {
    
    return (
        <HeadStyled>
            <Container>
                <div className="left">
                    <span><i><FaPhone /></i></span>&nbsp;
                   
                </div>
                <div className="right">
                    <span>FAQ's</span>&nbsp;

                </div>
            </Container>
        </HeadStyled>
    )
}

export default Header