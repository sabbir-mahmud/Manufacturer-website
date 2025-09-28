const Summary = () => {
    const date = new Date();

    return (
        <div className="mt-9 ">
            <div className="bg-white text-primary border border-gray-200 shadow rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                    {/* Stat Item */}
                    <div className="flex flex-col items-center sm:items-start bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                            <div className="stat-figure text-secondary mr-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 sm:w-8 sm:h-8 stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="stat-title font-medium text-sm sm:text-base">
                                Daily Order
                            </div>
                        </div>
                        <div className="stat-value text-xl sm:text-2xl font-bold">
                            31K
                        </div>
                        <div className="stat-desc text-gray-500 text-xs sm:text-sm">
                            {date.toDateString()}
                        </div>
                    </div>

                    {/* Duplicate other stats with same structure */}
                    <div className="flex flex-col items-center sm:items-start bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                            <div className="stat-figure text-secondary mr-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 sm:w-8 sm:h-8 stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="stat-title font-medium text-sm sm:text-base">
                                Daily Completion Rate
                            </div>
                        </div>
                        <div className="stat-value text-xl sm:text-2xl font-bold">
                            99.9%
                        </div>
                        <div className="stat-desc text-gray-500 text-xs sm:text-sm">
                            {date.toDateString()}
                        </div>
                    </div>

                    <div className="flex flex-col items-center sm:items-start bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                            <div className="stat-figure text-secondary mr-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 sm:w-8 sm:h-8 stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                    ></path>
                                </svg>
                            </div>
                            <div className="stat-title font-medium text-sm sm:text-base">
                                Total Client
                            </div>
                        </div>
                        <div className="stat-value text-xl sm:text-2xl font-bold">
                            4200
                        </div>
                        <div className="stat-desc text-gray-500 text-xs sm:text-sm">
                            ↗︎ 400 (22%)
                        </div>
                    </div>

                    <div className="flex flex-col items-center sm:items-start bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                            <div className="stat-figure text-secondary mr-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 sm:w-8 sm:h-8 stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                                    ></path>
                                </svg>
                            </div>
                            <div className="stat-title font-medium text-sm sm:text-base">
                                Pending Delivery
                            </div>
                        </div>
                        <div className="stat-value text-xl sm:text-2xl font-bold">
                            120900
                        </div>
                        <div className="stat-desc text-gray-500 text-xs sm:text-sm">
                            ↘︎ 90 (14%)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;
