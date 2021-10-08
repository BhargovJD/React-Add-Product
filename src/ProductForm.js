import React, { useState } from 'react'

function ProductForm({index,onAddProduct}) {

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);


    const createProduct = (event)=>{
        event.preventDefault();
    const productObj = {id:index, name,price}
    onAddProduct(productObj);

    }






    return (
        <div>
            <from>
                <label>Product Name</label>
                <input value={name} type="text" onChange={(e) => setName(e.target.value)}></input>
                <br />
                <br />
                <label>Product Price</label>
                <input value={price} type="number" onChange={(e) => setPrice(e.target.value)}></input>
                <br />
                <br />
                <button onClick={createProduct}>Create</button>
            </from>
            <hr />
        </div>
    )
}

export default ProductForm
