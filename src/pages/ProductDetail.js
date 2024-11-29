import { useEffect, useState } from "react";
import {Rating} from "../components";
import { useParams } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import { useCart } from "../context";
import { getProduct } from "../services";
import { toast } from "react-toastify";

const ProductDetails = () => {
    // Fetching the individual product
    const [product, setProduct] = useState({});
    // destructuring
    const { id } = useParams();
    //Dynamic Title
    useTitle(product.name);
    
    //useEffect
    useEffect(() =>{
        async function fetchProduct(){
            try{
                const data = await getProduct(id)
                setProduct(data)
            }catch(error){
                toast.error(error.status + " " + error.message); 
            }

        }
        fetchProduct();
    },[id])

    
     // destructuring the use Cart
     const { cartList, addToCart, removeFromCart } = useCart(); 
     // state for cart in list
     const [inCart, setInCart] = useState(false); 
 
     useEffect(() => {
         const productInCart = cartList.find(item => item.id === product.id);
 
         if(productInCart){
             setInCart(true);
         } else {
             setInCart(false);
         }
     },[cartList, product.id])



    return ( 
        <main className="w-11/12 my-0 mx-auto">
            <section className="text-center">
                <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">{product.name}</h1>
                <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">{product.overview}</p>
                <div className="flex max-md:flex-wrap items-center justify-around gap-3">
                    <div className="max-w-xl my-3">
                    <img className="rounded" src={product.poster} alt={product.name} />
                    </div>
                    <div className="max-w-xl my-2 flex flex-col justify-center">
                    <p className="text-3xl font-bold text-gray-900 dark:text-slate-200 max-md:text-center">
                        <span className="mr-1">R</span>
                        <span className="">{product.price}</span>
                    </p>
                    <p className="my-3"> 
                        <span>
                        <Rating rating={product.rating}/>
                        </span>
                    </p>
                    <p className="my-2 select-none max-md:text-center max-md:mb-3">
                         {product.best_seller && <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">BEST SELLER</span>}
                        { product.in_stock && <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">INSTOCK</span>}
                        { !product.in_stock && <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">OUT OF STOCK</span>}
                        <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">{product.size} MB</span>
                        
                    </p>
                    <p className="my-3 max-md:text-center max-md:mb-3">
                        
                        { inCart ?  <button onClick={() => removeFromCart(product)} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 ${product.in_stock ? "" : "cursor-not-allowed"}`} disabled={product.in_stock ? "" : "disabled"} >Remove Item <i className="ml-1 bi bi-trash3"></i></button>  : <button  onClick={() => addToCart(product)} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${product.in_stock ? "" : "cursor-not-allowed"}`} disabled={product.in_stock ? "" : "disabled"}>Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button> }
                       
                    </p>
                    <p className="text-lg text-gray-900 dark:text-slate-200 max-md:text-center">
                        {product.long_description}
                    </p>
                    </div>
                </div>
            </section>
        </main>
     );
}
 
export default ProductDetails;