import React from 'react';
import SidePost from './SidePost/SidePost.jsx';
import useFetch from '../../hooks/useFetch.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import styles from './SideMenu.module.scss';

const SideMenu = ({ singlePostData }) => {
	const { posts, loading } = useFetch(
		'https://monke-blog-production.up.railway.app/api/posts/?category=',
		singlePostData.category
	);

	return (
		<article className={styles.sideMenu}>
			<h3>Other posts you may like</h3>

			{loading && 'loading...'}
			<Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
				{posts?.map((post, index) => {
					if (singlePostData.id !== post.id && index <= 4) {
						return (
							<SwiperSlide key={post.id}>
								<SidePost post={post} />
							</SwiperSlide>
						);
					}
				})}
			</Swiper>
		</article>
	);
};

export default SideMenu;
