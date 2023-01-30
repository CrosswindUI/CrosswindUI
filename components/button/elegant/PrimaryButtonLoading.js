const PrimaryButtonLoadingElegant = () => {
    return (
        <button
            disabled
            className="px-6 pt-3 pb-2 flex flex-row bg-slate-700 opacity-75 cursor-not-allowed text-sm text-slate-200 font-elegant uppercase tracking-wide"
        >
            {/* This SVG is just the same as the Spinner component, with the size reduced from h-5 w-5 to h-4 w-4 */}
            <svg
                className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                ></circle>
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
            </svg>
            buy now
        </button>
    );
};

export default PrimaryButtonLoadingElegant;
