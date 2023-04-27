import React from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import { Link } from 'react-router-dom';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

const Single = () => {
	return (
		<section>
			<article>
				<img src='https://images.pexels.com/photos/927497/pexels-photo-927497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />

				<div>
					<div>
						<img src='https://images.pexels.com/photos/2624077/pexels-photo-2624077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
						<div>
							<span>Skra</span>
							<p>Posted 2 days ago</p>
						</div>
					</div>

					<div>
						<div>
							<Link to='/write?edit=1'>
								<AiFillEdit />
							</Link>
						</div>
						<div>
							<Link>
								<AiFillDelete />
							</Link>
						</div>
					</div>
				</div>

				<div>
					<h3>Lorem ipsum dolor sit amet</h3>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
						mattis eros vitae enim sollicitudin dignissim ac vitae dolor. Orci
						varius natoque penatibus et magnis dis parturient montes, nascetur
						ridiculus mus. Nam ipsum nibh, viverra eget malesuada sed, bibendum
						non elit. Nulla congue ex ut sapien euismod laoreet. Sed consequat
						ac ipsum in ultricies. Suspendisse cursus quis enim vel pulvinar.
						Cras elementum augue eget eros porttitor egestas. Etiam sed felis
						laoreet, iaculis eros nec, pharetra dolor. Mauris et lorem non nisl
						aliquet dapibus vitae et quam. Maecenas quis suscipit erat, non
						tincidunt tellus. Phasellus nec eleifend ligula. Nullam sollicitudin
						nisi nec nulla pretium, eu ultrices nisl elementum. Mauris lacinia
						maximus orci et aliquam. Integer tincidunt quis ligula sit amet
						auctor. Pellentesque ipsum eros, varius ac laoreet non, cursus et
						ipsum. Pellentesque habitant morbi tristique senectus et netus et
						malesuada fames ac turpis egestas. Morbi finibus euismod varius.
						Pellentesque bibendum rutrum ligula, id sagittis nibh efficitur at.
						Praesent est odio, porta eu porttitor tempor, ullamcorper ac augue.
						Sed dictum id quam a tempor. Ut ac justo in erat gravida consequat
						sit amet pretium massa. Suspendisse sit amet mauris eu dui suscipit
						finibus ac non diam. Etiam et viverra nulla. Nunc sed lobortis nisl.
						Sed eros sapien, maximus nec gravida id, pellentesque sit amet est.
						Pellentesque tristique dignissim ipsum et euismod. Aliquam nec massa
						in turpis sagittis laoreet vitae nec turpis. Praesent eget luctus
						dui. Fusce ut est mi. Maecenas suscipit viverra ullamcorper. Morbi a
						ipsum massa. Maecenas vitae iaculis mi, a tincidunt ex. Sed quis
						mauris consequat, pulvinar orci sollicitudin, volutpat arcu.
						Interdum et malesuada fames ac ante ipsum primis in faucibus. In
						pretium sem sem, sit amet blandit nibh vulputate sed. Donec ut
						posuere enim. Mauris convallis massa sed tincidunt tincidunt.
						Maecenas in libero in urna dapibus vehicula a non enim. Donec
						rhoncus ex eu augue mattis fringilla. Aenean sed turpis sit amet
						lorem congue mattis et iaculis turpis. Integer et accumsan sapien.
						Ut id varius massa. Nullam magna augue, porta vitae interdum ut,
						cursus et tellus. Integer tincidunt blandit purus, nec lobortis eros
						sodales ut. Nunc vel justo nec risus imperdiet ullamcorper. Morbi
						fringilla, magna luctus posuere euismod, lacus ipsum molestie eros,
						vitae pretium lorem diam at dui. Morbi augue ligula, eleifend id
						metus ac, egestas rutrum turpis. Sed pellentesque euismod nisl, non
						dapibus metus. Pellentesque scelerisque felis odio, eu faucibus
						ligula tristique a. Phasellus fringilla est non nibh vestibulum
						euismod. Donec porta aliquet elementum. Donec et odio luctus,
						faucibus sem id, pretium felis. Suspendisse porta odio mattis
						finibus blandit. Vestibulum id finibus ex, sed ullamcorper ipsum.
						Suspendisse cursus ligula libero, sed iaculis arcu fringilla non.
						Cras dictum scelerisque metus, vel bibendum neque laoreet porttitor.
						Nulla non neque dictum turpis faucibus tincidunt.
					</p>
				</div>
			</article>

			<SideMenu />
		</section>
	);
};

export default Single;
