import { use, useState } from "react";
import type { Technology } from "../types/Types";
import AvailableTechs from "./AvailableTechs";
import SelectedTechs from "./SelectedTechs";

interface TechsProps {
  techs: Promise<Technology[]>;
}

const Technologies = ({ techs }: TechsProps) => {
  const techlist = use(techs);

  const [selectedTechs, setSelectedTechs] = useState<Technology[]>([]);

  return (
    <div className="w-[90%] md:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
      
      {/* Available Technologies */}
      <div className="md:col-span-2 w-full justify-center lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {techlist.map((tech) => (
          <div
            key={tech.id}
            className="
              group
              h-full
              bg-white
              rounded-2xl
              border border-gray-100
              p-5
              shadow-sm
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-xl
              hover:border-gray-200
            "
          >
            <AvailableTechs
              tech={tech}
              selectedTechs={selectedTechs}
              setSelectedTechs={setSelectedTechs}
            />
          </div>
        ))}
      </div>

      {/* Selected Technologies */}
      <div className="md:col-span-1">
        <SelectedTechs
          techlist={techlist}
          selectedTechs={selectedTechs}
          setSelectedTechs={setSelectedTechs}
        />
      </div>
    </div>
  );
};

export default Technologies;