export const getOrders=()=>{
    return fetch("https://dummyjson.com/carts/1").then((res)=>{
        return res.json()
    })
}