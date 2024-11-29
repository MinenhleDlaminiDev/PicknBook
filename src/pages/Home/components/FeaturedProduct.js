import { useEffect, useState } from "react";
import { ProductCard } from "../../../components";
import { getFeaturedList } from "../../../services";
import { toast } from "react-toastify";

const FeaturedProduct = () => {
    // State to fetch data from json
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts(){
            try{
                const data = await getFeaturedList();
                setProducts(data)
            }catch(error){
                toast.error(error.status + " " + error.message); 
            }
;
        }
        fetchProducts();
    }, [])

     return ( 
        <div>
            <section className="my-20">
                <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured Books</h1>
                <div className="flex flex-wrap justify-center lg:flex-row">

                    { products.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}

                </div>
            </section>
        </div>
     );
}
 
export default FeaturedProduct;