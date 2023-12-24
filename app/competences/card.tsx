import {Competence} from "@/app/competences/page";
import Image from "next/image";


export default function card(competence : Competence) {
    return (
        <div className="bg-gray-900 p-6 rounded-2xl max-h-80 max-w-[17rem]">
            <Image
                src={competence.image}
                className={"h-56 w-56"}
                alt="image"
                width={200}
                height={200}
            />
            <div>
                {competence.name}
            </div>
        </div>
    );
}

