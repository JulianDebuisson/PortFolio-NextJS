import Image from 'next/image'
import data from '@/private/database.json'

export default function Page() {
    let acceuille : string = data.Acceuille
    let email : string = data.email
  return (
      <main>
              <div className={"flex justify-around flex-row text-xl mr-[18%] ml-[18%] mt-28"}>
                  <div className={"flex flex-col justify-center "}>
                      <p>{acceuille}</p>
                      <p className="mt-6 ali"> Vous pouvez me contacter via l'email suivant : {email} </p>
                  </div>
                  <Image className={"rounded-2xl"} src={"/img/DebuissonJulian.jpg"} alt="Image de Julian Debuisson" width={250}
                         height={150}></Image>
              </div>
      </main>
  )
}
