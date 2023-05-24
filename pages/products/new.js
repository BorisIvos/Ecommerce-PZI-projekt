import { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import {useRouter } from "next/router";

export default function NewProduct(){
    const [title,setTitle]= useState('');
    const [description,setDescription]=useState('');
    const [price,setPrice]=useState('');
    const [goToProducts,setGoToProducts] = useState(false);
    const router = useRouter();
    async function createProduct(ev) {
        ev.preventDefault();
        const data = {title,description,price}
        await axios.post('/api/products', data)
        setGoToProducts(true);

    }
    if(goToProducts){
        router.push('/products');
    }
    return (
        <Layout>
            <form onSubmit={createProduct}>
            <h1>New product</h1>
            <label>Product</label>
            <br></br>
            <input 
            type="text" 
            placeholder="product name" 
            input={title} 
            onChange={ev => setTitle(ev.target.value)}/>
            <br></br>
            <label>Description</label>
            <br></br>
            <textarea 
            placeholder="description"
            value={description}
            onChange={ev => setDescription(ev.target.value)}></textarea>
            <br></br>
            <label>Price in Euro</label>
            <br></br>
            <input type="text" 
            placeholder="price"
            value={price}
            onChange={ev => setPrice(ev.target.value)}></input>
            <br></br>
            <button type="submit"
             className="btn-primary">Save</button>
            </form>
            
            
        </Layout>
    )
}
 