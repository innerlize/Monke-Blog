import React, { useContext } from 'react';
import SideMenu from '../../components/SideMenu/SideMenu.jsx';
import useSingleFetch from '../../hooks/useSingleFetch.js';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import moment from 'moment';
import { AuthContext } from '../../contexts/authContext.jsx';
import { handleDelete } from '../../api/api.js';

const Single = () => {
	const { id: postId } = useParams();
	const navigate = useNavigate();

	const { post } = useSingleFetch('/posts/', postId);

	const { currentUser } = useContext(AuthContext);

	return (
		<section>
			<article>
				<img src={post?.img} width='300px' />

				<div>
					<div>
						{post.userImage ? (
							<img src={post.userImage} width='50px' />
						) : (
							<div>no tiene imagen xd</div>
						)}
						<div>
							<span>{post.username}</span>
							<p>Posted {moment(post.date).fromNow()}</p>
						</div>
					</div>

					{currentUser?.username === post.username && (
						<div>
							<div>
								<Link to='/write?edit=1'>
									<AiFillEdit />
								</Link>
							</div>
							<div onClick={() => handleDelete(postId, navigate, '/')}>
								<Link>
									<AiFillDelete />
								</Link>
							</div>
						</div>
					)}
				</div>

				<div>
					<h3>{post.title}</h3>

					{post.description}
				</div>
			</article>

			<SideMenu category={post.category} />
		</section>
	);
};

export default Single;
