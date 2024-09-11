// app/about/page.tsx
"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import { useEffect } from "react";


const font = Montserrat({ weight: "600", subsets: ["latin"] });

const AboutPage = () => {
  useEffect(() => {
    const card = document.querySelector('.motion-card');
    if (card) {
      card.classList.add('animate-fade-in');
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-background text-foreground">
      <h1 className={`text-4xl font-bold text-center mb-6 ${font.className}`}>
        About SaarthiAI
      </h1>
      <div className="max-w-2xl text-center mb-8">
        <Image
          src="/About.png" // Replace with your image path
          alt="About SaarthiAI"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
      <p className="text-lg text-gray-700 mb-4">
        SaarthiAI is your personal assistant powered by cutting-edge AI technology. 
        Our mission is to make your life easier by providing intelligent solutions tailored to your needs.
        Whether you're looking for assistance with daily tasks, creative projects, 
        or simply want to learn something new, SaarthiAI is here to help you every step of the way.
      </p>

      <p className="text-lg text-gray-700 mb-4">
        Join us on this exciting journey and discover the endless possibilities that AI can offer!
      </p>
      <div className="mt-8 p-4 bg-gray-200 rounded-lg shadow-md motion-card">
        <div className="flex items-center">
          <Image
            src="/Ram.png" // Replace with the actual developer image path
            alt="Ramakrushna Mohapatra"
            width={80}
            height={80}
            className="rounded-full mr-4"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Built by</h2>
            <p className="text-lg text-gray-800">Ramakrushna Mohapatra</p>
            <p className="text-sm text-gray-600">A passionate AI/ML engineer dedicated to creating innovative solutions. Founder of Growtechie</p>
          </div>
        </div>
      </div>
      <a href="/" className="mt-6 text-blue-600 hover:underline">
        Back to Home
      </a>
    </div>
  );
};

export default AboutPage;