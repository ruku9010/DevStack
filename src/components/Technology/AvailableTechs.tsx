import { type Dispatch, type SetStateAction } from "react";
import type { Technology } from "../types/Types";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

const badgeColors: Record<string, string> = {
  Popular: "bg-blue-100 text-blue-700",
  "Top SQL": "bg-purple-100 text-purple-700",
  Essential: "bg-green-100 text-green-700",
  "Fast Growing": "bg-yellow-100 text-yellow-700",
  Useful: "bg-cyan-100 text-cyan-700",
  Fast: "bg-orange-100 text-orange-700",
  Containers: "bg-indigo-100 text-indigo-700",
};

interface TechnologiesCardProps {
  tech: Technology;
  selectedTechs: Technology[];
  setSelectedTechs: Dispatch<SetStateAction<Technology[]>>;
}

const AvailableTechs = ({
  tech,
  selectedTechs,
  setSelectedTechs,
}: TechnologiesCardProps) => {
  
  const handleAddToStack = () => {
    const alreadySelected = selectedTechs.some(
      (selectedTech) => selectedTech.id === tech.id
    );

    if (alreadySelected) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }

    setSelectedTechs([...selectedTechs, tech]);

    toast.success(`${tech.name} has been added to your stack!`);
  };

  return (
    <div className="h-full flex flex-col">
      
      {/* Top Section */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-2">
          
          {/* Icon */}
          <div
            className="
              w-14 h-14
              shrink-0
              flex items-center justify-center
              rounded-xl
              bg-gray-50
              border border-gray-100
              transition-all duration-300
              group-hover:scale-110
              group-hover:bg-gray-100
            "
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-9 h-9 object-contain"
            />
          </div>

          {/* Name */}
          <h3 className="text-xl font-bold text-gray-800">
            {tech.name}
          </h3>
        </div>

        {/* Badge */}
        <span
          className={`
            shrink-0
            px-3 py-1
            rounded-full
            text-xs
            font-bold
            ${badgeColors[tech.badge]}
          `}
        >
          {tech.badge}
        </span>
      </div>

      {/* Description */}
      <p className="textDesign text-sm leading-6 mt-4 line-clamp-3">
        {tech.description}
      </p>

      {/* Category + Difficulty + Rating */}
      <div className="flex items-center justify-between gap-2 mb-3 mt-5">
        
        <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold">
          {tech.category}
        </span>

        <span className="text-xs font-medium text-gray-500">
          {tech.difficulty}
        </span>

        <span className="flex items-center gap-1 text-sm font-semibold text-gray-700">
          <FaStar className="text-[#FBBF24] text-md" />
          {tech.rating}
        </span>
      </div>

      {/* Button */}
      <button
        className="
          btn
          btn-neutral
          w-full
          rounded-xl
          border-0
          mt-auto
          transition-all duration-300
          group-hover:scale-[1.02]
        "
        onClick={handleAddToStack}
      >
        {selectedTechs.some(
          (selectedTech) => selectedTech.id === tech.id
        )
          ? "Added to Stack"
          : "Add to Stack"}
      </button>
    </div>
  );
};

export default AvailableTechs;