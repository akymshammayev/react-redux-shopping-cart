import React from 'react'
import styled from 'styled-components'
import { FaCartPlus, FaSearch } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const SearchDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 80px;
    height: 60px;
    background-color: white;
    border-bottom: 2px solid var(--blue);
    
    h2 {
        width: 20%;
        color: var(--blue);
    }
    div.search {
        width: 50%;
        position: relative;
        i {
            position: absolute;
            padding: 10px;
            right: 0;
            font-size: 18px;
            text-align: right;
            color: var(--blue);
        }
        input {
            width: 100%;
            padding: 8px;
            border: none;
            -webkit-border:none;
            font-size: 14px;
            border: 2px solid var(--blue);
            border-radius: 50px;
            -webkit-focus-inner:none;
        }
        button {
            padding: 8px;
            width: 30%;
            border: none;
            font-size: 14px;
            outline: 2px solid var(--blue);
            border-top-right-radius: 50px;
            border-bottom-right-radius: 50px;
            color: white;
            background-color: var(--blue);
        }
    }
    div.user-cart {
        display: flex;
        justify-content: flex-end;
        width: 10%;
        position: relative;
        li {
            list-style: none;
            color: var(--blue);
            font-size: 32px;
            a {
                color: var(--blue);
                    span {
                    position: absolute;
                    right: 12;
                    top: 12;
                    text-align: center;
                    font-size: 18px;
                    width: 22px;
                    height: 20px;

                    background-color: var(--blue);
                    font-style: normal;
                    border-radius: 50px;
                    color: white;
                }
            }
        }
    }
`
const Search = ({onChange, search}) => {

    const totalQTY = useSelector((state)=>state.carts.totalQuantity)
   

    return (
        <SearchDiv>
                <h2>E-commerce</h2>
                <div className='search'>
                    <i><FaSearch /></i>
                    <input 
                        type="text" 
                        placeholder="search ..." 
                        value={search} 
                        onChange={onChange}

                    />
                </div>
                <div className='user-cart'>  
                    <li><Link to="/cart"><i><FaCartPlus /></i> <span>{totalQTY}</span></Link></li>
                </div>
        </SearchDiv>
    )
}

export default Search