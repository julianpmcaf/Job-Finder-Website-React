import { CardProps } from "@/models/Interfaces"
import Card from "./Card"
export default function CardList(props: { cards: CardProps[] }) {
    const cards = props.cards
    
    return (
        <div>
            <h1 className="pb-10 font-semibold text-3xl">Recommended jobs</h1>
            <div className="flex flex-wrap gap-5">
                {cards?.map(cardApi => 
                    <div className="w-80">
                        <Card card={cardApi} />
                    </div>
                )}

            </div>
         </div>
    )
}