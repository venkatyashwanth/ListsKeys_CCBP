import UserProfile from "./components/UserProfile";

const userDetails = {
	imageUrl: "https://randomuser.me/api/portraits/men/80.jpg",
	name: "Venkat Yashwanth",
	role: "Software Developer"
}

const App = () => <UserProfile userDetails={userDetails}/>

export default App;