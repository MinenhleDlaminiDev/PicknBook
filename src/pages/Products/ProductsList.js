import { useEffect, useState } from "react";
import {ProductCard} from "../../components";
import FilterBar from "./components/FilterBar";
import { useLocation } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { useFilter } from "../../context";
import { getProductList } from "../../services";
import { toast } from "react-toastify";


const ProductList = () => {
    //Importing context from useFilter
    const { products, initialProductList } = useFilter();
    //Dynamic Title
    useTitle("eBook List")
    // Toggle hide and show state
    const [show, setShow] = useState(false);
    // Array to hold json object products
    // const [products, setProducts] = useState([]);
    // Search
    const search = useLocation().search;
    const searchTerm = new URLSearchParams(search).get("q");
    
    useEffect(() => {
        // async function fetchProducts(){
        //     const response = await fetch(`http://localhost:8000/products?id=10001}`);
        //     const data = await response.json();
        //     setProducts(data)
        //     console.log(data);
        // }
        // const url = `http://localhost:8000/products?name_like=${ searchTerm ? searchTerm : ""}`

        // const fetchProducts = () =>{
        //     fetch(url).then(function(response){
        //         return response.json();
        //     }).then(function (obj){
        //       initialProductList(obj);
        //     })
        // }
        async function fetchProducts(){
            try{
                const data = await getProductList(searchTerm);
                initialProductList(data);
            }catch(error){
                toast.error(error.status + " " + error.message); 
            }
        }
        fetchProducts();
    },[searchTerm]); //eslint-disable-line

 

    return ( 
        <main className="w-11/12 my-0 mx-auto">
            <section className="my-5">
                <div className="my-5 flex justify-between">
                    <span className="text-2xl font-semibold dark:text-slate-100 mb-5">All eBooks ({products.length})</span>
                    <span>
                        <button onClick={() => setShow(!show)} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-900 dark:hover:bg-gray-700" type="button"> 
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                        </button>
                    </span>            
                </div>

                <div className="flex flex-wrap justify-center lg:flex-row">
                    
                    { products.map((product) => (
                        <ProductCard key={product.id} product={product}/> 
                    ))}   
                       
                </div>    
            </section>

            { show && <FilterBar show={show} setShow={setShow}/>}
        </main>
     );
}
 
export default ProductList;