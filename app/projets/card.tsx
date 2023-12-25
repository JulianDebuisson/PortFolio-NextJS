import {Projet} from "@/app/projets/page";

export function card(projet:Projet){
    return(

        <div className="flex  items-center justify-center h-screen overflow-hidden max-h-[25rem] ">
            <div
                className="relative flex w-full flex-row rounded-xl bg-gray-900 bg-clip-border shadow-md max-h-[25rem]">
                <div
                    className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-gray-900 bg-clip-border max-h-[25rem] ">
                    <img
                        src={projet.image}
                        alt="image"
                        className="h-full w-full object-cover "
                    />
                </div>
                <div className="p-6">
                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased max-h-[25rem]">
                        {projet.contexte}
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {projet.name}
                    </h4>
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed antialiased">
                        {projet.description}
                    </p>
                </div>
            </div>
        </div>


    )
}