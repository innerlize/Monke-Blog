import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
	return (
		<div>
			<Link to={`/post/${post.id}`}>
				<div>
					<img src={post.img} width={300} />
				</div>

				<div>
					<h3>{post.title}</h3>
					<p>Posted by Lulu</p>
					<p>2 days ago</p>
				</div>
			</Link>
		</div>
	);
};

export default Post;
