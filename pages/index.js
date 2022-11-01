import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { data } from "../db.json";
import { getRandomSauce } from "../components/getRandomSauce";

export default function Home() {
  let a = data[getRandomSauce()];

  let b = data[getRandomSauce()];

  if (a === b) {
    let b = data[getRandomSauce()];
  }

  if (a !== b)
    return (
      <div h-screen w-screen flex flex-col justify-center>
        <h1 className="text-center">Hot or Not</h1>
        <p className="text-center">Hottest Hot Ones hot sauce?</p>
        <div className="border rounded p-8 flex justify-between">
          <div>
            <h2 className="text-center">{a.name}</h2>
            <div className="py-3">
              <Image src={a.image} alt={a.name} width={200} height={200} />
            </div>
          </div>
          <div>
            <h2>{b.name}</h2>
            <div className="py-3">
              <Image src={b.image} alt={b.name} width={200} height={200} />
            </div>
          </div>
        </div>
      </div>
    );
}
