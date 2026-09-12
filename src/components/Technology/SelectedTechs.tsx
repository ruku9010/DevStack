import { toast } from "react-toastify";
import type { Technology } from "../types/Types";
import SelectedTechsCard from "./SelectedTechsCard";
import type { Dispatch, SetStateAction } from "react";

interface TechnologiesSelectedProps {
  techlist: Technology[];
  selectedTechs: Technology[];
  setSelectedTechs: Dispatch<SetStateAction<Technology[]>>;
  isadded: boolean;
  setIsAdded: Dispatch<SetStateAction<boolean>>;
}

const SelectedTechs = ({
  techlist,
  selectedTechs,
  setSelectedTechs,
  isadded,
  setIsAdded,
}: TechnologiesSelectedProps) => {

  const handleDeleteAll = () => {
    toast.info("All technologies have been removed from your stack!");
    setSelectedTechs([]);

    //if the selectedTechs array is rmpty


  
  };

  return (
    <>
      <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm space-y-4 transition-all  duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gray-200">
        <h3 className="text-xl font-bold text-gray-800">Your Stack</h3>
        {selectedTechs.length === 0 ? (
          <div>
            <p className="textDesign"> No technologies selected yet</p>
            <div className="textDesign text-center outline-dashed outline-gray-300 w-full rounded-3xl py-10 ">
              Your stack is empty
            </div>
          </div>
        ) : (
          <div>
            <p className="textDesign">
              {selectedTechs.length} technology selected
            </p>

            <div>
              {techlist
                .filter((tech) => selectedTechs.includes(tech))
                .map((tech) => (
                  <SelectedTechsCard
                    key={tech.id}
                    tech={tech}
                    selectedTechs={selectedTechs}
                    setSelectedTechs={setSelectedTechs}
                    isadded={isadded}
                    setIsAdded={setIsAdded}
                  />
                ))}
              <button
                onClick={() => handleDeleteAll()}
                className="btn btn-error w-full"
              >
                Delete All
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SelectedTechs;
