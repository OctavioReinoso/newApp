export const fetchProducts = () => {
    return fetch('https://fakestoreapi.com/products')
}

export const getFetch = (id) => {
    return fetch(`https://fakestoreapi.com/products${id}`)
}