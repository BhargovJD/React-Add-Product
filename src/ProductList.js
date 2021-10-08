import React, {useState} from 'react'
import Products from './Products'
import Total from './Total';
import ProductForm from './ProductForm'


function ProductList() {

    const [product, setProduct]=useState([
        {id:1,name:"Andrpod",price:150},
        {id:2,name:"Apple",price:170},
        {id:3,name:"Nokia",price:65},
    ]);

    const addproduct = (productObj)=>{
        setProduct([...product, productObj]);
    }


    const [total, setTotal] = useState(0);

    const calculateTotal = (price)=>{
        setTotal(total+parseInt(price));
    };

    const parentFunction = (x)=>{
        alert("You Presed "+x);
    };
    return (
        <div>
             <ProductForm index={product.length} onAddProduct={addproduct}/>

            {product.map((p)=>(
                <Products
                key={p.id} name={p.name} price={p.price}  parentFun={parentFunction} onCalculateTotal={calculateTotal}/>
            ))}

            <hr/>
            {/* <Products name="Apple" price={170}  parentFun={parentFunction} onCalculateTotal={calculateTotal}/>
            <hr/>
            <Products name="Nokia" price={65}  parentFun={parentFunction} onCalculateTotal={calculateTotal}/> */}

            <Total totalCash={total}/>
        </div>
    )
}

export default ProductList
