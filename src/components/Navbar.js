import {Heading, Flex, Box, Spacer, Link as ReactLink } from "@chakra-ui/react"
import {Link} from 'react-router-dom'

const Navbar = () => {
	return(
		<div>
			<Flex paddingEnd={5} paddingLeft={5} bg="#99ccff">
			  <Link to='/'><Box p="2"><Heading w="90px" size="md">Home</Heading></Box></Link>
				<Link to='/question'><Box p="2"><Heading size="sm">New Question</Heading></Box></Link>
				<Link to='/leaderboard'><Box p="2"><Heading size="sm">Leader Board</Heading></Box></Link>
				<Spacer />
				<Box p="2"><Heading size="sm">User</Heading></Box>
				<Link to="/login"><Box p="2"><Heading size="sm">Logout</Heading></Box></Link>
			</Flex><br/>
		</div>
	)
}
export default Navbar;