import React, { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct
}
// ______________________________________________________

const Product = ({ product }: ProductProps) => {
  const [details, setDetails] = useState(false)

  const btnBgClassName = !details ? 'bg-yellow-400' : 'bg-blue-400'

  const btnClasses = ['py-2 px-4 block w-32 border', btnBgClassName]

  return (
    <div
      className="border py-2 px-4 mb-2 rounded flex flex-col items-center"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-1/6"
      />
      <p>
        {product.title}
      </p>
      <p className="font-bold">
        {product.price}
      </p>
      <button
        // className={`py-2 px-4 block w-32 border ${btnBgClassName}`}
        className={btnClasses.join(' ')}
        onClick={() => setDetails(prev => !prev)}
        // onMouseEnter={() => setDetails(true)}
        // onMouseLeave={() => setDetails(false)}
      >
        {!details ? 'Show Details' : 'Hide Details'}
      </button>

      {details &&
        <div>
          <p>{product.description}</p>
          <p>Rate: <span style={{fontWeight: 'bold'}}>{product?.rating?.rate}</span></p>
        </div>
      }
    </div>
  )
}

export default Product