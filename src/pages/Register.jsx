import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { useForm } from "react-hook-form";
import GoogleLogin from "../components/login-registration/GoogleLogin";


const Register = () => {
  const { CreateUser } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    CreateUser(data.email, data.password)
    navigate("/")
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input type="First_name" placeholder="First Name" className="input input-bordered"
                {...register("first_name", { required: true })}
              />
              {errors.first_name && (<p className="text-red-500 text-sm font-light">First Name is required</p>)}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input type="Last_name" placeholder="Last Name" className="input input-bordered"
                {...register("last_name", { required: true })}
              />
              {errors.last_name && (<p className="text-red-500 text-sm font-light">Last Name is required</p>)}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (<p className="text-red-500 text-sm font-light">Email is required</p>)}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
              />
              {errors.password?.type === "required" && (<p className="text-red-500 text-sm font-light">Password is required</p>)}
              {errors.password?.type === "minLength" && (<p className="text-red-500 text-sm font-light">Password must have at least 6 characters</p>)}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input type="password" placeholder="confirm password" className="input input-bordered"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => {
                    if (watch('password') != value) {
                      return "Your passwords do not match"
                    }
                  }
                })}
              />
              {errors.confirmPassword && (<p className="text-red-500 text-sm font-light">Both password must match</p>)}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <select className="select select-bordered w-full max-w-xs"
                {...register('role', { required: true })}
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
              {errors.role && (
                <p className="text-red-500 text-sm font-light">You must select a role</p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-slate-700 text-white font-bold rounded-md 
                        border border-black" type="submit">Register</button>
            </div>
            <GoogleLogin />
            <p className="my-4 text-sm font-thin">Already Have An Account <Link to={"/login"} className="font-bold rounded-md text-slate-700">Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
