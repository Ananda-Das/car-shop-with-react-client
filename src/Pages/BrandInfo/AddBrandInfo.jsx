const AddBrandInfo = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-3xl text-center mt-10 font-semibold">Add Brand Info</h1>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <input type="text" placeholder="Brand Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Brand Image Url</span>
                </label>
                <input type="text" placeholder="Brand Image Url" className="input input-bordered" required />
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
