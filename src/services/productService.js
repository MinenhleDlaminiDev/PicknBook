// get product list
export async function getProductList(searchTerm){
    const url = `${process.env.REACT_APP_HOST}/444/products?name_like=${ searchTerm ? searchTerm : ""}`;
    const response = await fetch(url);
    // error handling
    if(!response.ok){
        throw{ message: response.statusText, status: response.status }//eslint-disbale-line
    }
    const data = await response.json();
    return data;
}

// get product card
export async function getProduct(id){
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/products/${id}`);
    // error handling
    if(!response.ok){
        throw{ message: response.statusText, status: response.status }//eslint-disbale-line
    }
    const data = await response.json();
    return data;

}
// get featured products
export async function getFeaturedList(){
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/featured_products`);
    // error handling
    if(!response.ok){
        throw{ message: response.statusText, status: response.status }//eslint-disbale-line
    }
    const data = await response.json();
    return data;
}