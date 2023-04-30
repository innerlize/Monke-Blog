import React from 'react';
import SidePost from './SidePost/SidePost.jsx';
import useFetch from '../../hooks/useFetch.js';

const SideMenu = ({ category }) => {
	const { posts } = useFetch('/posts/?category=', category);

	return (
		<article>
			<h3>Other posts you may like</h3>

			<div>
				{posts?.map(post => {
					return <SidePost key={post.id} post={post} />;
				})}
			</div>
		</article>
	);
};

export default SideMenu;
