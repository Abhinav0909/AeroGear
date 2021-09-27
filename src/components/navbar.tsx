import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Popover,Transition } from "@headlessui/react";
import logout from '../assests/logout.png'
import { auth } from "../firebase";
const Navbar = () => {
const signOut = async() =>{
await auth.signOut();
}
    return (
        <div className='w-full  justify-between '>
            <Popover className=' bg-navbar p-4 pl-10 font-mono font-bold' >
                {({open})=>(
                    <div className="flex justify-between">
                        <Link to = '/'>AeroGear</Link>
                        <Popover.Group as = "nav" className="space-x-6 flex">
                             <Link to='/'>Home</Link>
                            <Link to='/aircraft'>Aircraft</Link>
                            <Link to ='/chat'>Chat</Link>
                           <div onClick={signOut}>
                               <img src={logout} alt='logout' className='w-6 h-6'></img>
                           </div>
                         </Popover.Group> 
                    </div>
                )}
                </Popover>
        </div>
    )
}

export default Navbar;
