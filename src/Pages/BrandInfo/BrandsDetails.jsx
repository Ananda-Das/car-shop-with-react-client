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
        {brandsDetails.map((brandDetails) => (
          <BrandDetails key={brandDetails._id} brandDetails={brandDetails}></BrandDetails>
        ))}
        {/* {sliderData.map((item) => (
          <BrandSlider key={item._id} item={item}></BrandSlider>
        ))} */}
        
      </div>
    </div>
  );
};

export default BrandsDetails;
