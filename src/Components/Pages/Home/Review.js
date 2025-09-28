import { Star } from "lucide-react";
const Review = ({ review }) => {
    const stars = Array.from({ length: 5 }, (_, i) => i < review.starts);

    return (
        <div className="max-w-md mx-auto bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition duration-300 p-6 flex flex-col">
            <div className="flex items-center mb-4">
                <div className="avatar">
                    <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-2 overflow-hidden mr-4">
                        <img
                            src={review.img}
                            alt={review.name}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                        {review.name}
                    </h4>
                    <p className="text-sm text-gray-500">{review.location}</p>
                </div>
            </div>

            <div className="flex items-center mb-3">
                {stars.map((filled, i) => (
                    <Star
                        key={i}
                        className={`w-5 h-5 ${
                            filled
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                        }`}
                    />
                ))}
            </div>

            <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                {review.review}
            </p>
        </div>
    );
};

export default Review;
