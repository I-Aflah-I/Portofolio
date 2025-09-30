"use client";

import { useEffect, useState } from "react";
import { FaInstagram, FaTiktok, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Portfolio() {
  const [progress, setProgress] = useState({
    jungler: 0,
    goldlane: 0,
    explaner: 0,
    midlane: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      setProgress({
        jungler: 93,
        goldlane: 86,
        explaner: 77,
        midlane: 72,
      });
    }, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-white">
      <nav className="flex justify-between items-center px-12 py-6 text-lg font-medium">
        <h1 className="text-2xl font-bold">Portofolio</h1>
        <div className="flex gap-8">
          <a href="#home" className="hover:text-cyan-400 transition">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>
      </nav>
      <section id="home" className="flex flex-col md:flex-row items-center justify-center px-8 md:px-20 py-20 gap-12">
        <div className="max-w-lg text-center md:text-left py-11 mt-3">
          <h2 className="text-2xl text-gray-300">Hello, It's Me</h2>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Laudzai Zuhdi Aflah</h1>
          <h3 className="text-xl text-gray-400 mt-2">
            Player <span className="text-cyan-400">Mobile Legends</span>
          </h3>
          <p className="text-gray-400 mt-4">Road to immortal 200</p>
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <a href="https://www.instagram.com/zzafflhh" target="_blank" className="p-3 rounded-full bg-gray-700 hover:bg-cyan-500 transition"><FaInstagram size={20} /></a>
            <a href="https://www.tiktok.com/@katsuniken" target="_blank" className="p-3 rounded-full bg-gray-700 hover:bg-cyan-500 transition"><FaTiktok size={20} /></a>
            <a href="https://github.com/I-Aflah-I" target="_blank" className="p-3 rounded-full bg-gray-700 hover:bg-cyan-500 transition"><FaGithub size={20} /></a>
            <a href="https://wa.me/qr/DVP73UPNVL3YA1" target="_blank" className="p-3 rounded-full bg-gray-700 hover:bg-cyan-500 transition"><FaWhatsapp size={20} /></a>
          </div>
          <div className="mt-6">
            <a href="#about" className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition shadow-lg">More About Me</a>
          </div>
        </div>
        <div className="relative">
          <div className="w-52 h-52 md:w-64 md:h-64 rounded-full border-4 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/40">
            <img src="Assets/avatar.png" alt="Avatar" className="w-full h-full rounded-full object-cover" />
          </div>
          <div className="absolute inset-0 rounded-full animate-pulse border-4 border-cyan-500 blur-md opacity-40"></div>
        </div>
      </section>
      <section id="about" className="flex flex-1 items-center justify-end px-16 min-h-screen">
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="relative w-80 h-80 rounded-full flex items-center justify-center border-4 border-cyan-500 shadow-[0_0_50px_#22d3ee] overflow-hidden">
            <img src="Assets/alpa.png" alt="Avatar" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="text-right max-w-xl ml-auto">
            <h1 className="text-5xl font-bold mb-6 leading-snug text-cyan-400">About Me</h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Saya Lahir di Samarinda pada tanggal 06 Juli 2009, Sekarang saya berumur 16 tahun, Saya seorang pelajar di SMK Telkom Makassar, Saya Tinggal di Taman Sudiang Indah, Saya anak pertama dari dua bersaudara, Hobi saya bermain game salah satunya Mobile Legends.
            </p>
          </div>
        </div>
      </section>
      <section id="services" className="flex flex-col items-center justify-center px-16 py-24 bg-grey-900">
        <h1 className="text-5xl font-bold mb-16">Olahraga</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl w-full">
          {[
            { title: "Futsal", desc: "Saya suka bermain futsal karna dari futsal lah saya dapat berkembang dari skill, maupun kerja sama tim." },
            { title: "Badminton", desc: "Badminton menjadi salah satu olahraga yang saya sukai juga karena dari badminton lah saya bisa membuat mood saya menjadi lebih baik." },
            { title: "Basket", desc: "Basket juga menjadi salah satu favorit saya karena basket itu bisa dibilang olahraga ribet tapi seru." },
          ].map((card, i) => (
            <div key={i} className="bg-grey-800 rounded-2xl p-8 shadow-[0_0_25px_#22d3ee] h-96 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-4">{card.title}</h2>
                <p className="text-gray-400 text-base leading-relaxed">{card.desc}</p>
              </div>
              <button className="mt-6 py-3 px-6 bg-cyan-500 rounded-full font-semibold text-white text-base shadow-[0_0_25px_#22d3ee] transition">
                Contact Me
              </button>
            </div>
          ))}
        </div>
      </section>
      <section id="skills" className="flex flex-col items-center justify-center px-16 py-24 bg-grey-900">
        <h1 className="text-5xl font-bold mb-20">My <span className="text-cyan-400">Skill</span> In <span className="text-cyan-400">Mobile Legends</span> </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl w-full">
          <div className="flex flex-col">
            <h2 className="text-3xl font-semibold mb-8 text-cyan-400 text-center">Role Skills</h2>
            {[
              { name: "Jungler", value: progress.jungler },
              { name: "Goldlane", value: progress.goldlane },
              { name: "Explaner", value: progress.explaner },
              { name: "Midlane", value: progress.midlane },
            ].map((skill, i) => (
              <div key={i} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-cyan-400 font-semibold">{skill.value}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-cyan-500 h-3 rounded-full transition-all duration-700"
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            {[
              { name: "Map Control", value: 85 },
              { name: "Objective", value: 90 },
              { name: "Team Fight", value: 85 },
              { name: "Rotation", value: 87 },
            ].map((skill, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="relative w-28 h-28">
                  <svg className="w-28 h-28 transform -rotate-90">
                    <circle cx="56" cy="56" r="50" stroke="gray" strokeWidth="10" fill="none" />
                    <circle
                      cx="56"
                      cy="56"
                      r="50"
                      stroke="#22d3ee"
                      strokeWidth="10"
                      fill="none"
                      strokeDasharray={2 * Math.PI * 50}
                      strokeDashoffset={2 * Math.PI * 50 - (2 * Math.PI * 50 * skill.value) / 100}
                      className="transition-all duration-700"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-white font-bold">{skill.value}%</span>
                </div>
                <p className="mt-3 text-gray-300">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
