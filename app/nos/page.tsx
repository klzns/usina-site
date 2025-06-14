import { NavBar } from "../NavBar";
import { Metadata } from "next";

const nosDescription =
  "Uma dupla afiada com 15 anos de experiência conjunta, amplificada por uma rede de técnicos e criativos, atuante em diversas áreas: comunicação, arte, e entretenimento, de equipes pequenas à grandes corporações.";

export const metadata: Metadata = {
  title: "Nós | Usina",
  description: nosDescription,
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL ?? ""),
  openGraph: {
    title: "Nós | Usina",
    description: nosDescription,
    images: ["/nos.jpg"],
  },
};

export default function Nos() {
  return (
    <div className="flex flex-col items-center h-screen">
      <VideoBackground />

      <NavBar currentPage="nos" />

      <div className="pb-50 z-10 w-full px-5">
        <p className="text-slate-100 font-paragraph uppercase text-xl leading-9 md:text-6xl md:leading-18 max-w-4xl text-pretty z-10 bg-blend-multiply text-shadow-lg">
          {nosDescription}
        </p>
      </div>
    </div>
  );
}

function VideoBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <video
        autoPlay
        playsInline
        muted
        loop
        className="object-cover w-full h-full"
      >
        <source src="/usina.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
