import { useLoaderData } from "react-router-dom";
import CartContainer from "./CartContainer";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Cart = () => {
  const cartInfo = useLoaderData();

  const { user } = useContext(AuthContext);

  //   const { user } = useParams();

  const cartDetails = cartInfo.filter((cartInfo) => cartInfo.user === user);

  return (
    <div>
      <h1>Cart: {cartDetails.length}</h1>
      <div>
        {cartDetails.map((cart) => (
          <CartContainer key={cart._id}></CartContainer>
        ))}
      </div>
    </div>
  );
};

export default Cart;
