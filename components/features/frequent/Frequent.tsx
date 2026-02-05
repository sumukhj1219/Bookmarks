import AllProducts from "./AllProducts"

const Frequent = async () => {
    const response = await fetch("https://dummyjson.com/products")
    const { products: allProducts } = await response.json()
    return (
        <AllProducts allProducts={allProducts} />
    )
}

export default Frequent