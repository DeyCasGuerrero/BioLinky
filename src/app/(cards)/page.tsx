"use client";
import ButtonComponent from "@/components/button/ButtonComponent";
import ComponentsInput from "@/components/cards/ComponentsInput";
import SelectComponent from "@/components/cards/SelectComponent";


export default function Home() {

  const socialMedias = ["twitter", "instagram",
    "linkedin",
    "facebook",
    "tiktok",
    "youtube",
    "github", "reddit",
    "pinterest",
    "telegram",
    "whatsapp",
    "discord",
    "twitch",
    "steam",
    "spotify",
    "patreon",
    "paypal"]

  return (
    <main className="min-h-screen w-full p-3 ">

      <section className="flex flex-col items-center gap-4 ">
        <h1 className="text-white text-center text-6xl font-bold">
          BioLinky
        </h1>



        <div className="bg-white px-4 flex flex-col  justify-between items-center py-6 bg-opacity-20 backdrop-blur-lg shadow-lg rounded-lg w-full ">
          <label htmlFor="sendImg" className="">
            <img className="h-32 w-32 rounded-full" src="https://yt3.googleusercontent.com/ytc/AGIKgqMcPPUESk90bV3jqJC_Yki2pGIFKCVe9kMk1Z5t=s900-c-k-c0x00ffffff-no-rj" alt="wa" />
            <input type="file" id="sendImg" className="hidden" />
          </label>
          <form onSubmit={()=>{}} className="w-full flex flex-col items-center gap-2">
            <SelectComponent names={socialMedias} />
            <ComponentsInput label="Link" placeholder="https://example.com" />

            <button type="submit" className="mt-10 font-semibold bg-green-500 p-2 cursor-pointer outline-none hover:bg-green-600 shadow-lg rounded-lg w-40 ">
              Enviar
            </button>
          </form>
        </div>

      </section>


    </main>
  )
}
