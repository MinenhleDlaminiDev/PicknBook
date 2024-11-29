import { useEffect, useState } from "react";
import DashboardCard from "./components/DashboardCard";
import DashboardEmpty from "./components/DashboardEmpty";
import { getUserOrders } from "../../services";
import useTitle from "../../hooks/useTitle";
import { toast } from "react-toastify";

const DashboardPage = () => {
    //Title of page
    useTitle(`Dashboard`);
    // state for ordering information
    const [orders, setOrders] = useState([]); 
    // fetching all the orders for a particular user
    useEffect(() => {
        async function fetchOrders(){
            try{
                const data = await getUserOrders();
                setOrders(data);
            }catch(error){
                toast.error(error.status + " " + error.message); 
            }

        }
        fetchOrders();
    }, [])
    return ( 
        <main className="w-11/12 my-0 mx-auto">
            <section>
            <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Orders</p>
            </section>

            <section>
                { orders.length && orders.map((order) => (
                    <DashboardCard key={order.id} order={order} />
                )) }
            </section>

            <section>
                { orders.length === 0 && <DashboardEmpty />}
            </section>
      </main>
     );
}
 
export default DashboardPage;