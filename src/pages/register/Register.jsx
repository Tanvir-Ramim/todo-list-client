import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BsGoogle } from 'react-icons/bs';

const Register = () => {
    return (
        <>
        <Helmet>
          <title>{`TaskZen | Sign Up`}</title>
        </Helmet>
        <div className="hero min-h-screen md:p-[80px]" >
          <div className="hero-content flex-col lg:flex-row-reverse w-full h-full border-[3px] border-gray-300 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
            <div className="text-center lg:text-left">
              <img src='https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7865.jpg' className='lg:w-[80%] mx-auto' alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm ">
              <form  className="card-body">
                <h1 className="text-red-500 font-bold text-3xl mx-auto">SignUp</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-red-500 font-semibold">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                   
                    name="name"
                    className="input input-bordered"
                    required
                  />
                  
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-red-500 font-semibold">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                 
                    name="email"
                    className="input input-bordered"
                    required
                  />
                
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-red-500 font-semibold">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                   
                    name="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    className="btn bg-red-500 border-none text-black"
                  ></input>
                </div>
                <p className="text-red-500 mx-auto">
                  Already registered? <Link to="/login"><span className="font-bold">Go to log in</span></Link>
                </p>
                <div className="flex flex-col items-center gap-3 mx-auto">
                  <p className="text-red-500 font-semibold">Or sign up with</p>
                  <div className="flex gap-6">
                    <div  className="rounded-full p-2 border-2 border-red-500 hover:border-red-500 text-red-500 hover:text-red-500 duration-200">
        
                      <BsGoogle />
                    </div>
                   
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
};

export default Register;