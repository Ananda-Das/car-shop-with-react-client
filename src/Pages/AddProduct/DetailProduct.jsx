import { useLoaderData } from "react-router-dom";
import Rating from "./Rating";

const DetailProduct = () => {
  const carDetail = useLoaderData();
  // console.log(carDetail);

  const { image, name, type, ratting, description, price, brand } = carDetail;

  return (
    <div>
      <div className="w-11/12 mx-auto">
        <div>
          <h1 className="text-3xl my-10 font-extrabold">{name} Details</h1>
          <img className="w-3/4 mx-auto mb-10" src={image} alt="" />
        </div>
        {/* table-start */}
        <div className="overflow-x-auto mb-10">
          <table className="table text-xl">
            {/* head */}
            {/* <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead> */}
            <tbody>
              {/* row 1 */}
              <tr className="hover">
                <td>Model Name</td>
                <td>{name}</td>
              </tr>
              <tr className="hover">
                <td>Brand Name</td>
                <td>{brand}</td>
              </tr>
              {/* row 2 */}
              <tr className="hover">
                <td>Car Type</td>
                <td>{type}</td>
              </tr>
              {/* row 3 */}
              <tr className="hover">
                <td>Price</td>
                <td>{price}</td>
              </tr>
              <tr className="hover">
                <td>Description</td>
                <td>{description}</td>
              </tr>
              <tr className="hover">
                <td>Ratting</td>
                <td>
                  <Rating rating={ratting}></Rating>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* table-end */}
        <div className="card-actions justify-end mb-10">
          <button className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
