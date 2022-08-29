# AJLA PRODUCT CARD

This is a test package to deploy in NPM

## Example

```
<ProductCard
  product={product1}
  className="bg-dark"
  initialValues={{
    count: 4,
    maxCounter: 8,
  }}
>
  {({reset}) => (
    <>
      <ProductCard.Image className="custom-image" />
      <ProductCard.Title className="text-white" />
      <ProductCard.Buttons className="custom-buttons" />
      <button onClick={reset}>Reset</button>
    </>
  )}
</ProductCard>
```