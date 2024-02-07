import { Component } from 'react';
import './App.css';
import UserProfile from "./components/UserProfile";

const initialUserDetailsList = [
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


class App extends Component {
	state = {
		searchInput: '',
		userDetailsList: initialUserDetailsList
	}
	onChangeSearchInput = (event) => {
		this.setState({
			searchInput: event.target.value.toLowerCase()
		})
	}

	deleteUser = (uniqueNo) => {
		const {userDetailsList} = this.state;
		const filteredUserData = userDetailsList.filter((each)=>
			each.uniqueNo !== uniqueNo
		)
		this.setState({
			userDetailsList: filteredUserData
		})
	}

	render() {
		const {searchInput, userDetailsList} = this.state;
		const searchResults = userDetailsList.filter((eachUser)=>
			eachUser.name.toLowerCase().includes(searchInput)
		)
		return (
			< div className="list-container" >
				<h1 className="title">Users List</h1>
				<input type="search" value={searchInput} onChange={this.onChangeSearchInput}/>
				<ul>
					{searchResults.map((eachItem) => (
						<UserProfile userDetails={eachItem} deleteUser={this.deleteUser} key={eachItem.uniqueNo} />
					))}
				</ul>
			</div >
		)
	}
}


export default App;