import Head from "next/head";
import {
  AiFillFacebook,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import profile from "../public/profile.png";
import Image from "next/image";
import web1 from "../public/tribute.jpg";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Markie&apos;s Portfolio</title>
        <meta name="Markie" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-sans text-xl">Developed By</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-blue-600 font-bold dark:text-blue-400 md:text-6xl">
              Marc Espiritu
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              I love you Werneil Wegmann gwapo
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              A student that has nothing to do.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400"><a 
            href="https://www.facebook.com/mamark12x">
              <AiFillFacebook />
            </a></div>
            <div className="mx-auto bg-gradient-to-b rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={profile} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              This is my Freecodecamp activities.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className={"rounded-lg object-cover"}
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
           </div>
        </section>
      </main>
    </div>
  );
}
