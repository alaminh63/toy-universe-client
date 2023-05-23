import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Registration = () => {
  const { createUser, profileInfoUpdate,loading, SignInWithGooglePopup } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  if (loading) {
    return (
      <button className="btn loading bg-orange-500 w-full h-full flex items-center justify-center z-50">
        loading
      </button>
    );
  }
  const handleGoogle = () => {
    SignInWithGooglePopup()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        setUser(null);
        setSuccess("Acount Create Success");
      })
      .catch((error) => {
        console.error(error);
        setSuccess("");
        setError(error.message);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const displayName = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { displayName, photoURL, email, password };
    console.log(userInfo);

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        profileInfoUpdate(displayName, photoURL)
          .then(console.log("info updated"))
          .catch((error) => {
            console.error(error);
          });
        setError("");
        setUser(null);
        setSuccess("Acount Create Success");
      })
      .catch((error) => {
        console.error(error);
        setSuccess("");
        setError(error.message);
      });
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-vector/cerulean-blue-curve-frame-template_53876-99029.jpg?w=996&t=st=1684848119~exp=1684848719~hmac=a99cbc77defc36a7323f8f88bf91ef052f1500743b521c914610ae4c6a9062d4")',
      }}
      className="bg-[center_top_-1rem]   bg-cover bg-opacity-75 
    flex items-center justify-center min-h-screen bg-gray-100"
    >
      <div className="w-full max-w-sm p-6 bg-gradient-to-r from-sky-400  border-solid border-4  border-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-center">Please SignUp</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full px-3 py-2 border-4 border-orange-300 rounded-md focus:outline-none"
              placeholder="Enter your Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="photoURL"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              PhotoURL Link
            </label>
            <input
              name="photoURL"
              type="text"
              id="photoURL"
              className="w-full px-3 py-2 border-4 border-orange-300 rounded-md focus:outline-none"
              placeholder="Enter your PhotoURL Link"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border-4 border-orange-300 rounded-md focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full px-3 py-2 border-4 border-orange-300 rounded-md focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <p className="text-center ">{error}</p>
            <p className="text-center ">{success}</p>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 text-white border-2 border-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none"
            >
              Sign Up
            </button>
          </div>
          <div className="text-center my-4">
            <button
              onClick={handleGoogle}
              className="btn-block px-4 py-2 text-white border-2 bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none"
            >
              <div className="flex items-center justify-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                    class="w-4 h-4 mr-2"
                  >
                    <path
                      fill="currentColor"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    />
                  </svg>
                </div>
                <div>Google Login</div>
              </div>
            </button>
          </div>
        </form>
        <div>
          <Link to="/login">
            <button className="transition duration-200 w-full py-3.5 rounded-lg text-sm shadow-sm hover:shadow-lg  font-normal text-center">
              Already Have An Account?
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
