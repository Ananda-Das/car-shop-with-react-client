import { useLoaderData, useParams } from "react-router-dom";
import CartContainer from "./CartContainer";

const Cart = () => {
  const cartInfo = useLoaderData();

  const { user } = useParams();

  // const brand = useLoaderData();

  // const { brandName } = useParams();

  // const brandsDetails = brand.filter((brand) => brand.brand === brandName);

  const cartDetails = cartInfo.filter((cartInfo) => cartInfo.user === user);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-5 underline">Cart Item: {cartDetails.length}</h1>
      <div className="grid grid-cols-2">
        {cartDetails.map((cart) => (
          <CartContainer key={cart._id} cart={cart}></CartContainer>
        ))}
      </div>
    </div>
  );
};

export default Cart;
