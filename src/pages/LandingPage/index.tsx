import HomeImg from "../../assests/hero.jpg";
const Home = () => {
  return (
    <div className='flex w-full h-screen '>
      <div className="flex-2 text-center  my-auto font-serif space-y-4 bg-heroBg bg-opacity-20 py-10">
        <h4 className="font-bold text-3xl ">AeroGear</h4>
        <p className="px-20 font-medium text-lg">
          Chem Learn is an AR-based web platform where students come across and
          learn about various complex chemical structures. Learn with the help
          of interactive 3D Models and AR
        </p>
        </div>
      <div className="mt-20 ">
        <img src={HomeImg}  alt="img" className="w-screen "></img>
      </div>
    </div>
  );
};

export default Home;
