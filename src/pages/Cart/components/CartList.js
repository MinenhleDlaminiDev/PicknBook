import { useState } from "react";
import CartCard from "./CartCard";
import Checkout from "./Checkout";
import { useCart } from "../../../context";

const CartList = () => {
    //State for checking out list
    const [checkout, setCheckout] = useState(false);
    // accessing our cart List destructuring
    const { cartList, total } = useCart();

    return ( 
        <>
            <section>
                <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
                My Cart: Items {cartList.length}
                </p>
            </section>
        
            <section>
                { cartList.map((product) => (
                    <CartCard key={product.id} product={product} />
                ))}
            </section>

            <section className="max-w-4xl m-auto">
                <div className="flex flex-col p-2 border-b dark:border-slate-700 text-lg dark:text-slate-100">
                <p className="flex justify-between my-2">
                    <span className="font-semibold">Total Amount:</span>
                    <span>R{total}</span>
                </p>
                </div>
                <div className="text-right my-5">
                <button onClick={() => setCheckout(!checkout)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-base px-7 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700">
                    PLACE ORDER <i className="ml-2 bi bi-arrow-right"></i>
                </button>
                </div>
                {checkout && <Checkout total={total} setCheckout={setCheckout}/>}
            </section>
            
        </>
     );
}
 
export default CartList;