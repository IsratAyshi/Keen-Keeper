

const loading = () => {
    return (
        <div className="flex flex-col gap-3 justify-center items-center h-[60vh]">
            <h3 className="text-2xl font-semibold text-[#1f2937]">Loading... </h3>

            <span className="loading loading-spinner loading-xl"></span>
        </div>
    );
};

export default loading;