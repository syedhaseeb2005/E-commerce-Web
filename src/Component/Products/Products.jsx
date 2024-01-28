import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import { popularProducts } from '../dummydata/dummyData'
import Product from './Product'
import axios from 'axios'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`


function Products({ cat, filters, sort }) {
  // console.log(cat,filters,sort);
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(cat ?
          `http://localhost:7000/api/products?category=${cat}`
          : 'http://localhost:7000/api/products')
        // console.log(res.data);
        setProducts(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, [cat])

  useEffect(() => {
    cat && setFilteredProducts(products.filter(item => Object.entries(filters).every(([key, value]) => item[key].includes(value))))
  }, [products, cat, filters])

  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt))
    } else if (sort === 'asc') {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price))
    } else {
      setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price))
    }
  }, [sort])

  // console.log(filteredProducts);
  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        :
        products
          .slice(0, 8)
          .map((item) => <Product item={item} key={item.id} />)
      }
    </Container>
  )
}

export default Products
