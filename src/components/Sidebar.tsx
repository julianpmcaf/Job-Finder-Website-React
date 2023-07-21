import { useState } from "react";

export default function Sidebar({data}) {

    

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target)
        data(formData)
    }
    
    return (
        <div>
            <div className="bg-black rounded-3xl p-4 ">
                <h1 className="text-white px-5 py-14 font-bold text-3xl">Get Your best profession with Job Finder</h1>
                <div className="bg-blue-400  rounded-3xl text-center font-semibold text-lg py-1">
                    <button type="button" >Learn more</button>
                </div>
            </div>
            <div className="my-10 border-r">
                <h3 className="font-semibold py-5">Filters</h3>
                <h3 className="font-medium text-sm py-2 text-slate-400">Working Schedule</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="checkbox" id="full_time" name="full_time" value="full_time"
                                 />
                        <label htmlFor="huey" className="px-3">Full Time</label>
                    </div>
                    <div>
                        <input type="checkbox" id="part_time" name="part_time" value="part_time"
                                />
                        <label htmlFor="huey" className="px-3">Part Time</label>
                    </div>
                    <div>
                        <input type="checkbox" id="internship" name="internship" value="internship"
                                />
                        <label htmlFor="huey" className="px-3">Internship</label>
                    </div>
                    <div>
                        <input type="checkbox" id="project_work" name="project_work" value="project_work"
                                />
                        <label htmlFor="huey" className="px-3">Project Work</label>
                    </div>
                    <div>
                        <input type="checkbox" id="volunteering" name="volunteering" value="volunteering"
                                />
                        <label htmlFor="huey" className="px-3">Volunteering</label>
                    </div>
                    <h3 className="font-medium text-sm py-2 pt-8 text-slate-400">Employment Type</h3>
                    <div>
                        <input type="checkbox" id="remote" name="remote" value="remote"/>
                        <label htmlFor="huey" className="px-3">Remote</label>
                    </div>
                    <div>
                        <input type="checkbox" id="on_site" name="on_site" value="on_site"/>
                        <label htmlFor="huey" className="px-3">On-Site</label>
                    </div>
                    <div>
                        <input type="checkbox" id="hybrid" name="hybrid" value="hybrid"/>
                        <label htmlFor="huey" className="px-3">Hybrid</label>
                    </div>
                    <button className="bg-black text-white px-4 py-1 mt-5 rounded-xl" type="submit">
                    Filter
                </button>
                </form>

                
            </div>
        </div>
    )
}