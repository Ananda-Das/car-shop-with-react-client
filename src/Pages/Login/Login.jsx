import { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Toaster } from "react-hot-toast";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    console.log(email, password);

    // sign in user
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("You Successfully Loged In");
        Navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
        toast.success("You Sign in Succesfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Registration Failed");
      });
  };

  return (
    <div className="bg-gray-500 bg-opacity-50 bg-cover bg-no-repeat ">
      <div>
        <h1 className="mx-auto pt-5 text-5xl text-center font-extrabold uppercase text-[#db2d2e]">Please Login</h1>
        {/* form-start */}
        <form onSubmit={handleLogin} className="card-body text-center lg:w-1/2 md:h-3/4 mx-auto">
          <div className="form-control">
            <label className="input-group w-full">
              <span className="w-1/3">Email</span>
              <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group w-full">
              <span className="w-1/3">Password</span>
              <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" className="input input-bordered w-full" />
              <span
              className="absolute mt-3 ml-[550px] bg-white text-xl"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#ce1446] text-white font-bold hover:text-[#ce1446] ">Login</button>
          </div>
          <Toaster></Toaster>
        </form>
        <div className="lg:w-1/3 md:h-3/4 mx-auto card-body mt-[-30px]">
          <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
            <FaGoogle></FaGoogle>
            Google
          </button>
        </div>
        {/* form-end */}
        <div>
          <p className="text-center">
            Do not have an Account ?{" "}
            <Link to="/register" className="text-blue-600 underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
