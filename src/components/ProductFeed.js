import Product from "./Product";
export default function ProductFeed({ products }) {
  return (
    <>
        <div className="grid grid-flow-row-dense mx-auto -mt-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-40 lg:-mt-52">
          {products
            .slice(0, 4)
            .map(({ id, title, description, price, category, image }) => (
              <Product
                key={id}
                title={title}
                description={description}
                price={price}
                category={category}
                image={image}
              />
            ))}
          <img className="mx-auto md:col-span-full" src="/adv.jpg" alt="" />
          {/* <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ id, title, description, price, category, image }) => (
            <Product
              key={id}
              title={title}
              description={description}
              price={price}
              category={category}
              image={image}
            />
          ))}
      </div> */}
          {products
            .slice(4, products.length)
            .map(({ id, title, description, price, category, image }) => (
              <Product
                key={id}
                title={title}
                description={description}
                price={price}
                category={category}
                image={image}
              />
            ))}
        </div>
    </>
  );
}
