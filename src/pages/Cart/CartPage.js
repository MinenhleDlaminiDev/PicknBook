import CartEmpty from "./components/CartEmpty";
import CartList from "./components/CartList";
import { useCart } from "../../context";
import useTitle from "../../hooks/useTitle";

const CartPage = () => {
    //Title of page
    useTitle(`Cart`);
    // deconstruct useCart
    const { cartList } = useCart();
    return ( 
        <main className="w-11/12 my-0 mx-auto">
            { cartList.length ? <CartList /> : <CartEmpty/> }
        </main>
     );
}
 
export default CartPage;