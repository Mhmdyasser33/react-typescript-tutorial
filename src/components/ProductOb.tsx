import { Product } from "../types/type" ;

type ProductProps = {
    // we call product type dynamically instead of create it again n times
   products : Product[]
}

const ProductOb = ({products} : ProductProps) => {
  return (
    <div>{products.map((product , index) =>(
        <div key={index}>
         <h1>Product Name</h1>
        <h2>{product.name}</h2>
        <h1>Product Price </h1>
        <h2>{product.price}</h2>
        </div>
    ))}</div>
  )
}

export default ProductOb