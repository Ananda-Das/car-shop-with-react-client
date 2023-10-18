/**
 * https://i.ibb.co/MN0R4L3/bmw.png
https://i.ibb.co/BL4Cp2t/download.jpg
https://i.ibb.co/drjgG9S/download.png
https://i.ibb.co/TbvyhmC/ford.jpg
https://i.ibb.co/72KGptF/Mercedes-Benz.jpg
https://i.ibb.co/MZt6k1d/toyota.jpg
 */

import Swal from "sweetalert2";

const AddBrandInfo = () => {
  const handleBrandInfo = (e) => {
    e.preventDefault();
    const form = e.target;
    const brandName = form.brandName.value;
    const brandImg = form.brandImg.value;

    const brandInfo = { brandName, brandImg };

    //send data to the server
    fetch("http://localhost:5000/brands", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(brandInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Successfuly Inserted",
            icon: "success",
            confirmButtonText: "Okay",
          });
          form.reset();
        }
      });

    console.log(brandInfo);
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-3xl text-center mt-10 font-semibold">Add Brand Info</h1>
            <form onSubmit={handleBrandInfo} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <input name="brandName" type="text" placeholder="Brand Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Brand Image Url</span>
                </label>
                <input name="brandImg" type="text" placeholder="Brand Image Url" className="input input-bordered" required />
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add Brand</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBrandInfo;
