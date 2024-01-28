import React from "react";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGoogle, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
        <div className="modal-box">
          <div className="modal-action mt-0">
            <form
              className="card-body"
              method="dialog"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h3 className="font-bold text-lg">Please Login First!</h3>

              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  // defaultValue="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  // required
                  {...register("email")}
                />
              </div>

              {/* password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  // required
                />
                <label className="label mt-1">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-base"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  value="login"
                  className="btn bg-[#f00] text-white hover:text-black"
                >
                  Login
                </button>
              </div>

              <p className="mt-6 text-center my-2">
                {" "}
                Dont have an account?{" "}
                <Link
                  to="/signup"
                  className="link link-hover text-base text-red-700"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
          {/* social sign in */}
          <div className="text-center space-x-3 mb-5">
            <button className="btn btn-circle hover:bg-[#F00] hover:text-white">
              <FaGoogle />
            </button>
            <button className="btn btn-circle hover:bg-[#F00] hover:text-white">
              <FaFacebook />
            </button>
            <button className="btn btn-circle hover:bg-[#F00] hover:text-white">
              <FaPhone />
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;