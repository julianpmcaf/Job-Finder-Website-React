import { FaSearch, FaSearchLocation, FaBriefcase, FaDollarSign, FaAngleDown } from "react-icons/fa";
import { useState } from 'react';
import MultiRangeSlider from "multi-range-slider-react";

export default function Filters({from, to, data}) {
    const [currMin, setCurrMin] = useState(from)
    const [currMax, setCurrMax] = useState(to)
    const handleInput = (e) => {
        setCurrMin(e.minValue)
        setCurrMax(e.maxValue)
        data(e.minValue, e.maxValue)
    };
    return (
        <div className="bg-black">
            <div id="content" className="flex">
                <div className="w-1/6 flex gap-4 justify-center border-r border-slate-700 my-8">
                    <FaSearch color="white" className="my-auto"/>
                    <p className="text-white my-auto">
                        Designer
                    </p>
                    <FaAngleDown color="white" className="my-auto"/>
                </div>
                <div className=" w-1/6 flex gap-4 justify-center border-r  border-slate-700 my-8">
                    <FaSearchLocation color="white" className="my-auto"/>
                    <p className="text-white my-auto">
                        Work Location
                    </p>
                    <FaAngleDown color="white" className="my-auto"/>
                </div>
                <div className="w-1/6 flex gap-4 justify-center border-r  border-slate-700 my-8">
                    <FaBriefcase color="white" className="my-auto"/>
                    <p className="text-white my-auto">
                        Expierience
                    </p>
                    <FaAngleDown color="white" className="my-auto"/>
                </div>
                <div className="w-1/6 flex gap-4 justify-center border-r border-slate-700 my-8">
                    <FaDollarSign color="white" className="my-auto"/>
                    <p className="text-white my-auto">
                        Per Month
                    </p>
                    <FaAngleDown color="white" className="my-auto"/>
                </div>
                <div className="w-2/6  text-center my-8">
                    <div className="flex justify-center">
                        <p className="text-white w-5/12">
                            Salary Range
                        </p>
                        <p className="text-white w-5/12">
                            {currMin} - {currMax}
                        </p>
                    </div>
                   
                    <MultiRangeSlider
                        style={{ border: "none", marginLeft: "10px", boxShadow: "none" }}
                        min={from}
                        max={to}
                        ruler={false}
                        label={false}
                        onInput={(e) => {
                            handleInput(e);
                        }}
                        barInnerColor="#95CFF6"
                    />
                
                </div>
            </div>
        </div>
    )
}