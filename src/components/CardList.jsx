import React from 'react';
import Card from '../components/Card';

const CardList = ({ products }) => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            image={product.image}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
