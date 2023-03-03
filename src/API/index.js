export const getOrders=()=>{
    return fetch("https://dummyjson.com/carts/1").then((res)=>{
        return res.json()
    })
}


export const getRevenue = () => {
    return fetch("https://dummyjson.com/carts").then((res) => res.json());
  };