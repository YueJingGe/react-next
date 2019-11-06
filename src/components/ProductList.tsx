import Product, { IProduct } from "./Product";

interface IProductListProps {
  products: IProduct[];
}

/**
 * 产品列表
 * @param props 
 */
const ProductList = (props: IProductListProps) => {
  return (
    <div className="product_list">
      {props.products.map((product, index) => {
        return <Product key={index} product={product} />;
      })}
    </div>
  );
};

export default ProductList;
