import React from "react";
// import { useSelector, useDispatch } from 'react-redux';
import //{ increment,
// incrementAsync,
// selectCount,} from 
"../authSlice";
import { Link } from "react-router-dom";

export default function Login() {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();

  return (
    <>
      {/*
          */}
      <div className="flex h-full min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-950">
        <div className="mt-20 rounded-s-full sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className=" rounded-full mx-auto h-36 w-auto"
            src="https://t4.ftcdn.net/jpg/05/45/20/91/360_F_545209174_jxpjIELCh3djtsHLYCQqXUTZPAby0rCN.jpg"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-yellow-50">
            Log in
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-yellow-50"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 p-2 text-gray-900 font-semibold shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-yellow-50"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="password"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block font-semibold p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>
          </form>

          <p className="mt-16 text-center text-sm text-gray-500">
            Not have registerd ?{" "}
            <Link to='/Signup'
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Create New Account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
