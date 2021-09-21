import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Popover,Transition } from "@headlessui/react";
const Navbar = () => {
    return (
        <div className='w-full  justify-between '>
            <Popover className=' bg-navbar p-4 pl-10 font-mono font-bold' >
                {({open})=>(
                    <div className="flex justify-between">
                        <Link to = '/'>AeroGear</Link>
                        <Popover.Group as = "nav" className="space-x-3">
                             <Link to='/'>Home</Link>
                            <Link to='/aircraft'>Aircraft</Link>
                            <Link to ='/chat'>Chat</Link>
                         </Popover.Group> 
                    </div>
                )}
                </Popover>
        </div>
    )
}

export default Navbar;
