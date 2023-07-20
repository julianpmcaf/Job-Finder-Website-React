import { FaCity, FaWrench, FaBell } from "react-icons/fa";
import {NavbarProps} from '@/models/Interfaces';
import { useUrl } from 'nextjs-current-url';

export default function Navbar(props: { navItems: NavbarProps[], location:string }) {
    
    const { href: currentUrl, pathname } = useUrl() ?? {};
    
    return (
        <div className="bg-black border-b border-slate-700">
            <div id="content" className='flex'>
                <div className='flex w-7/12'>
                    <p className="text-white font-bold my-auto ">
                        Job Finder
                    </p>
                    <div>
                        <ul className="flex text-white pl-20 ">
                            {props.navItems.map(navItem => (
                                <li key={navItem.id} className={'px-4 font-light py-8 hover:border-b-4 hover:border-white ' + (pathname === navItem.link ? 'border-b-4 border-white' : '')}>
                                    <a href={ navItem.link }>{navItem.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='flex w-5/12 justify-end'>
                    <div className='flex pr-40 gap-5 my-auto'>
                        <FaCity color='white' className="my-auto"/>
                        <h3 className='text-white '>{props.location}</h3>
                    </div>
                    <div className='border p-3 mx-2 rounded-full my-auto'>
                        <FaWrench color='white'/>
                    </div>
                     <div className='border p-3 mx-2 rounded-full my-auto'>
                        <FaBell color='white'   />
                    </div>
                </div>
            </div>
        </div>
    )
}