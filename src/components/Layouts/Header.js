import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png"
import { useEffect, useState } from "react";
import Search from "../Sections/Search";
import { DropdownLoggedOut,DropdownLoggedIn } from "../index"
import { useCart } from "../../context";

const Header = () => {
    //Dark Mode 
    const [dark, setDark] = useState(JSON.parse(localStorage.getItem("dark")) || false);

    useEffect(() => {
        localStorage.setItem("dark", JSON.stringify(dark));
        if(dark){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }
    },[dark])

    //Search 
    const [search, setSearch] = useState(false);

    //DropDown for Profile icon
    const [dropdown, setDropDown] = useState(false);

    //Bring in the sessions storage data
    const token = JSON.parse(sessionStorage.getItem("token"));

    //Destructring the useCart
    const { cartList } = useCart();

    return ( 
        <header className="relative">
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo} className="h-8" alt="Pick 'n Book Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Pick 'n Book</span>
                    </Link>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <span onClick={() => setDark(!dark)} className={`cursor-pointer text-xl text-gray-700 dark:text-white ${dark ? "bi bi-brightness-high" : "bi bi-moon"}`}></span>
                        <span onClick={() => setSearch(!search)} className="cursor-pointer text-xl text-gray-700 dark:text-white bi bi-search"></span>
                        <Link to="/cart">
                            <span className="relative cursor-pointer text-xl text-gray-700 dark:text-white bi bi-cart-fill">
                                <span className="text-white text-sm absolute -top-2 left-2.5 bg-rose-500 px-1 rounded-full">{cartList.length}</span>
                            </span>
                        </Link>
                        <span onClick={() => setDropDown(!dropdown)} className="relative cursor-pointer text-xl text-gray-700 dark:text-white bi bi-person-circle">
                        { dropdown && (token ? <DropdownLoggedIn setDropDown={setDropDown}/> : <DropdownLoggedOut setDropDown={setDropDown}/>) }
                        </span>
                    </div>
                </div>
            </nav>
            { search && <Search setSearch={setSearch}/> }
            
        </header>
     );
}
 
export default Header;