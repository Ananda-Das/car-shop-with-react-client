/* eslint-disable react/prop-types */

const BrandDetails = ({ brandDetails }) => {
  const { image, name, type, price, ratting } = brandDetails;
  return (
    <div>
      {/* <div className="card lg:card-side bg-base-100 shadow-xl my-10">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{type}</p>
          <p>{price}</p>
          <p>{ratting}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
            <button className="btn btn-primary">Update</button>
          </div>
        </div>
      </div> */}
      <div className="card card-side bg-base-100 shadow-xl w-10/12 mx-auto my-5 space-y-5 border">
        <figure className="w-4/12">
          <img className="ml-8" src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Car Name: {name}</h2>
          <p>Car Type: {type}</p>
          <p>Car Price: {price} lac BDT.</p>
          <p>Car Ratting: {ratting}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDetails;
