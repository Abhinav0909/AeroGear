import { Link } from "react-router-dom";
import { Popover } from "@headlessui/react";
import logout from '../assests/logout.png'
import { auth } from "../firebase";
const Navbar = () => {
const signOut = async() =>{
await auth.signOut();
}
    return (
        <div className='w-full  '>
            <Popover className=' bg-navbar p-4 md:pl-10 pl-2 font-mono font-bold' >
                    <div className="flex justify-between md:text-xl text-lg">
                        <Link to = '/'>AeroGear</Link>
                        <Popover.Group as = "nav" className="md:space-x-6 space-x-2 flex md:text-lg text-base">
                             <Link to='/'>Home</Link>
                            <Link to='/aircraft'>Aircraft</Link>
                            <Link to ='/chat'>Chat</Link>
                           <div onClick={signOut}>
                               <img src={logout} alt='logout' className='w-6 h-6'></img>
                           </div>
                         </Popover.Group> 
                    </div>
                </Popover>
        </div>
    )
}

export default Navbar;
