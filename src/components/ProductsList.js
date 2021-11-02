import axios from "axios"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { getProducts } from "../store/action_creators/actioncreators"
import { Link } from "react-router-dom"

export default function ProductsList()
{
    const dispatch=useDispatch()
    const state=useSelector(state=>state)
    const products=state.productsreducer.products
    useEffect(()=>{
        async function getProd()
        {
            try{
        const products=await axios.get("https://fakestoreapi.com/products").catch()
        dispatch(getProducts(products.data))
            }
        catch(err){}
        }
        getProd()
       
    },[dispatch])
    if (products.length===0)
    {
        return (
            <img src="loading.gif" alt=""></img>
        )
    }
    return (
   <div style={product_list_style} >
        {products.map(product=>{
            let link="det/"+product.id
            return (
            <Link to={link} key={product.id}>
            <div className="item_container" style={item_container} >
                <div className="image_container" style={image_container}>
                    <img src={product.image} style={image_style}alt={product.title}></img>
                </div>    
                <div className="price_container" style={price_styles}>
                   <h3>${product.price}</h3>
                </div>
            </div></Link>)
        })}
    </div>)
    }


const item_container={
    width:"450px",
    height:"450px",
    float:"left",
    margin:"10px",
    border:"0.1px solid gray",
    overflow:"hidden",
}

const image_style={
    width:"350px",
    height:"350px",
    
    
}

const product_list_style={
    margin:"10px"
}

const price_styles={
    display:"flex",
    justifyContent:"center",
    marginTop:"10px"
}

const image_container={
    display:"flex",
    justifyContent:"center"
}



