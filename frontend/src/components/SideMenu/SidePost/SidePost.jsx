import React from 'react';
import { Link } from 'react-router-dom';

const SidePost = ({ post }) => {
	return (
		<Link to={`/post/${post.id}`}>
			<div>
				<div>
					<img src={post.img} width={300} />
					<h4>{post.title}</h4>
					<p>Posted by Erica</p>
					<p>2 days ago</p>
				</div>
			</div>
		</Link>
	);
};

export default SidePost;
