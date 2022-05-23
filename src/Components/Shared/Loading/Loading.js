import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center space-x-2 animate-bounce my-14">
            <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
            <div className="w-8 h-8 bg-green-400 rounded-full"></div>
            <div className="w-8 h-8 bg-black rounded-full"></div>
        </div>
    );
};

export default Loading;