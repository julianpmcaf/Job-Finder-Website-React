import { CardProps } from "@/models/Interfaces";
import { useState } from "react";
import { FaBookmark, FaGithub, FaRegBookmark } from "react-icons/fa";
export default function Card(props: { card: CardProps }) {
    const [isSaved, setIsSaved] = useState(false)
    const card = props.card
    
    function Bookmark() {
        if (isSaved) {
            return <FaBookmark size={15}/>
        }
        else {
            return <FaRegBookmark size={15}/>
        }
    }

    return (
        <div className="rounded-xl p-1 border border-slate-300 " >
            <div className="rounded-xl p-3" style={{ backgroundColor: card.color }}>
                <div className="flex  my-auto justify-between">
                    <p className=" bg-white rounded-2xl px-2 py-1 font-medium my-auto">
                        { card.date }
                    </p> 
                    <div className="bg-white rounded-full p-2" onClick={() => setIsSaved(!isSaved)}>
                        
                        <Bookmark />
                    </div>
                </div>
                <div className="flex justify-between py-8">
                    <div>
                        <h3 className="text-sm">{card.company}</h3>
                        <h1 className="text-3xl">{ card.position}</h1>
                    </div>
                    <div className="bg-white rounded-full p-1 my-auto">
                        <FaGithub size={25}/>
                    </div>
                </div>
                <div className="flex gap-2 py-3 flex-wrap">
                    {card.tags?.map((tag, key) =>
                        <div key={key} className="border border-slate-700 rounded-xl px-2 text-sm">
                            {tag }
                        </div>
                    )}
                </div>
            </div>
            <div className="flex justify-between p-3">
                <div>
                    <h3>${card.rate}/hr</h3>
                    <h1 className="text-gray-400">{card.location}</h1>
                </div>
                <div className="bg-black text-white px-3 rounded-full p-1 my-auto">
                    <p>
                        Details
                    </p>
                </div>
            </div>
        </div>
    )
}