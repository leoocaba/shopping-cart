import { useContext } from "react";
import Card from "../components/Card";
import { ProductsContext } from "../context/ProductsContext";
import { CartContext } from "../context/CartContext";

const CardList = () => {

  const { products } = useContext(ProductsContext)
  const { buysList, addBuys, increaseBuys, decreaseBuys, deleteBuys } = useContext(CartContext)

  const handleAdd = (buys) => {
    addBuys(buys)
  }

  const handleDelete = (id) => {
    deleteBuys(id)
  }

  const handleIncrease = (id) => {

  }

  const handleDecrease = (id) => {

  }

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            image={product.image}
            category={product.category}
            description={product.description}
            price={product.price}
            handleAdd={() => handleAdd(product)}
            handleDelete={() => handleDelete(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
