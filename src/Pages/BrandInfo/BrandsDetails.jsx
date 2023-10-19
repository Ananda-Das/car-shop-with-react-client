import { useLoaderData, useParams } from "react-router-dom";
import BrandDetails from "./BrandDetails";

const BrandsDetails = () => {
  const brand = useLoaderData();

  const { brandName } = useParams();
  const brandsDetails = brand.filter((brand) => brand.brand === brandName);

  return (
    <div>
      <h1 className="text-center my-5 font-bold text-3xl underline">
        {" "}
        <span className="uppercase">{brandName}</span> Cars
      </h1>
      <div>
        {
          brandsDetails.length>0 ? 
            brandsDetails.map((brandDetails) => (
              <BrandDetails key={brandDetails._id} brandDetails={brandDetails}></BrandDetails>
            ))
            : <h2 className="text-center text-3xl my-12 font-bold">Sorry No Car Available Right Now!!!</h2>
        }
      </div>
    </div>
  );
};

export default BrandsDetails;
