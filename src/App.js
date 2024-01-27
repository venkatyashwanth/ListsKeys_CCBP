import './App.css';
import UserProfile from "./components/UserProfile";

const userDetailsList = [
	{
		uniqueNo: 1,
		imageUrl: "https://randomuser.me/api/portraits/men/80.jpg",
		name: "Venkat Yashwanth",
		role: "Software Developer"
	},
	{
		uniqueNo: 2,
		imageUrl: "https://randomuser.me/api/portraits/men/81.jpg",
		name: "Sai Tejas",
		role: "Software Developer"
	},
	{
		uniqueNo: 3,
		imageUrl: "https://randomuser.me/api/portraits/women/82.jpg",
		name: "Sai Deepthi",
		role: "Software Developer"
	},
	{
		uniqueNo: 4,
		imageUrl: "https://randomuser.me/api/portraits/men/83.jpg",
		name: "Prasad Guru",
		role: "Software Developer"
	},
	{
		uniqueNo: 5,
		imageUrl: "https://randomuser.me/api/portraits/women/84.jpg",
		name: "Sai Sowjanya",
		role: "Software Developer"
	},
]


const App = () => (
	<div className="list-container">
		<h1 className="title">Users List</h1>
		<ul>
			{userDetailsList.map((eachItem) => (
				<UserProfile userDetails={eachItem} key={eachItem.uniqueNo}/>
			))}
		</ul>
	</div>
)

export default App;