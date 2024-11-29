import { useLocation } from "react-router-dom";
import OrderFail from "./components/OrderFail";
import OrderSucess from "./components/OrderSucess";
import useTitle from "../../hooks/useTitle";

const OrderPage = () => {
    //Title of page
    useTitle(`Order Summary`);
    // destructuring the useLocation
    const { state } = useLocation();
    return ( 
        <main className="w-11/12 my-0 mx-auto">
            { state.status ? <OrderSucess data={state.data}/> : <OrderFail />}
        </main>
     );
}
 
export default OrderPage;