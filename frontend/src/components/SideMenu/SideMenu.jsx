import React from 'react';
import posts from '../../tests/mocks/posts.js';
import SidePost from './SidePost/SidePost.jsx';

const SideMenu = () => {
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
