import ProductsList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();

  return <>
      <ProductsList data={latestProducts} title='Newest Arrivals'/>
    </>;
};
 
export default Homepage;
