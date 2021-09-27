import { Link } from "react-router-dom";
import Aircraft from "../../assests/aircraft1.png";

const Aircrafts = () => {
  return (
    <div className="pt-16 ">
      <div className="text-center">
        <h1 className="pb-2 text-5xl font-semibold tracking-wide font-mono lg:text-6xl">
          Welcome to Aerogear
        </h1>
        <div className="inline-flex h-1 bg-indigo-500 rounded-full w-72"></div>
      </div>

      <div className="flex flex-wrap flex-col-2 justify-around w-full px-16 py-8">
        <Link to="/aircraft/jet1">
          <div className="m-8">
            <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
              <img
                className="pb-8 border-4 bg-white border-blue-600 rounded-lg"
                alt=""
                src={Aircraft}
              />
            </div>
          </div>
        </Link>

        <Link to="/jet2">
          <div className="m-8">
            <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
              <img
                className="pb-8 border-4 bg-white border-blue-600 rounded-lg"
                alt=""
                src={Aircraft}
              />
            </div>
          </div>
        </Link>

        <Link to="/jet3">
          <div className="m-8">
            <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
              <img
                className="pb-8 border-4 bg-white border-blue-600 rounded-lg"
                alt=""
                src={Aircraft}
              />
            </div>
          </div>
        </Link>

        <Link to="/jet4">
          <div className="m-8">
            <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
              <img
                className="pb-8 border-4 bg-white border-blue-600 rounded-lg"
                alt=""
                src={Aircraft}
              />
            </div>
          </div>
        </Link>

        <Link to="/jet5">
          <div className="m-8">
            <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
              <img
                className="pb-8 border-4 bg-white border-blue-600 rounded-lg"
                alt=""
                src={Aircraft}
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Aircrafts;
