import axios, { AxiosError } from "axios"
import React, { useEffect, useState } from "react"
import { IProduct } from "../models"


function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function fetchProducts() {
    try {
      setError('')
      setLoading(true)
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products');
      // console.log('loading');
      
      setProducts(response.data)
      setLoading(false)
      
      

    } catch (e: unknown) {
      const error = e as AxiosError
      console.error(error);
      setLoading(false)
      setError(error.message)

    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])
    
  return {products, error, loading}
}

export default useProducts