import '../projectStyles.css';
import { useState, useEffect } from 'react';
import { DataStore, Predicates } from 'aws-amplify';
import { Project11, Team11 } from '../../models';
import { ulid } from 'ulid';

// TODO:
// const SAME_ULID = ulid();
let subscriptions: any[] = [];

function Project11Component() {
	const [project11s, setProject11s] = useState<any>([]);
	const [team11s, setTeam11s] = useState<any>([]);
	const [currentTeam, setCurrentTeam] = useState<any>(null);
	const [subMsg, setSubMsg] = useState<any>([]);
	const [snapshots, setSnapshots] = useState([]);
	const [filteredSnapshots, setFilteredSnapshots] = useState([]);

	useEffect(() => {
		initSubs();

		return () => {
			unsubSubs();
		};
	}, []);

	function initSubs() {
		if (subscriptions.length) {
			unsubSubs();
		}

		// Observe Project11
		subscriptions.push(
			DataStore.observe(Project11).subscribe((msg: any) => {
				console.log('observe', msg);
				setSubMsg(msg);
			})
		);

		// ObserveQuery Project11
		subscriptions.push(
			DataStore.observeQuery(Project11).subscribe((data: any) => {
				console.log('observeQuery', data);
				setSnapshots(prev => [...prev, data] as any);
			})
		);

		// ObserveQuery Project11 with filter
		subscriptions.push(
			DataStore.observeQuery(Project11, t =>
				t.name('contains', 'Project11')
			).subscribe(snapshot => {
				console.log('filtered observeQuery', snapshot);
				setFilteredSnapshots(prev => [...prev, snapshot] as any);
			})
		);

		// Observe Team11
		subscriptions.push(
			DataStore.observe(Team11).subscribe(msg => {
				console.log('observe', msg);
				setSubMsg(msg);
			})
		);

		// ObserveQuery Team11
		subscriptions.push(
			DataStore.observeQuery(Team11).subscribe(data => {
				console.log('observeQuery', data);
				setSnapshots(prev => [...prev, data] as any);
			})
		);

		// ObserveQuery Team11 with filter
		subscriptions.push(
			DataStore.observeQuery(Team11, t =>
				t.name('contains', 'Team11')
			).subscribe(snapshot => {
				console.log('filtered observeQuery', snapshot);
				setFilteredSnapshots(prev => [...prev, snapshot] as any);
			})
		);
	}

	function unsubSubs() {
		subscriptions &&
			subscriptions.length &&
			subscriptions.forEach(sub => sub.unsubscribe());
	}

	// function to clear local React state
	function clearState() {
		setProject11s([]);
		setTeam11s([]);
		setSubMsg([]);
		setSnapshots([]);
		setFilteredSnapshots([]);
	}

	//#region Project 11
	// Query
	async function getProject11s() {
		const _projects = await DataStore.query(Project11);
		setProject11s(_projects);
		console.log('Project11s', _projects);
	}

	// Does not apply: Query by PK (SK is present)

	// Query by PK Predicate
	async function getProject11ByPkPredicate() {
		const [_project] = await DataStore.query(Project11);
		console.log('first query:', _project);
		if (!_project) return;

		const project = await DataStore.query(Project11, c =>
			c.customProjectId('eq', _project.customProjectId)
		);

		console.log('by PK Predicate', project);
		setProject11s(project);
	}

	// Query by PK + SK Predicate
	async function getProject11sbyPKSKPredicate() {
		const [_project] = await DataStore.query(Project11);
		console.log('result of first query:', _project);
		if (!_project) return;

		const projects = await DataStore.query(Project11, c =>
			c
				.customProjectId('eq', _project.customProjectId)
				.name('eq', _project.name)
		);
		console.log('PK + SK Predicate:', projects);
		setProject11s(projects);
	}

	// Does not apply: Query by PK OL (SK present)

	// Query by PK + SK OL
	async function getProject11sbyPkSkOl() {
		const [_project] = await DataStore.query(Project11);

		const project = await DataStore.query(Project11, {
			customProjectId: _project.customProjectId,
			name: _project.name,
		});
		console.log('Project11 by PK + SK w/ object literal', project);
		setProject11s(project);
	}

	// Query by ALL
	async function getProject11ByAll() {
		const project = await DataStore.query(Project11, Predicates.ALL);
		console.log('Query ALL by PK', project);
		if (!project) return;
		setProject11s(project);
	}

	// Create
	async function createProjectForCurrentTeam11() {
		if (!currentTeam) return;
		clearState();

		try {
			const project = await DataStore.save(
				new Project11({
					customProjectId: ulid(),
					name: `Project 11 ${Date.now()}`,
					description: 'Project11 Original Description',
					project11TeamCustomTeamId: currentTeam.customTeamId,
					project11TeamName: currentTeam.name,
				})
			);

			console.log('Project11 created:', project);
		} catch (error) {
			console.error('Save failed:', error);
		}
	}

	// Update
	async function updateProject11() {
		clearState();
		const [project] = await DataStore.query(Project11);

		try {
			const team = await DataStore.save(
				Project11.copyOf(project, updated => {
					updated.description = 'UPDATED DESCRIPTION';
				})
			);

			console.log('Project11 created:', team);
		} catch (error) {
			console.error('Save failed:', error);
		}
	}

	// Update PK: should throw TS error, as PK is immutableTS error, as PK is immutable
	async function updateProject11Pk() {
		clearState();
		const [originalProject] = await DataStore.query(Project11);
		console.log('Original Project:', originalProject);

		try {
			const project = await DataStore.save(
				Project11.copyOf(originalProject, updated => {
					// throws TS error, as PK is immutable
					//@ts-expect-error
					updated.name = `name ${Date.now()}`;
				})
			);

			console.log('Project updated:', project);
		} catch (error) {
			console.error('Save failed:', error);
		}
	}

	// Delete
	async function deleteProject11() {
		clearState();
		const [project] = await DataStore.query(Project11);
		if (!project) return;

		await DataStore.delete(project);
	}

	// Does not apply: Delete by PK (SK is present)

	// Delete by PK Predicate
	async function deleteProject11ByPkPredicate() {
		clearState();
		const [project] = await DataStore.query(Project11);
		if (!project) return;

		try {
			const result = await DataStore.delete(Project11, c =>
				c.customProjectId('eq', project.customProjectId)
			);
			console.log('Project11 deleted:', result);
		} catch (error) {
			console.error('Delete failed:', error);
		}
	}

	// Does not apply: Delete by PK OL

	// Delete by PK + SK Predicate
	async function deleteProject11ByPkSkPredicate() {
		clearState();
		const [project] = await DataStore.query(Project11);
		if (!project) return;

		try {
			await DataStore.delete(Project11, c =>
				c
					.customProjectId('eq', project.customProjectId)
					.name('eq', project.name)
			);
		} catch (error) {
			console.error('Delete failed:', error);
		}
	}

	// Does not apply: Delete by PK + Multi SK Predicate

	// Delete by PK + SK OL
	async function deleteProject11ByPkSkOL() {
		clearState();
		const [project] = await DataStore.query(Project11);
		if (!project) return;

		try {
			await DataStore.delete(Project11, {
				customProjectId: project.customProjectId,
				name: project.name,
			});
		} catch (error) {
			console.error('Delete failed:', error);
		}
	}

	//#endregion

	//#region Project11 Relational CRUD
	// Query by PK filter
	async function getCurrentTeamProject11sByPkFilter() {
		const projects = (await DataStore.query(Project11)).filter(
			c => c.project11TeamCustomTeamId === currentTeam.customTeamId
		);
		setProject11s(projects);
		console.log('Project11s', projects);
	}

	// Query by PK + SK filter
	async function getCurrentTeamProject11sByPkSkFilter() {
		if (!currentTeam) return;
		const projects = (await DataStore.query(Project11)).filter(
			c =>
				c.project11TeamCustomTeamId === currentTeam.customTeamId &&
				c.project11TeamName === currentTeam.name
		);
		setProject11s(projects);
		console.log('Project11s', projects);
	}

	// Does not apply to relational query: Query by PK

	// Query by PK Predicate
	async function getCurrentTeamProject11ByPkPredicate() {
		if (!currentTeam) return;
		const project = await DataStore.query(Project11, c =>
			c.project11TeamCustomTeamId('eq', currentTeam.customTeamId)
		);
		console.log('by PK Predicate', project);
		setProject11s(project);
	}

	// Query by PK + SK Predicate
	async function getCurrentTeamProject11sbyPKSKPredicate() {
		if (!currentTeam) return;
		const project = await DataStore.query(Project11, c =>
			c
				.project11TeamCustomTeamId('eq', currentTeam.customTeamId)
				.project11TeamName('eq', currentTeam.name)
		);
		console.log('by PK Predicate', project);
		setProject11s(project);
	}

	// Does not apply to relational model: Query by PK OL

	// Does not apply to relational model: Query by PK + SK OL

	// Does not apply to relational model: Query by ALL

	// Does not apply to relational model: Create

	// Does not apply to relational model: Update

	// N/A: Update PK: should throw TS error, as PK is immutableTS error, as PK is immutable

	// Does not apply to relational model: Delete

	// Does not apply to relational model: Delete by PK

	// Delete by PK Predicate
	async function deleteCurrentTeamProject11ByPkPredicate() {
		clearState();
		const [project] = await DataStore.query(Project11);
		if (!project) return;

		await DataStore.delete(Project11, c =>
			c.project11TeamCustomTeamId('eq', currentTeam.customTeamId)
		);
	}

	// Does not apply to relational model: Delete by PK OL

	// Delete by PK + SK Predicate
	async function deleteCurrentTeamProject11ByPkSkPredicate() {
		clearState();
		const [project] = await DataStore.query(Project11);
		if (!project) return;
		// await DataStore.delete(Project, project.customId);
		await DataStore.delete(Project11, c =>
			c
				.project11TeamCustomTeamId('eq', currentTeam.customTeamId)
				.project11TeamName('eq', currentTeam.name)
		);
	}

	// Does not apply: Delete by PK + Multi SK Predicate

	// Does not apply to relational model: Delete by PK + SK OL

	//#endregion

	//#region Team11
	// Query
	async function getTeam11s() {
		const _teams = await DataStore.query(Team11);
		setTeam11s(_teams);
		console.log('team11s', _teams);
	}

	// Does not apply: Query by PK (SK present)

	// Query by PK Predicate
	async function getTeam11ByPkPredicate() {
		const [_team] = await DataStore.query(Team11);
		console.log('first query:', _team);
		if (!_team) return;

		const team = await DataStore.query(Team11, c =>
			c.customTeamId('eq', _team.customTeamId)
		);
		console.log('by PK Predicate', team);
		setTeam11s(team);
	}

	// Query by PK + SK Predicate
	async function getTeam11sbyPKSKPredicate() {
		const [_team] = await DataStore.query(Team11);
		console.log('result of first query:', _team);
		if (!_team) return;

		const teams = await DataStore.query(Team11, c =>
			c.customTeamId('eq', _team.customTeamId).name('eq', _team.name)
		);

		console.log('PK + SK Predicate:', teams);
		setTeam11s(teams);
	}

	// Does not apply: Query by PK OL

	// Query by PK + SK OL
	async function getTeam11sbyPkSkOl() {
		const [_team] = await DataStore.query(Team11);

		const team = await DataStore.query(Team11, {
			customTeamId: _team.customTeamId,
			name: _team.name,
		});

		console.log('team11 by PK + SK w/ object literal', team);
		setTeam11s(team);
	}

	// Query by ALL
	async function getTeam11ByAll() {
		const team = await DataStore.query(Team11, Predicates.ALL);
		console.log('Query ALL by PK', team);
		if (!team) return;
		setTeam11s(team);
	}

	async function createTeam11() {
		clearState();

		try {
			const team = await DataStore.save(
				new Team11({
					customTeamId: ulid(),
					name: `Team 11 ${Date.now()}`,
					description: 'team11 Original Description',
				})
			);

			setCurrentTeam(team);
			console.log('Team11 created:', team);
		} catch (error) {
			console.error('Save failed:', error);
		}
	}

	// Update
	async function updateTeam11() {
		clearState();
		const [originalTeam] = await DataStore.query(Team11);
		try {
			const team = await DataStore.save(
				Team11.copyOf(originalTeam, updated => {
					updated.description = 'UPDATED DESCRIPTION';
				})
			);

			console.log('team11 created:', team);
		} catch (error) {
			console.error('Save failed:', error);
		}
	}

	// Update PK: should throw TS error, as PK is immutableTS error, as PK is immutable
	async function updateTeam11Pk() {
		clearState();
		const [originalteam] = await DataStore.query(Team11);
		console.log('Original team:', originalteam);

		try {
			const team = await DataStore.save(
				Team11.copyOf(originalteam, updated => {
					// throws TS error, as PK is immutable
					//@ts-expect-error
					updated.name = `name ${Date.now()}`;
				})
			);

			console.log('team updated:', team);
		} catch (error) {
			console.error('Save failed:', error);
		}
	}

	// Delete
	async function deleteTeam11() {
		clearState();
		const [team] = await DataStore.query(Team11);
		if (!team) return;
		await DataStore.delete(team);
	}

	// Does not apply: Delete by PK (SK is present)

	// Delete by PK Predicate
	async function deleteTeam11ByPkPredicate() {
		clearState();
		const [team] = await DataStore.query(Team11);
		if (!team) return;

		await DataStore.delete(Team11, c =>
			c.customTeamId('eq', team.customTeamId)
		);
	}

	// Does not apply: Delete by PK OL

	// Delete by PK + SK Predicate
	async function deleteTeam11ByPkSkPredicate() {
		clearState();
		const [team] = await DataStore.query(Team11);
		if (!team) return;

		await DataStore.delete(Team11, c =>
			c.customTeamId('eq', team.customTeamId).name('eq', team.name)
		);
	}

	// Does not apply: Delete by PK + Multi SK Predicate

	// Delete by PK + SK OL
	async function deleteTeam11ByPkSkOL() {
		clearState();
		const [team] = await DataStore.query(Team11);
		if (!team) return;
		await DataStore.delete(Team11, {
			customTeamId: team.customTeamId,
			name: team.name,
		});
	}

	//#endregion

	//#region Delete ALL

	function deleteAll() {
		DataStore.delete(Project11, Predicates.ALL);
		DataStore.delete(Team11, Predicates.ALL);
	}

	//#endregion

	//#region Team11 Relational CRUD
	// Does not apply to unidirectional relationship
	//#endregion

	return (
		<div className="App">
			<header className="App-header">
				<h1>1.2 Has one - unidirectional</h1>
				<p>{`Current team: ${currentTeam}`}</p>
				<p>DS</p>
				<div className="buttons">
					<button
						data-test="datastore-start"
						onClick={() => {
							DataStore.start();
							initSubs();
						}}
					>
						Start
					</button>
					<button onClick={() => DataStore.stop()}>Stop</button>
					<button data-test="datastore-clear" onClick={() => DataStore.clear()}>
						Clear
					</button>
					<button
						onClick={deleteAll}
						data-test="datastore-delete-all"
						style={{ backgroundColor: 'red' }}
					>
						Delete All Records
					</button>
					<button onClick={() => clearState()}>Clear component state</button>
				</div>

				<span>Team11:</span>
				<div className="buttons">
					<button data-test="datastore-query-1" onClick={getTeam11s}>
						Query
					</button>
					<button onClick={getTeam11s}>Query by PK</button>
					<button onClick={getTeam11ByPkPredicate}>Query by PK Pred</button>
					<button onClick={getTeam11sbyPKSKPredicate}>
						Query by PK + SK Predicate
					</button>
					<button disabled>Query by PK OL</button>
					<button onClick={getTeam11sbyPkSkOl}>Query by PK + SK OL</button>
					<button onClick={getTeam11ByAll}>Query by ALL</button>
					<button onClick={createTeam11} data-test="datastore-create-1">
						Create
					</button>
					<button onClick={updateTeam11} data-test="datastore-update-1">
						Update Last
					</button>
					<button onClick={updateTeam11Pk} data-test="datastore-update-1">
						Update Last by PK
					</button>
					<button onClick={deleteTeam11} data-test="datastore-delete-1">
						Delete Last
					</button>
					<button disabled>Delete by PK</button>
					<button onClick={deleteTeam11ByPkPredicate}>Delete by PK Pred</button>
					<button disabled>Delete by PK OL</button>
					<button onClick={deleteTeam11ByPkSkPredicate}>
						Delete by PK + SK Pred
					</button>
					<button onClick={deleteTeam11ByPkSkOL}>Delete by PK + SK OL</button>
				</div>
				<span>Project11 relational operations:</span>
				<div className="buttons">
					<button
						disabled={!currentTeam}
						onClick={getCurrentTeamProject11sByPkFilter}
					>
						get Proj for Cur. Team - PkFilter
					</button>
					<button
						disabled={!currentTeam}
						onClick={getCurrentTeamProject11sByPkSkFilter}
					>
						get Proj for Cur. Team - PkSkFilter
					</button>
					<button
						disabled={!currentTeam}
						onClick={getCurrentTeamProject11ByPkPredicate}
					>
						get Proj for Cur. Team - PkPredicate
					</button>
					<button
						disabled={!currentTeam}
						onClick={getCurrentTeamProject11sbyPKSKPredicate}
					>
						get Proj for Cur. Team - PkSkPredicate
					</button>
					<button disabled onClick={deleteCurrentTeamProject11ByPkPredicate}>
						Del Proj for Cur. Team - PkPred
					</button>
					<button
						disabled={!currentTeam}
						onClick={deleteCurrentTeamProject11ByPkSkPredicate}
					>
						Del Proj for Cur. Team - PkSkPred
					</button>
				</div>
				<span>Independent Project11 operations:</span>
				<div className="buttons">
					<button data-test="datastore-query-1" onClick={getProject11s}>
						Query
					</button>
					<button onClick={getProject11s}>Query by PK</button>
					<button onClick={getProject11ByPkPredicate}>Query by PK Pred</button>
					<button onClick={getProject11sbyPKSKPredicate}>
						Query by PK + SK Predicate
					</button>
					<button disabled>Query by PK OL</button>
					<button onClick={getProject11sbyPkSkOl}>Query by PK + SK OL</button>
					<button onClick={getProject11ByAll}>Query by ALL</button>
					<button
						disabled={!currentTeam}
						onClick={createProjectForCurrentTeam11}
						data-test="datastore-create-1"
					>
						Create (Cur. Team)
					</button>
					<button onClick={updateProject11} data-test="datastore-update-1">
						Update Last
					</button>
					<button onClick={updateProject11Pk} data-test="datastore-update-1">
						Update Last by PK
					</button>
					<button onClick={deleteProject11} data-test="datastore-delete-1">
						Delete Last
					</button>
					<button disabled>Delete by PK</button>
					<button onClick={deleteProject11ByPkPredicate}>
						Delete by PK Pred
					</button>
					<button disabled>Delete by PK OL</button>
					<button onClick={deleteProject11ByPkSkPredicate}>
						Delete by PK + SK Pred
					</button>
					<button onClick={deleteProject11ByPkSkOL}>
						Delete by PK + SK OL
					</button>
				</div>
				<div className="container">
					<div className="section">
						<pre>
							<span>Team11:</span>

							<pre data-test="datastore-output-3">
								{JSON.stringify(team11s, null, 2)}
							</pre>
						</pre>
					</div>
					<div className="section">
						<pre>
							<span>Project11:</span>
							<pre data-test="datastore-output-2">
								{JSON.stringify(project11s, null, 2)}
							</pre>
						</pre>
					</div>
				</div>
				<pre>
					<span>Observe Subscription Messages:</span>
					<pre data-test="datastore-output-1">
						{JSON.stringify(subMsg, null, 2)}
					</pre>
				</pre>
				<pre>
					<span>ObserveQuery Subscription Messages:</span>
					<pre data-test="datastore-output-1">
						{JSON.stringify(snapshots, null, 2)}
					</pre>
				</pre>
				<pre>
					<span>ObserveQuery Filtered Subscription Messages:</span>
					<pre data-test="datastore-output-1">
						{JSON.stringify(filteredSnapshots, null, 2)}
					</pre>
				</pre>
			</header>
		</div>
	);
}

export default Project11Component;
