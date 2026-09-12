
import { use, useState} from "react";
import type { Technology } from "../types/Types";
import AvailableTechs from "./AvailableTechs";
import SelectedTechs from "./SelectedTechs";

interface TechsProps {
  techs: Promise<Technology[]>;
}

const Technologies = ({ techs }: TechsProps) => {
  const techlist = use(techs);

  const [selectedTechs, setSelectedTechs] = useState<Technology[]>([]);
  const [isadded, setIsAdded] = useState(false);

  return (
    <div className="w-[85%] mx-auto grid grid-cols-4 gap-4">
      <div className="col-span-3 grid grid-cols-3 gap-4 space-y-4 p-5">
        {techlist.map((tech) => (
        <div
          key={tech.id}
          className="group bg-white rounded-2xl border border-gray-100 p-5 shadow-sm space-y-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gray-200"
        >
        <AvailableTechs tech = {tech} selectedTechs = {selectedTechs} setSelectedTechs = {setSelectedTechs} isadded = {isadded} setIsAdded = {setIsAdded} />
         </div>
      ))}
      </div>
      <div className="col-span-1">
        <SelectedTechs techlist={techlist} selectedTechs={selectedTechs} setSelectedTechs={setSelectedTechs} isadded={isadded} setIsAdded={setIsAdded} />
      </div>
    </div>
  );
};

export default Technologies;
