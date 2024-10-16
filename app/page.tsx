

import React from "react";
import HomeImage from "@/components/HomeImage";
import HomeIntro from "@/components/HomeIntro";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Tomas\'s portfolio',
};

export default function Home() {
  return (
    
    <div className="container mx-auto h-full">

      <div className="flex flex-col md:flex-row items-center justify-between xl:pt-8 xl:pb-24">

        <div>
          <HomeIntro />
        </div>

        <div>
          <HomeImage />
        </div>
      </div>
      
    </div>

  );
}

