import React from 'react';
import SidePost from './SidePost/SidePost.jsx';
import useFetch from '../../hooks/useFetch.js';

const SideMenu = ({ singlePostData }) => {
	const { posts } = useFetch('/posts/?category=', singlePostData.category);

	return (
		<article>
			<h3>Other posts you may like</h3>

			<div>
				{posts?.map(post => {
					if (singlePostData.id !== post.id) {
						return <SidePost key={post.id} post={post} />;
					}
				})}
			</div>
		</article>
	);
};

export default SideMenu;
