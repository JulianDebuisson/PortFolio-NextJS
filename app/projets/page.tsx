import data from '@/private/database.json'
import {card} from '@/app/projets/card'

export interface Projet{
    id: number;
    name: string;
    description: string;
    image: string|undefined;
}


export default function Page() {
    let projets:Projet[] = data.projets
    return (
            <div className={"grid grid-cols-2 justify-center p-6 gap-4"}>
                {projets.map((projet) => (card(projet)))}
            </div>
    )
}