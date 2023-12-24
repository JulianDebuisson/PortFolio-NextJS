import Image from 'next/image'
import data from '@/private/database.json'

export default function Page() {
    let acceuille = data.Acceuille
  return (
      <main>
              <div className={"flex justify-around flex-row text-xl mr-[18%] ml-[18%] mt-28"}>
                  <p className={"flex items-center "}>{acceuille}</p>
                  <Image className={"rounded-2xl"} src={"/img/DebuissonJulian.jpg"} alt="Image de Julian Debuisson" width={250}
                         height={150}></Image>
              </div>
      </main>
  )
}
