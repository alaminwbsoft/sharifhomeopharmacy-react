import { IoCallSharp } from "react-icons/io5";


const Topbar = () => {
    return (
        <div className="flex justify-between bg-secondary ">
            <div className="flex items-center space-x-2 py-2">
                <IoCallSharp className=" text-white" />
                <p className="text-white"><span className="text-gray-500">Call us now:</span> 09639-146636 [ 10am - 7pm]</p>
            </div>
            <div>
               <div className="flex "> 
               <div>Contacts us</div>
               <div>Sign In</div>
               </div>
            </div>
        </div>
    );
};

export default Topbar;