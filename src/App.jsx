import { useState } from "react";
import NEXORA from "./assets/NEXORA.png?react";
import {AiOutlineWhatsApp} from "react-icons/ai"
import {FaPhoneAlt} from "react-icons/fa"
import {TiSocialLinkedin} from "react-icons/ti"
import {BiLogoGmail} from "react-icons/bi"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full min-h-screen bg-[#060719]">
      <div className="w-full flex flex-col items-center justify-center p-10">
        <div className="w-28 h-28 aspect-square rounded-full overflow-hidden">
          <img src={NEXORA} />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-white py-5 text-2xl font-bold">
            Nexora Creations
          </h2>
          <h2 className="text-white">Build your premium grade</h2>
          <h2 className="text-white">Website | Mobile App | Software</h2>
        </div>
        <div className="w-full max-w-2xl grid grid-cols-2 md:grid-cols-4 gap-2 pt-5 text-white">
          <div className="flex border-2 border-gray-700 rounded-lg p-2 items-center">
            <AiOutlineWhatsApp size={30}/>
            <h2 className="px-2 font-semibold">WhatsApp</h2>
          </div>
          <div className="flex border-2 border-gray-700 rounded-lg p-2 items-center">
            <FaPhoneAlt size={20}/>
            <h2 className="px-2 font-semibold">7887557175</h2>
          </div>
          <div className="flex border-2 border-gray-700 rounded-lg p-2 items-center">
            <TiSocialLinkedin size={30}/>
            <h2 className="px-2 font-semibold">Linkedin</h2>
          </div>
          <div className="flex border-2 border-gray-700 rounded-lg p-2 items-center">
            <BiLogoGmail size={30}/>
            <h2 className="px-2 font-semibold">Gmail</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
