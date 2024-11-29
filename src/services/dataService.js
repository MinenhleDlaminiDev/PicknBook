// Getting Users
export async function getUser(){
    // Getting information from the token
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));

    // Variable to store request options
    const requestOptions = {
        method: "GET", 
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`}
    }

     const url = `${process.env.REACT_APP_HOST}/600/users/${cbid}`

    const response = await fetch (url, requestOptions);
    // error handling
    if(!response.ok){
        throw{ message: response.statusText, status: response.status }//eslint-disbale-line
    }
    const data = await response.json();
    return data; 
}

// Orders
export async function getUserOrders(){
     // Getting information from the token
     const token = JSON.parse(sessionStorage.getItem("token"));
     const cbid = JSON.parse(sessionStorage.getItem("cbid"));

     const requestOptions = {
        method: "GET", 
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`}
    }

    const url = `${process.env.REACT_APP_HOST}/660/orders?user.id=${cbid}`
    const response = await fetch (url, requestOptions);
        // error handling
        if(!response.ok){
            throw{ message: response.statusText, status: response.status }//eslint-disbale-line
        }
    const data = await response.json();
    return data;
}

// Create Order
export async function createOrder(cartList, total, user){
    // Getting information from the token
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));

                // Creating our order object
                const order = {
                    cartList: cartList,
                    amount_paid: total,
                    quantity: cartList.length,
                    user: {
                        name: user.name,
                        email: user.email, 
                        id: user.id
                    }   
                }
    
                // Posting the order with restrictions
                const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, {
                    method: "POST", 
                    headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
                    body: JSON.stringify(order)
                });
                // error handling
                if(!response.ok){
                    throw{ message: response.statusText, status: response.status }//eslint-disbale-line
                }
                const data = await response.json();
                return data;
}