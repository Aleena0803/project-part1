import React, { useEffect, useState } from 'react'
import './ListProduct.css'

const ListProduct = () => {

    const [allproducts,setAllProducts] = useState([]);
    const fetchInfo = async ()=>{
      await fetch('http://localhost:5000/allproducts')
      .then((res)=>res.json())
      .then((data)=>{setAllProducts(data)});
    }

    useEffect(()=>{
      fetchInfo();
    },[])
  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
      <p>Products</p>
      <p>Title</p>
      <p>Old Price</p>
      <p>New Price</p>
      <p>Category</p>
      <p>Remove</p>
      </div>
    <div className="listprouct-allproducts">
      <hr />
      {allproducts.map((product,index)=>{
          return 
      })}
      </div>
    </div>
  )
}

export default ListProduct