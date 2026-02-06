import AllProducts from './AllProducts'
import HomeHeader from './HomeHeader'

const Home = async () => {
  const response = await fetch("https://dummyjson.com/products")
  const { products: allProducts } = await response.json()
  return (
      <AllProducts allProducts={allProducts} />
  )
}

export default Home