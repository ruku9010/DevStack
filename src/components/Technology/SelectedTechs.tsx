import { ImCross } from "react-icons/im";
import type { Technology } from "../types/Types";

interface TechnologiesSelectedProps {
  techlist: Technology[];
  selectedTechs: Technology[];
}

const SelectedTechs = ({ techlist, selectedTechs }: TechnologiesSelectedProps) => {
  return (
    <>
      {/* <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm space-y-4 transition-all  duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gray-200">
        <h3 className="text-xl font-bold text-gray-800">Your Stack</h3>
        <p className="textDesign"> No technologies selected yet</p>
        <div className="textDesign text-center outline-dashed outline-gray-300 w-full rounded-3xl py-10 ">
          Your stack is empty
        </div>
      </div> */}

      <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm space-y-4 transition-all  duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gray-200">
        <h3 className="text-xl font-bold text-gray-800">Your Stack</h3>
        {selectedTechs.length === 0 ? (
          <p className="textDesign"> No technologies selected yet</p>
        ) : (
          <p className="textDesign"> {selectedTechs.length} technology selected</p>
        )}
        <div>
          {techlist.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center justify-around space-x-2 textDesign outline outline-gray-300 w-full rounded-2xl py-3 mb-2"
            >
              <div>
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-6 h-6 object-contain"
                />
                <div>
                  <h4 className="font-medium text-md">{tech.name}</h4>
                  <p className="text-sm text-gray-500">{tech.category}</p>
                </div>
              </div>
              
                <ImCross />
           
            </div>
          ))}
                  <button className="btn btn-error w-full">Delete All</button>

        </div>
      </div>
    </>
  );
};

export default SelectedTechs;
