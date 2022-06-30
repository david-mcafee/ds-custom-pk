import { Link } from 'react-router-dom';
import { Card, Divider, Flex, View } from '@aws-amplify/ui-react';

const Nav = () => {
	return (
		<View position={'sticky'} top={0}>
			<Card width={'100%'} variation={'elevated'}>
				<Flex
					direction="row"
					alignItems="center"
					justifyContent="space-between"
				>
					<Flex alignItems="center" justifyContent="center">
						<Link to="/">Todo1</Link>
						<Divider orientation="vertical" />
						<Link to="/todo2">Todo2</Link>
						<Divider orientation="vertical" />
						{/* <Link to="/todo3">Todo3</Link>
						<Divider orientation="vertical" /> */}
						<Link to="/todo4">Todo4</Link>
						<Divider orientation="vertical" />
						<Link to="/todo5">Todo5</Link>
						<Divider orientation="vertical" />
						<Link to="/todo6">Todo6</Link>
						<Divider orientation="vertical" />
						<Link to="/todo7">Todo7</Link>
						<Divider orientation="vertical" />
						<Link to="/project11">Project11</Link>
						<Divider orientation="vertical" />
						{/* <Link to="/project12">Project12</Link>
						<Divider orientation="vertical" /> */}
						{/* <Link to="/project21">Project21</Link>
						<Divider orientation="vertical" /> */}
						{/* <Link to="/project22">Project22</Link>
						<Divider orientation="vertical" /> */}
						{/* <Link to="/post31">Post31</Link>
						<Divider orientation="vertical" /> */}
					</Flex>
				</Flex>
			</Card>
		</View>
	);
};

export default Nav;
