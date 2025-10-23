import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    console.log(news);
	return (
		<div className='space-y-5'>
			<img className='w-full h-[350px] object-cover p-3' src={news.image_url} alt="" />
			<h3>{news.title}</h3>
            <p>{news.details}</p>
            <Link className='btn btn-secondary' to={`/category/${news.category_id}`}>Back to Category</Link>
		</div>
	);
};

export default NewsDetailsCard;