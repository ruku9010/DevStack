import { ImCross } from "react-icons/im";
import type { Technology } from "../types/Types";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

interface SelectedTechsCardProps {
  tech: Technology;
  selectedTechs: Technology[];
  setSelectedTechs: Dispatch<SetStateAction<Technology[]>>;
}

const SelectedTechsCard = ({
  tech,
  selectedTechs,
  setSelectedTechs,
 
}: SelectedTechsCardProps) => {
  const handleRemoveTech = () => {
      
      const removeItem = selectedTechs.filter((selectedTech) => selectedTech.id !== tech.id)
      
      setSelectedTechs(removeItem);
      toast.info(`${tech.name} has been removed from your stack!`);

  };

  return (
    <>
    
    <div
      key={tech.id}
      className="flex items-center justify-around  textDesign outline outline-gray-300 w-full rounded-2xl py-3 mb-2"
    >
      
      <div className="flex gap-2 items-center">
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-6 h-6 object-contain"
        />
          <div>
            <h4 className="font-medium text-sm">{tech.name}</h4>
          <p className="text-[0.65rem] text-gray-500">{tech.category}</p>
          </div>
        </div>
      

      <button onClick={handleRemoveTech}>
        <ImCross className=""/>
      </button>
    </div>
   
    </>
  );
};

export default SelectedTechsCard;
