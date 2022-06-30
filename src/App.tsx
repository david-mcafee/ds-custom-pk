import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Amplify, Hub } from 'aws-amplify';
import Loader from './Components/Loader';
import Viewport from './Components/Viewport';
import Nav from './Components/Nav';
import ErrorBoundary from './Components/ErrorBoundary';
import { AmplifyProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);
Amplify.Logger.LOG_LEVEL = 'DEBUG';

const Todo = React.lazy(() => import('./Components/Todo'));
const Todo2 = React.lazy(() => import('./Components/Todo2'));
// const Todo3 = React.lazy(() => import('./Components/Todo3'));
const Todo4 = React.lazy(() => import('./Components/Todo4'));
const Todo5 = React.lazy(() => import('./Components/Todo5'));
const Todo6 = React.lazy(() => import('./Components/Todo6'));
const Todo7 = React.lazy(() => import('./Components/Todo7'));
const Project11 = React.lazy(() => import('./Components/Project11'));
// const Project12 = React.lazy(() => import('./Components/Project12'));
// const Project21 = React.lazy(() => import('./Components/Project21'));
// const Project22 = React.lazy(() => import('./Components/Project22'));
// const Post31 = React.lazy(() => import('./Components/Post31'));

function App() {
	const [ready, setReady] = useState(false);

	useEffect(() => {
		startHub();
	}, []);

	function startHub() {
		const removeListener = Hub.listen(
			'datastore',
			async ({ payload: { event } }) => {
				if (event === 'ready') {
					setReady(true);
					removeListener();
				}
			}
		);
	}

	return (
		<AmplifyProvider>
			<Router>
				<div>
					<Nav />
					<p
						data-test="datastore-ready"
						style={{
							display: 'flex',
							justifyContent: 'center',
							color: 'white',
							backgroundColor: 'blue',
							padding: 0,
							margin: 0,
						}}
					>
						DataStore Ready: {ready ? 'Yes' : 'No'}
					</p>
					<Viewport>
						<Switch>
							<Route exact path="/">
								<React.Suspense fallback={<Loader />}>
									<ErrorBoundary>
										<Todo />
									</ErrorBoundary>
								</React.Suspense>
							</Route>
							<Route exact path="/todo2">
								<React.Suspense fallback={<Loader />}>
									<ErrorBoundary>
										<Todo2 />
									</ErrorBoundary>
								</React.Suspense>
							</Route>
							{/* <Route exact path="/todo3">
								<React.Suspense fallback={<Loader />}>
									<ErrorBoundary>
										<Todo3 />
									</ErrorBoundary>
								</React.Suspense>
							</Route> */}
							<Route exact path="/todo4">
								<React.Suspense fallback={<Loader />}>
									<ErrorBoundary>
										<Todo4 />
									</ErrorBoundary>
								</React.Suspense>
							</Route>
							<Route exact path="/todo5">
								<React.Suspense fallback={<Loader />}>
									<ErrorBoundary>
										<Todo5 />
									</ErrorBoundary>
								</React.Suspense>
							</Route>
							<Route exact path="/todo6">
								<React.Suspense fallback={<Loader />}>
									<ErrorBoundary>
										<Todo6 />
									</ErrorBoundary>
								</React.Suspense>
							</Route>
							<Route exact path="/todo7">
								<React.Suspense fallback={<Loader />}>
									<ErrorBoundary>
										<Todo7 />
									</ErrorBoundary>
								</React.Suspense>
							</Route>
							<Route exact path="/project11">
								<React.Suspense fallback={<Loader />}>
									<ErrorBoundary>
										<Project11 />
									</ErrorBoundary>
								</React.Suspense>
							</Route>
							{/* <Route exact path="/project12">
								<React.Suspense fallback={<Loader />}>
									<ErrorBoundary>
										<Project12 />
									</ErrorBoundary>
								</React.Suspense>
							</Route> */}
							{/* <Route exact path="/project21">
								<React.Suspense fallback={<Loader />}>
									<ErrorBoundary>
										<Project21 />
									</ErrorBoundary>
								</React.Suspense>
							</Route> */}
							{/* <Route exact path="/project22">
								<React.Suspense fallback={<Loader />}>
									<ErrorBoundary>
										<Project22 />
									</ErrorBoundary>
								</React.Suspense>
							</Route> */}
							{/* <Route exact path="/post31">
								<React.Suspense fallback={<Loader />}>
									<ErrorBoundary>
										<Post31 />
									</ErrorBoundary>
								</React.Suspense>
							</Route> */}
						</Switch>
					</Viewport>
				</div>
			</Router>
		</AmplifyProvider>
	);
}

export default App;
