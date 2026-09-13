const badgeColors = {
  Popular: "bg-blue-100 text-blue-600",
  Versatile: "bg-green-100 text-green-600",
  Fast: "bg-orange-100 text-orange-600",
  Starred: "bg-purple-100 text-purple-600",
  Boosted: "bg-teal-100 text-teal-600",
  "Top SQL": "bg-sky-100 text-sky-600",
  Cache: "bg-red-100 text-red-600",
  Ubiquitous: "bg-yellow-100 text-yellow-700",
  Essential: "bg-indigo-100 text-indigo-600",
  Robust: "bg-rose-100 text-rose-600",
  Picked: "bg-cyan-100 text-cyan-600",
  Containers: "bg-blue-100 text-blue-700",
};

const TechnologyCard = ({ tech, onAdd, isAdded }) => {
  const badgeClass =
    badgeColors[tech.badge] || "bg-gray-100 text-gray-600";

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Top row: Icon + Badge */}
      <div className="flex items-start justify-between">
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-10 h-10 object-contain"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://cdn-icons-png.flaticon.com/512/919/919851.png";
          }}
        />
        {tech.badge && (
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${badgeClass}`}>
            {tech.badge}
          </span>
        )}
      </div>

      {/* Name */}
      <h3 className="text-gray-900 font-bold text-lg leading-tight">{tech.name}</h3>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed flex-1">{tech.description}</p>

      {/* Category + Difficulty + Rating */}
      <div className="flex items-center gap-2 flex-wrap text-xs">
        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium">
          {tech.category}
        </span>
        <span className="text-gray-400">·</span>
        <span className="text-gray-500">{tech.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-semibold text-gray-700">
          <svg className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {tech.rating}
        </span>
      </div>

      {/* Add to Stack Button */}
      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`w-full py-2 rounded-lg text-sm font-semibold transition-all duration-200 mt-1 ${
          isAdded
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-gray-900 text-white hover:bg-gray-700 cursor-pointer"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;
