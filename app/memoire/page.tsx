import data from '@/private/database.json'

export default function Memoire() {
    let memoire = data.memoire
    return(
        <div className="mt-6 ml-2">
            <h1>Mémoire :</h1>
            {memoire.map((p) => (<div className= "mt-6"> {p} </div>))}
        </div>
    )
}
