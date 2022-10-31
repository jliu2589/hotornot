import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1>Hot or Not</h1>
      <p>Hottest Hot Ones hot sauce?</p>
      <div className="container mx-auto bg-gray-100 flex flex-row">
        <div className="w-50 h-50 bg-blue-200"></div>
        <div className="w-50 h-50 bg-red-200"></div>
      </div>
    </div>
  );
}
