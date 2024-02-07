import { Helmet } from 'react-helmet-async';
import { BsGoogle, BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
          <Helmet>
    <title>{`TaskZen | Log In`}</title>
</Helmet>
<div className="hero min-h-screen md:p-[80px] ">
  <div className="hero-content flex-col lg:flex-row w-full h-full border-[3px] border-gray-300 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
    <div className="text-center lg:text-left">
     <img src='https://media.istockphoto.com/id/1318100811/vector/login-screen-icon-on-white-background.jpg?s=612x612&w=0&k=20&c=zOPj77UDogeF8dO1vs5kAS3NE2GgHgazDCJWxR1FGUw=' className='lg:w-[80%] mx-auto' alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm ">
      <form  className="card-body text-red-500">
     
        <h1 className="text-red-500 font-bold text-3xl mx-auto">LOGIN</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-red-500 font-semibold">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-red-500 font-semibold">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="mb-6 input input-bordered" required />
          
          
        
        </div>
        <div><input className="border w-full  p-2 rounded-lg cursor-pointer" type="submit" value="Submit" /></div>
         
        <p className="text-red-500 mx-auto">New here? <Link to="/register"><span className="font-bold">Create a new account</span></Link></p>
        <div className="flex flex-col items-center gap-3 mx-auto">
            <p className="text-red-500 font-semibold">Or sign in with</p>
            <div className="flex gap-6">
                <div  className="rounded-full p-2 border-2 border-red-500 hover:border-red-500 text-red-500 hover:text-red-500 duration-200">
              
                    <BsGoogle/>
                </div>
                <div className="rounded-full p-2 border-2 border-red-500 hover:border-red-500 text-red-500 hover:text-red-500 duration-200">
                    <BsGithub/>
                </div>
            </div>
        </div>
       
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;