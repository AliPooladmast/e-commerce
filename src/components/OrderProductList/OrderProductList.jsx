import style from "./orderProductList.module.scss";

const OrderProductList = ({ products }) => {
  return (
    <div className={style.Info}>
      {products.map((product) => (
        <div className={style.ProductContainer} key={product._id}>
          <div className={style.Product}>
            <div className={style.ProductDetail}>
              <img src={product.img} alt="" />
              <div className={style.Detail}>
                <span>
                  <b>Product:</b> {product.title}
                </span>
                <span className={style.ProductColor}>
                  <b>Color:</b>
                  <div style={{ backgroundColor: product.color }}></div>
                </span>
                <span>
                  <b>Size:</b> {product.size}
                </span>
              </div>
            </div>

            <div className={style.ProductPrice}>
              $ {(product.price * product.quantity).toFixed(1)}
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default OrderProductList;
