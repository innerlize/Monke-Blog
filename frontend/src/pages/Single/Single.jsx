import React, { useContext } from 'react';
import SideMenu from '../../components/SideMenu/SideMenu.jsx';
import useSingleFetch from '../../hooks/useSingleFetch.js';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import moment from 'moment';
import { AuthContext } from '../../contexts/authContext.jsx';
import { handleDelete } from '../../api/api.js';
import styles from './Single.module.scss';

const Single = () => {
	const { id: postId } = useParams();
	const navigate = useNavigate();

	const { post } = useSingleFetch(
		'https://monke-blog-production.up.railway.app/api/posts/',
		postId
	);

	const { currentUser } = useContext(AuthContext);

	return (
		<section className={styles.section}>
			{post && (
				<article className={styles.content}>
					<img
						className={styles.img}
						src={
							post?.img?.includes('http://') || post?.img?.includes('https://')
								? post.img
								: '../uploads/' + post.img
						}
					/>

					<div className={styles.userWrapper}>
						<div className={styles.userInfo}>
							{post.userImage ? (
								<img className={styles.userImg} src={post.userImage} />
							) : (
								<img
									className={styles.userImg}
									src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
								/>
							)}
							<div className={styles.userPostInfo}>
								<span>{post.username}</span>
								<p>Posted {moment(post.date).fromNow()}</p>
							</div>
						</div>

						{currentUser?.username === post.username && (
							<div className={styles.postOptions}>
								<Link
									className={styles.edit}
									to={'/write?edit=' + post.id}
									state={post}>
									<div>
										<AiFillEdit />
									</div>
								</Link>
								<Link className={styles.delete}>
									<div onClick={() => handleDelete(postId, navigate, '/')}>
										<AiFillDelete />
									</div>
								</Link>
							</div>
						)}
					</div>

					<div className={styles.postContent}>
						<h1 className={styles.title}>{post.title}</h1>

						<div dangerouslySetInnerHTML={{ __html: post.description }}></div>
					</div>
				</article>
			)}

			<SideMenu singlePostData={post} />
		</section>
	);
};

export default Single;
