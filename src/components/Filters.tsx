import { FaSearch, FaSearchLocation, FaBriefcase, FaDollarSign } from "react-icons/fa";

export default function Filters() {
    return (
        <div className="bg-black">
            <div id="content" className="flex">
                <div className="w-1/6 flex gap-4 justify-center border-r border-slate-700 my-8">
                    <FaSearch color="white" className="my-auto"/>
                    <p className="text-white">
                        Designer
                    </p>
                </div>
                <div className=" w-1/6 flex gap-4 justify-center border-r  border-slate-700 my-8">
                    <FaSearchLocation color="white" className="my-auto"/>
                    <p className="text-white">
                        Work Location
                    </p>
                </div>
                <div className="w-1/6 flex gap-4 justify-center border-r  border-slate-700 my-8">
                    <FaBriefcase color="white" className="my-auto"/>
                    <p className="text-white">
                        Expierience
                    </p>
                </div>
                <div className="w-1/6 flex gap-4 justify-center border-r border-slate-700 my-8">
                    <FaDollarSign color="white" className="my-auto"/>
                    <p className="text-white ">
                        Per Month
                    </p>
                </div>
                <div className="w-2/6 flex gap-4 justify-center  my-8">
                    <p className="text-white">
                        Per Month
                    </p>
                </div>
            </div>
        </div>
    )
}