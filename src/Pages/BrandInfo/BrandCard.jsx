/* eslint-disable react/prop-types */

const BrandCard = ({ brandInfo }) => {
  const { brandName, brandImg } = brandInfo;

  return (
    <div className="">
      <div className="card bg-base-100 shadow-xl flex flex-col">
        <figure className="w-[165px] p-2">
          <img src={brandImg} alt={brandName} />
        </figure>
        <div className="card-body flex-grow">
          <h2 className="card-title text-center">
            {brandName}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
