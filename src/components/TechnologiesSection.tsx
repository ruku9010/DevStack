

import type { Technology } from "./types/Types";
import { Suspense } from "react";
import Technologies from "./Technology/Technologies";



const fetchData = async (): Promise<Technology[]> => {
  const response = await fetch("/data.json");
  const data = await response.json();
  return data;
};

const techs = fetchData();

const TechnologiesSection = () => {

  return (
    <>
      <div className="ml-[7.5%] mb-20 space-y-2">
        <h2 className="text-4xl font-bold ">
          Explore the <span className="text-theme-gradient">Technologies</span>
        </h2>
        <p className="textDesign">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div></div>
      <Suspense fallback={<div>Loading...</div>}>
         <Technologies techs={techs} />
      </Suspense>
    </>
  );
};

export default TechnologiesSection;
