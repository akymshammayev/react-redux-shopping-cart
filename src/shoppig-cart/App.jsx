import React, { useState } from 'react'
import styled, {ThemeProvider} from 'styled-components'
import Layout from './components/Layout'
import ProductsList from './features/products/ProductsList'
import { GlobalStyled } from './styles/GlobalStyled'
import { Routes, Route, Navigate } from 'react-router-dom'
import SingleProduct from './features/products/SingleProduct'
import { useSelector } from 'react-redux'
import CartItems from './features/carts/CartItems'


const LightTheme = {
  backgroundColor:'white',
  color: 'black',
}
const DarkTheme = {
  backgroundColor:'black',
  color:'white',
}
const MainContainer = styled.div`
  color: ${(props) => props.theme.color};
  background-color:  ${(props) => props.theme.backgroundColor};
  margin: 0;
  padding: 0;
  min-height: 100vh;
  height: auto;
`
const App = () => {
  
  // const isTheme = useSelector((state)=>state.theme.isTheme)

  const [isTheme, setIsTheme] = useState(true)
  const [search, setSearch] = useState('')
  const handleSearch = e => setSearch(e.target.value)

  return (
    <>
      <ThemeProvider theme={isTheme ? LightTheme : DarkTheme}>
        <GlobalStyled />
        <MainContainer>

          <Routes>
            <Route path='/' element={<Layout  onChange={handleSearch} search={search} />}>
              <Route index element={<ProductsList search={search}/>}/>

              <Route path="product">
                <Route path=":productId" element={<SingleProduct />}/>
              </Route>

              <Route path="cart">
                <Route index element={<CartItems />}/>
              </Route>

              <Route path='*' element={<Navigate to="/" replace />}/>

            </Route>
          </Routes>

        </MainContainer>
      </ThemeProvider>
    </>
  )
}
export default App