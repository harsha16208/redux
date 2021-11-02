import axios from "axios"
import { useSelector,useDispatch } from "react-redux"
import {setProduct,removeSelectedProduct} from "../store/action_creators/actioncreators"
import { useEffect } from "react"


export default function ProductDetails({match})
{
    const result=useSelector(state=>state)
    let product=result.selectedproductreducer
    const dispatch=useDispatch()
    useEffect(()=>{
        async function getProduct(){
            const prod=await axios.get("https://fakestoreapi.com/products/"+match.params.id).catch(err=>console.log(err))
            dispatch(setProduct(prod.data))
        } 
        getProduct()

        return ()=>{
            dispatch(removeSelectedProduct())
        }
    },[dispatch,match.params.id])
    
    if(Object.keys(product).length===0)
    {
        return (
            <div><h1>loading....</h1></div>
        )
    }
    return (<div style={detailspage_container}>
        
        <div className="image_container" style={image_container}>
            <img src={product.image} alt={product.title} style={image}></img>
        </div>
        <div className="details_container" style={details_container}>
            <div className="title_container" style={title_container}>
                {product.title}
            </div>
            <div style={category_container}>
                {product.category}
            </div>
            <div className="price container" style={price_container}>
            &#8377;{product.price}
            </div>
            <div className="description_container" style={description_container}>
                {product.description}
            </div>
            <div className="addtocart" style={addtocart}>
                <button className="btn btn-success" style={addbtn}>ADD TO CART  </button>
            </div>
        </div>
    </div>)
}

const image_container={
    width:"500px",
    height:"500px",
    float:"left",
    marginRight:"20px",

}


const image={
    width:"500px",
    height:"500px"

}

const detailspage_container={
    margin:"100px"
}

const description_container={
    fontSize:"25px",
}

const price_container={
    fontSize:"50px",
    fontWeight:"bold",
    backgroundColor:"green",
    width:"200px",
    textAlign:"right",
    color:"white",
    border:"none",

}

const title_container={
    fontSize:"50px",
    fontWeight:"bold"
}

const addtocart={
   margin:"10px",
   fontSize:"25px",
}

const details_container={
    border:"1px solid gray",
    marginLeft:"520px",
    padding:"10px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    
}

const category_container={
    backgroundColor:"#DCDCDC",
    color:"brown",
    fontSize:"22px",
    width:"300px",
    height:"40px",
    textAlign:"center",
    fontWeight:"bold",
    border:"none"
}

const addbtn={
    marginTop:"20px",
    height:"50px",
    width:"200px",
    fontSize:"25px",
    fontWeight:"bold"
}

