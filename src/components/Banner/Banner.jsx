import { Link } from 'react-router-dom';
import maggi from '../../assets/maggi.jpg'
import "./style.css"

const Banner = () => {
  
    return (
      <div className="flex justify-between w-full bg-[#495F57] h-[420px] md:h-[500px] text-[#f4f6f8] ">
        <div className="max-w-7xl pl-10 md:pl-20 mx-auto flex justify-between">
          <div className="w-full md:w-1/2">
            <h1 className=" text-5xl md:text-7xl  text-yellow-400 gradient-text mt-14 md:mt-20 ">
              Little Lemon{" "}
            </h1>
            <p className="mt-1 md:mt-2">Chicago</p>
            <p className="w-full md:w-1/2 mt-10">
              We are a family owned mediteranean restaurant focused on
              traditional recipes served with a modern twist.
            </p>
            <Link to={"/reserve"}>
              <button className="btn bg-yellow-400 mt-10 hover:bg-yellow-600 border-none text-white">
                Reserve a Table
              </button>
            </Link>
          </div>
          <div className="hidden lg:block h-auto mt-10 mx-auto w-1/2 ">
            <img src={maggi} alt="" className="h-[400px]  mx-auto rounded-lg" />
          </div>
        </div>
      </div>
    );
};

export default Banner;