import {Link} from "react-router-dom"


export default function Header()
{
    return (<div style={header_style}>
        <div style={title_style}><h1><Link to="/" style={link_style}>Harsha shop</Link></h1></div>
        
    </div>)
}

const header_style={
    width:"100%",
    height:"80px",
    backgroundColor:"#0F1111",
    
    display:"flex",
    aliginItems:"center",
}

const title_style={
    marginLeft:"20px",
    cursor:"pointer",
    fontSize:"200px",
    marginTop:"10px"
}

const link_style={
    textDecoration:"none",
    color:"white",
}