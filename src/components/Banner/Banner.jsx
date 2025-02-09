import maggi from "../../assets/maggi.jpg";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-gray-900 h-[600px]">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-transparent z-10" />

      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${maggi})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="w-full lg:w-1/2 space-y-8">
          {/* Restaurant Name */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 font-serif">
              Little Lemon
            </h1>
            <p className="text-gray-400 text-xl tracking-wide">CHICAGO</p>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl">
            We are a family owned Mediterranean restaurant focused on
            traditional recipes served with a modern twist.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full transition-all transform hover:scale-105 duration-200">
              Reserve a Table
            </button>
            <button
              onClick={() => navigate("/order")}
              className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 font-semibold rounded-full transition-all"
            >
              View Menu
            </button>
          </div>

          {/* Social Proof */}
          <div className="pt-8 border-t border-gray-700">
            <div className="flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-yellow-400">4.8</p>
                <p className="text-gray-400 text-sm">500+ Reviews</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-yellow-400">15+</p>
                <p className="text-gray-400 text-sm">Years of Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full filter blur-3xl" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-400/5 rounded-full filter blur-2xl" />
    </div>
  );
};

export default Banner;
