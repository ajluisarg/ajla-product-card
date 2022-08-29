import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug',
  img: './coffee-mug.png',
};

const App = () => {
  return (
    <ProductCard
      product={product}
      className="bg-dark"
      initialValues={{
        count: 4,
        maxCounter: 8,
      }}
    >
      {({ reset }) => (
        <>
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-white" />
          <ProductCard.Buttons className="custom-buttons" />
          <button onClick={reset}>Reset</button>
        </>
      )}
    </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
