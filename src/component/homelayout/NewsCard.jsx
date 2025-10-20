import { FaEye, FaShareAlt, FaBookmark, FaStar } from 'react-icons/fa';
import { IoBookmarksOutline } from 'react-icons/io5';


const NewsCard = ({ news }) => {
	const { title, rating, total_view, author, thumbnail_url, details, tags } =
		news;

	const formattedDate = new Date(news.author.published_date).toLocaleDateString(
		'en-US',
		{ year: 'numeric', month: 'long', day: 'numeric' }
	);

	return (
		<div className="card bg-base-100 shadow-xl  rounded-2xl overflow-hidden">
			{/* Header */}
			<div className="flex bg-base-200 justify-between items-center p-4">
				<div className="flex items-center gap-3">
					<img
						src={author?.img}
						alt={author?.name}
						className="w-10 h-10 rounded-full border"
					/>
					<div>
						<h2 className="font-semibold text-gray-800">{author?.name}</h2>
						<p className="text-sm text-gray-500">{formattedDate}</p>
					</div>
				</div>
				<div className="flex gap-3 text-gray-500 text-lg">
					<FaBookmark className="cursor-pointer hover:text-primary" />
					<FaShareAlt className="cursor-pointer hover:text-primary" />
				</div>
			</div>

			{/* Title */}
			<div className="px-4">
				<h3 className="text-xl font-bold text-gray-800 mb-3 leading-snug">
					{title}
				</h3>
			</div>

			{/* Thumbnail */}
			<figure>
				<img
					src={thumbnail_url}
					alt={title}
					className="w-full h-60 object-cover"
				/>
			</figure>

			{/* Description */}
			<div className="p-4 text-gray-700 text-sm">
				<p>
					{details.slice(0, 200)}...
					<span className="text-orange-500 font-medium cursor-pointer hover:underline">
						Read More
					</span>
				</p>

				{/* Tags */}
				<div className="mt-3 flex flex-wrap gap-2">
					{tags.map((tag, index) => (
						<span
							key={index}
							className="badge badge-outline text-xs font-medium text-gray-600"
						>
							#{tag}
						</span>
					))}
				</div>
			</div>

			<div className="divider my-0" />

			{/* Footer */}
			<div className="flex justify-between items-center px-4 py-3">
				<div className="flex items-center gap-2 text-orange-500">
					{[...Array(5)].map((_, i) => (
						<FaStar
							key={i}
							className={`${
								i < Math.round(rating.number)
									? 'text-orange-400'
									: 'text-gray-300'
							}`}
						/>
					))}
					<span className="text-gray-700 font-medium">{rating.number}</span>
				</div>

				<div className="flex items-center gap-2 text-gray-600">
					<FaEye />
					<span className="text-sm">{total_view}</span>
				</div>
			</div>
		</div>
	);
};

export default NewsCard;
