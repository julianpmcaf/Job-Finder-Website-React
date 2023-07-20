export default function Sidebar() {
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
                {/* TODO: EDIT THE FOR AND VALUE + NAME */}
                <form>
                    <div>
                        <input type="checkbox" id="huey" name="drone" value="huey"
                                 />
                        <label htmlFor="huey" className="px-3">Full Time</label>
                    </div>
                    <div>
                        <input type="checkbox" id="huey" name="drone" value="huey"
                                />
                        <label htmlFor="huey" className="px-3">Part Time</label>
                    </div>
                    <div>
                        <input type="checkbox" id="huey" name="drone" value="huey"
                                />
                        <label htmlFor="huey" className="px-3">Internship</label>
                    </div>
                    <div>
                        <input type="checkbox" id="huey" name="drone" value="huey"
                                />
                        <label htmlFor="huey" className="px-3">Project Work</label>
                    </div>
                    <div>
                        <input type="checkbox" id="huey" name="drone" value="huey"
                                />
                        <label htmlFor="huey" className="px-3">Volunteering</label>
                    </div>
                </form>
                <h3 className="font-medium text-sm py-2 pt-8 text-slate-400">Employment Type</h3>
                {/* TODO: EDIT THE FOR AND VALUE + NAME */}
                <form>
                    <div>
                        <input type="checkbox" id="huey" name="drone" value="huey"
                                 />
                        <label htmlFor="huey" className="px-3">Full Time</label>
                    </div>
                    <div>
                        <input type="checkbox" id="huey" name="drone" value="huey"
                                />
                        <label htmlFor="huey" className="px-3">Part Time</label>
                    </div>
                    <div>
                        <input type="checkbox" id="huey" name="drone" value="huey"
                                />
                        <label htmlFor="huey" className="px-3">Internship</label>
                    </div>
                    <div>
                        <input type="checkbox" id="huey" name="drone" value="huey"
                                />
                        <label htmlFor="huey" className="px-3">Project Work</label>
                    </div>
                    <div>
                        <input type="checkbox" id="huey" name="drone" value="huey"
                                />
                        <label htmlFor="huey" className="px-3">Volunteering</label>
                    </div>
                </form>
            </div>
        </div>
    )
}