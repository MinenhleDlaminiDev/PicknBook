const Testimonials = () => {
    return ( 
        <section className='my-20'>
            <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Pick 'n Book Reviews</h1>    
            <div className="grid mb-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
                <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-900 dark:border-gray-700">
                    <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">I just love the convenience of shopping at Pick 'n Book.</h3>
                        <p className="my-4 font-light">Having multiple CS Books in one place is great when comparing prices and choosing your book of choice.</p>
                    </blockquote>
                    <figcaption className="flex justify-center items-center space-x-3">
                        <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50" alt="user" />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Haley Joel Osment</div>
                            <div className="text-sm font-light text-gray-500 dark:text-gray-400">Student at Wits</div>
                        </div>
                    </figcaption>    
                </figure>
                <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                    <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for Self Taught journey</h3>
                        <p className="my-4 font-light">Provided me with Quality books to help me learn programming via the Self Taught route</p>
                    </blockquote>
                    <figcaption className="flex justify-center items-center space-x-3">
                        <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1525085475165-c6808cdb005e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50" alt="user" />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Anthony Tiffith</div>
                            <div className="text-sm font-light text-gray-500 dark:text-gray-400">Self Taught Developer</div>
                        </div>
                    </figcaption>    
                </figure>
                <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-bl-lg border-b border-gray-200 md:border-b-0 md:border-r dark:bg-gray-900 dark:border-gray-700">
                    <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Easy to use Website</h3>
                        <p className="my-4 font-light">Aesthetically, the well designed components are beautiful and functionality is intuitive</p>
                    </blockquote>
                    <figcaption className="flex justify-center items-center space-x-3">
                        <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=60" alt="user" />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Lamar Duckworth</div>
                            <div className="text-sm font-light text-gray-500 dark:text-gray-400">Junior Developer at pgLang</div>
                        </div>
                    </figcaption>    
                </figure>
                <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-b-lg border-gray-200 md:rounded-br-lg dark:bg-gray-900 dark:border-gray-700">
                    <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Decent experience</h3>
                        <p className="my-4 font-light">Prices are good and Pick 'n Book service has always been excellent.</p>
                    </blockquote>
                    <figcaption className="flex justify-center items-center space-x-3">
                        <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=60" alt="user" />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Aubrey Graham</div>
                            <div className="text-sm font-light text-gray-500 dark:text-gray-400">Student at TUT</div>
                        </div>
                    </figcaption>    
                </figure>
            </div>
        </section>
     );
}
 
export default Testimonials;