import React from 'react';
import { Link } from 'react-router-dom';

const SidePost = ({ post }) => {
	return (
		<div>
			<Link>
				<img src={post.img} />
				<h4>{post.title}</h4>
				<p>Posted by Erica</p>
				<p>2 days ago</p>
			</Link>
		</div>
	);
};

export default SidePost;
