import React, {useState} from 'react'

function Products({name,price,parentFun, onCalculateTotal}) {

    const[quantity, setQuantity] = useState(0)
    // We are creating a state variable "qunatity" and set value 0. We can change this "quantity" state variable by setQuantity function
    const changeQuantity = ()=>{
        setQuantity(quantity+1);
    }


    const yellowButton = {
        backgroundColor:"yellow",
        color:"red",
        padding:"5px 15px"
    }
    // const buyFun=()=>{
    //     alert("You selected this product!");
    // }

    // const buyFun=()=>{
    //     onCalculateTotal(price);
    // };
    return (
        <div>
            <h1 style={{color:"red"}}>{name}</h1>
            <p>Price:${price}</p>
            {/* <button style={yellowButton} onClick={buyFun}>Buy</button> */}
            <button style={yellowButton} onClick={()=>onCalculateTotal(price)}>Buy</button>


            <h3>{quantity}</h3>
            <button onClick={changeQuantity}>Update quantity</button>

            <button onClick={() => parentFun(name)}>Call Parent Function</button>
        </div>
    )
}

export default Products
