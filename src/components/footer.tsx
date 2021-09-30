import logo512 from "../assests/logo512.png"
import typescript from "../assests/typescript.png"
const Footer = () => {
    return (
        <div className=' w-full  py-4 px-2 text-justify justify-center mx-auto bg-footer text-white flex'>
                Code with 😎,<img src ={logo512} className="w-6 h-6 animate-spin" alt="reactImage"/>  and  <img src = {typescript} className="w-6 h-6" alt ="typescriptImage"/>by Abhinav Karforma
        </div>
    )
}

export default Footer;
