import HomeImg from "../../assests/hero.jpg";
const Home = () => {
  return (
    <div className='flex md:flex-row flex-col w-full h-screen'>
      <div className="flex-2 text-center  my-auto font-serif space-y-4 bg-heroBg bg-opacity-20 py-10">
        <h4 className="font-bold text-3xl ">AeroGear</h4>
        <p className="px-20 font-medium text-lg">
          AeroGear is a web platform where students come across and
          learn about various plane's features. Learn with the help
          of interactive 3D Models.
        </p>
        </div>
      <div className="mt-20 md:my-auto ">
        <img src={HomeImg}  alt="img" className="w-screen "></img>
      </div>
    </div>
  );
};

export default Home;
