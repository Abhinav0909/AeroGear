import { Link } from "react-router-dom";
import grobG115Img from "../../assests/grobG115.png";
import cl604Img from "../../assests/cl604.png"
const Aircrafts = () => {
  return (
    <div className="pt-16 bg-blue-200">
      <div className="text-center">
        <h1 className="pb-2 text-5xl font-semibold tracking-wide font-mono lg:text-6xl">
          Welcome to Aerogear
        </h1>
        <div className="inline-flex h-1  rounded-full w-72 border-b-4 border-black"></div>
      </div>

      <div className="flex flex-wrap flex-col-2 justify-around w-full px-16 py-8">
        <Link to="/aircraft/jet1">
            <div className=" m-8 border-4  border-blue-600 rounded-lg w-72  cursor-pointer transition duration-500 transform hover:scale-105">
              <img
                alt=""
                src={grobG115Img}
              />
              <div className="flex justify-center font-bold p-1 text-xl bg-white">GrobG115</div>
            </div>
        </Link>

        <Link to="/aircraft/jet2">
        <div className=" m-8 border-4  border-blue-600 rounded-lg w-72  cursor-pointer transition duration-500 transform hover:scale-105">
              <img
                alt=""
                src={cl604Img}
              />
              <div className="flex justify-center font-bold p-1 text-xl bg-white">Cl604</div>
            </div>
        </Link>

        <Link to="/aircraft/jet1">
        <div className=" m-8 border-4  border-blue-600 rounded-lg w-72  cursor-pointer transition duration-500 transform hover:scale-105">
              <img
                alt=""
                src={grobG115Img}
              />
              <div className="flex justify-center font-bold p-1 text-xl bg-white">GrobG115</div>
            </div>
        </Link>

        <Link to="/aircraft/jet2">
        <div className=" m-8 border-4  border-blue-600 rounded-lg w-72  cursor-pointer transition duration-500 transform hover:scale-105">
              <img
                alt=""
                src={cl604Img}
              />
              <div className="flex justify-center font-bold p-1 text-xl bg-white">Cl604</div>
            </div>
        </Link>

        <Link to="/aircraft/jet1">
        <div className=" m-8 border-4  border-blue-600 rounded-lg w-72  cursor-pointer transition duration-500 transform hover:scale-105">
              <img
                alt=""
                src={grobG115Img}
              />
              <div className="flex justify-center font-bold p-1 text-xl bg-white">GrobG115</div>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Aircrafts;
