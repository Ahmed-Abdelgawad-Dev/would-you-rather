import {Heading, Flex, Box, Spacer, Tooltip} from "@chakra-ui/react"
import {Link} from 'react-router-dom'

const Navbar = () => {
	return(
		<div>
			<Flex paddingEnd={5} paddingLeft={5} bg="#99ccff">
			    <Tooltip hasArrow label="Back to the dashboard">
				  <Link to='/'><Box p="2"><Heading w="90px" size="md">Home</Heading></Box></Link>
				</Tooltip>
				  <Tooltip hasArrow label="Create a new question">
					<Link to='/question'><Box p="2"><Heading size="sm">New Question</Heading></Box></Link>
				</Tooltip>
					<Tooltip hasArrow label="Enter the leader board">
					<Link to='/leaderboard'><Box p="2"><Heading size="sm">Leader Board</Heading></Box></Link>
				</Tooltip>
				<Spacer />
				<Box p="2"><Heading size="sm">User</Heading></Box>
				<Tooltip hasArrow label="Leave the page" bg="red.500">
					<Link to="/login"><Box p="2"><Heading size="sm">Logout</Heading></Box></Link>
				</Tooltip>
			</Flex>
		</div>
	)
}
export default Navbar;