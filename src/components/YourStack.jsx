const YourStack = ({ stack, onRemove, onRemoveAll }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm sticky top-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-gray-900 font-bold text-lg">Your Stack</h2>
        {stack.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-xs text-red-400 hover:text-red-600 font-semibold transition-colors"
          >
            Remove All
          </button>
        )}
      </div>

      {/* Selected count */}
      {stack.length > 0 && (
        <p className="text-xs text-gray-400 mb-4">
          {stack.length} {stack.length === 1 ? "Technology" : "Technologies"} Selected
        </p>
      )}

      {/* Empty State */}
      {stack.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-3">
            <svg
              className="w-7 h-7 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          <p className="text-gray-400 text-sm font-medium">No technologies selected yet.</p>
          <p className="text-gray-300 text-xs mt-1">Your stack is empty.</p>
        </div>
      ) : (
        /* Stack Items */
        <div className="flex flex-col gap-3">
          {stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-3 bg-gray-50 rounded-lg p-3"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-8 h-8 object-contain flex-shrink-0"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://cdn-icons-png.flaticon.com/512/919/919851.png";
                }}
              />
              <div className="flex-1 min-w-0">
                <p className="text-gray-900 font-semibold text-sm truncate">{tech.name}</p>
                <p className="text-gray-400 text-xs">{tech.category}</p>
              </div>
              <button
                onClick={() => onRemove(tech.id)}
                className="text-gray-300 hover:text-red-500 transition-colors flex-shrink-0 ml-1"
                aria-label={`Remove ${tech.name}`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default YourStack;
