import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
	getReduxUserData,
	updateProgressState,
	updateCubesState,
} from '../Redux/user.slice';
import { Post } from '../Utilities/DataService';
import { RiDashboardFill } from 'react-icons/ri';
import { PiBookOpenTextFill } from 'react-icons/pi';
import {
	FaCodeMerge,
	FaGraduationCap,
	FaAward,
	FaAngleDown,
} from 'react-icons/fa6';
import { FaRegEdit } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';
import { MdContactSupport } from 'react-icons/md';
import { LuLogOut } from 'react-icons/lu';
import Modules from '../Components/Profile/Modules';
import Dashboard from '../Components/Profile/Dashboard';
import Logout from '../Components/Profile/Logout';
import Spinner from '../Components/General/Spinner';
import fetchParams from '../Utilities/fetchParams';

const Profile = () => {
	const userDataMain = useSelector(getReduxUserData);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [activeTab, setActiveTab] = useState(1);
	const [dropdown, setDropdown] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (!userDataMain.isLoggedIn) {
			navigate('/login?redirect=/profile');
		}
	}, [userDataMain, navigate]);

	useEffect(() => {
		const hash = window.location.hash;
		const params = fetchParams(hash);
		if (Object.keys(params).length > 0 && params.tab) {
			if (params.tab === 'dashboard') setActiveTab(1);
			if (params.tab === 'modules') setActiveTab(2);
			if (params.tab === 'projects') setActiveTab(3);
			if (params.tab === 'certifications') setActiveTab(4);
			if (params.tab === 'badges') setActiveTab(5);
			if (params.tab === 'customize') setActiveTab(6);
			if (params.tab === 'notifications') setActiveTab(7);
			if (params.tab === 'support') setActiveTab(8);
			if (params.tab === 'logout') setActiveTab(9);
		}
	}, []);

	useEffect(() => {
		const getUserCubes = async () => {
			if (userDataMain.userData) {
				const apiUrl = '/api/user/cubes';
				const apiData = {
					uid: userDataMain.userData.uid,
				};
				const response = await Post(apiUrl, apiData);
				if (response.success) {
					dispatch(updateCubesState({ userCubes: response.data.cubes }));
				}
			}
		};

		const getUserProgress = async () => {
			if (userDataMain.userData) {
				const apiUrl = '/api/learn/progress';
				const apiData = {
					uid: userDataMain.userData.uid,
				};
				const response = await Post(apiUrl, apiData);
				if (response.success) {
					dispatch(updateProgressState({ userProgress: response.data }));
					getUserCubes();
				}
				setIsLoading(false);
			} else {
				setIsLoading(false);
			}
		};

		getUserProgress();
	}, [userDataMain.userData, dispatch]);

	const profNavs = [
		{
			id: 1,
			name: 'Dashboard',
			icon: <RiDashboardFill size={24} />,
		},
		{
			id: 2,
			name: 'Modules',
			icon: <PiBookOpenTextFill size={24} />,
		},
		{
			id: 3,
			name: 'Projects',
			icon: <FaCodeMerge size={24} />,
		},
		{
			id: 4,
			name: 'Certifications',
			icon: <FaGraduationCap size={24} />,
		},
		{
			id: 5,
			name: 'Badges',
			icon: <FaAward size={24} />,
		},
		{
			id: 6,
			name: 'Customize',
			icon: <FaRegEdit size={24} />,
		},
		{
			id: 7,
			name: 'Notifications',
			icon: <IoIosNotifications size={26} />,
		},
		{
			id: 8,
			name: 'Support',
			icon: <MdContactSupport size={24} />,
		},
		{
			id: 9,
			name: 'Logout',
			icon: <LuLogOut size={24} />,
		},
	];

	return (
		<div className='flex justify-start gap-10 pt-5'>
			<div className='hidden bg-primary-700 rounded w-64 h-fit sticky px-2 top-20 py-5 md:flex flex-col gap-3'>
				{profNavs.map((nav) => {
					return (
						<div
							key={nav.id}
							onClick={() => setActiveTab(nav.id)}
							className={
								activeTab === nav.id
									? 'flex gap-5 bg-primary hover:bg-primary-400/50 py-2 px-3 duration-200 rounded-md items-center cursor-pointer'
									: 'flex hover:bg-primary/50 duration-200 py-2 px-3 rounded-md gap-5 items-center cursor-pointer'
							}>
							{nav.icon}
							<span>{nav.name}</span>
						</div>
					);
				})}
			</div>

			<div className='w-full pb-20'>
				<div className='md:hidden bg-primary-700 mb-4 p-2 sticky top-14 rounded-sm'>
					<div
						className='flex justify-around items-center cursor-pointer'
						onClick={() => setDropdown(!dropdown)}>
						<p className='font-semibold'>OPTIONS</p>
						<FaAngleDown
							size={22}
							className={
								dropdown ? 'text-primary-200 rotate-180' : 'text-primary-200'
							}
						/>
					</div>
					{dropdown && (
						<div className='pt-5 flex flex-col gap-2'>
							{profNavs.map((nav) => {
								return (
									<div
										key={nav.id}
										onClick={() => {
											setActiveTab(nav.id);
											setDropdown(!dropdown);
										}}
										className={
											activeTab === nav.id
												? 'flex gap-3 bg-primary hover:bg-primary-400/50 py-2 px-3 duration-200 rounded-md items-center cursor-pointer'
												: 'flex hover:bg-primary/50 duration-200 py-2 px-3 rounded-md gap-3 items-center cursor-pointer'
										}>
										{nav.icon}
										<span>{nav.name}</span>
									</div>
								);
							})}
						</div>
					)}
				</div>

				{isLoading ? (
					<div className='flex px-3 py-6 bg-primary-700 rounded-sm justify-center w-full'>
						<Spinner width={25} />
					</div>
				) : (
					<>
						{activeTab === 1 && <Dashboard />}
						{activeTab === 2 && <Modules />}
						{activeTab === 9 && <Logout />}
					</>
				)}
			</div>
		</div>
	);
};

export default Profile;
