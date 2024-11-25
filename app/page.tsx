import Image from "next/image";

export default function Home() {
  return (
    <div className="m-4 p-2 w-full pb-5">
      <div>
        <h1 className="text-blue-800 text-center font-semibold text-3xl py-10">
          Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs
        </h1>
        <p className="text-zinc-900 font-light text-[20px]">
          The pace of technological change is accelerating. Big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, directly connecting to customers by eliminating the middleman, and developing vertical metaverses. This program aims to train this new breed of billion-dollar solopreneurs.
        </p>
      </div>

      <div className="m-5 flex flex-row justify-between space-x-5">
        <div className="w-1/3 h-80 relative rounded-lg">
          <Image src="/1.jpg" fill style={{ objectFit: "cover" }} className="rounded-3xl" alt="Pic1 description" />
        </div>
        <div className="w-1/3 h-80 relative rounded-lg">
          <Image src="/2.jpg" fill style={{ objectFit: "cover" }} className="rounded-3xl" alt="Pic2 description" />
        </div>
        <div className="w-1/3 h-80 relative rounded-lg">
          <Image src="/3.jpg" fill style={{ objectFit: "cover" }} className="rounded-3xl" alt="Pic3 description" />
        </div>
      </div>

      <div className="m-5 flex flex-row justify-center space-x-5">
        <div className="w-1/2 h-[600px] relative">
          <Image src="/4.jpg" fill style={{ objectFit: "cover" }} className="rounded-3xl" alt="Pic4 description" />
        </div>
        <div className="w-1/2 h-[600px] relative">
          <Image src="/5.jpg" fill style={{ objectFit: "cover" }} className="rounded-3xl" alt="Pic5 description" />
        </div>
      </div>

      <div className="flex justify-center space-x-2">
        <div className="w-[100px] h-[4px] bg-gray-400"></div>
        <div className="w-[100px] h-[4px] bg-slate-400"></div>
        <div className="w-[100px] h-[4px] bg-gray-400"></div>
        <div className="w-[100px] h-[4px] bg-gray-400"></div>
      </div>
    </div>
  );
}
