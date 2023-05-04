import React from 'react';
import { Link } from 'react-router-dom';
import { truncateText } from '../../../api/api.js';
import moment from 'moment';

const SidePost = ({ post }) => {
	return (
		<Link
			to={`/post/${post.id}`}
			onClick={() => (document.documentElement.scrollTop = 0)}>
			<div>
				<div>
					<img src={'../uploads/' + post.img} width={200} />
					<h4>{post.title}</h4>
					<p>{truncateText(post.description, 50)}</p>
					<p>Posted {moment(post.date).fromNow()}</p>
				</div>
			</div>
		</Link>
	);
};

export default SidePost;
