import { Link } from "react-router-dom";

const Hero = () => {
    return ( 
        <section className="flex flex-col lg:flex-row lg:justify-between dark:text-slate-100 items-center max-md:text-center">
            <div className="text my-5">
                <h1 className="text-5xl font-bold max-md:text-4xl ">Books For Africa</h1>
                <p className="text-xl my-3 px-1 dark:text-slate-300">Pick 'n Book is Africa's authoritative source for 2nd hand Computer Science books. Find ratings and access to the newest books on our platform.
                <br /> 
                Let's get Africa programming</p>
                <Link to="/products" type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-base px-5 py-2.5 mr-2 m11-10 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">Explore Books</Link>
            </div>
            <div className="visual my-5 lg:max-w-xl">
                <img className="rounded-lg max-h-full" src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=60" alt="Pick n Book Hero Section" />
            </div>
        </section>
     );
}
 
export default Hero;