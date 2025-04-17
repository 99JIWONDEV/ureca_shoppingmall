import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../api/productsApi'

const DetailPage = () => {
  const { productId } = useParams()
  console.log('productId', productId)

  const [product, setProduct] = useState({})
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await getProductById(productId)
        setProduct(res)
        console.log('res', res)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProduct()
  }, [])

  return (
    <main>
      <h2>DetailPage</h2>
      <p>{product.title}</p>
    </main>
  )
}

export default DetailPage
