import '../projectStyles.css';
import { useState, useEffect } from 'react';
import { DataStore, Predicates } from 'aws-amplify';
import { Project12, Team12 } from '../../models';
import { ulid } from 'ulid';

// TODO:
// const SAME_ULID = ulid();
let subscriptions: any[] = [];

function Project12Component() {
	const [project12s, setProject12s] = useState<any>([]);
	const [team12s, setTeam12s] = useState<any>([]);
	const [currentTeam, setCurrentTeam] = useState<any>(null);
	const [currentProject, setCurrentProject] = useState<any>(null);
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

		// Observe Project12
		subscriptions.push(
			DataStore.observe(Project12).subscribe((msg: any) => {
				console.log('observe', msg);
				setSubMsg(msg);
			})
		);

		// ObserveQuery Project12
		subscriptions.push(
			DataStore.observeQuery(Project12).subscribe((data: any) => {
				console.log('observeQuery', data);
				setSnapshots(prev => [...prev, data] as any);
			})
		);

		// ObserveQuery Project12 with filter
		subscriptions.push(
			DataStore.observeQuery(Project12, t =>
				t.name('contains', 'Project12')
			).subscribe(snapshot => {
				console.log('filtered observeQuery', snapshot);
				setFilteredSnapshots(prev => [...prev, snapshot] as any);
			})
		);

		// Observe Team12
		subscriptions.push(
			DataStore.observe(Team12).subscribe(msg => {
				console.log('observe', msg);
				setSubMsg(msg);
			})
		);

		// ObserveQuery Team12
		subscriptions.push(
			DataStore.observeQuery(Team12).subscribe(data => {
				console.log('observeQuery', data);
				setSnapshots(prev => [...prev, data] as any);
			})
		);

		// ObserveQuery Team12 with filter
		subscriptions.push(
			DataStore.observeQuery(Team12, t =>
				t.name('contains', 'Team12')
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
		setProject12s([]);
		setTeam12s([]);
		setSubMsg([]);
		setSnapshots([]);
		setFilteredSnapshots([]);
	}

	//#region Project 12
	// Query
	async function getProject12s() {
		const _projects = await DataStore.query(Project12);
		setProject12s(_projects);
		console.log('Project12s', _projects);
	}

	// Does not apply: Query by PK (SK is present)

	// Query by PK Predicate
	async function getProject12ByPkPredicate() {
		const [_project] = await DataStore.query(Project12);
		console.log('first query:', _project);
		if (!_project) return;

		const project = await DataStore.query(Project12, c =>
			c.customProjectId('eq', _project.customProjectId)
		);

		console.log('by PK Predicate', project);
		setProject12s(project);
	}

	// Query by PK + SK Predicate
	async function getProject12sbyPKSKPredicate() {
		const [_project] = await DataStore.query(Project12);
		console.log('result of first query:', _project);
		if (!_project) return;

		const projects = await DataStore.query(Project12, c =>
			c
				.customProjectId('eq', _project.customProjectId)
				.name('eq', _project.name)
		);
		console.log('PK + SK Predicate:', projects);
		setProject12s(projects);
	}

	// Does not apply: Query by PK OL (SK present)

	// Query by PK + SK OL
	async function getProject12sbyPkSkOl() {
		const [_project] = await DataStore.query(Project12);

		const project = await DataStore.query(Project12, {
			customProjectId: _project.customProjectId,
			name: _project.name,
		});
		console.log('Project12 by PK + SK w/ object literal', project);
		setProject12s(project);
	}

	// Query by ALL
	async function getProject12ByAll() {
		const project = await DataStore.query(Project12, Predicates.ALL);
		console.log('Query ALL by PK', project);
		if (!project) return;
		setProject12s(project);
	}

	// Create
	async function createProjectForCurrentTeam12() {
		if (!currentTeam) return;
		clearState();

		try {
			const project = await DataStore.save(
				new Project12({
					customProjectId: ulid(),
					name: 'Project12 Original Name',
					description: 'Project12 Original Description',
					project12TeamCustomTeamId: currentTeam.customTeamId,
					project12TeamName: currentTeam.name,
				})
			);

			setCurrentProject(project);
			console.log('Project12 created:', project);
		} catch (error) {
			console.error('Save failed:', error);
		}
	}

	// Update
	async function updateProject12() {
		clearState();
		const [project] = await DataStore.query(Project12);

		try {
			const team = await DataStore.save(
				Project12.copyOf(project, updated => {
					updated.description = 'UPDATED DESCRIPTION';
				})
			);

			console.log('Project12 created:', team);
		} catch (error) {
			console.error('Save failed:', error);
		}
	}

	// Update PK: should throw TS error, as PK is immutableTS error, as PK is immutable
	async function updateProject12Pk() {
		clearState();
		const [originalProject] = await DataStore.query(Project12);
		console.log('Original Project:', originalProject);

		try {
			const project = await DataStore.save(
				Project12.copyOf(originalProject, updated => {
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
	async function deleteProject12() {
		clearState();
		const [project] = await DataStore.query(Project12);
		if (!project) return;

		await DataStore.delete(project);
	}

	// Does not apply: Delete by PK (SK is present)

	// Delete by PK Predicate
	async function deleteProject12ByPkPredicate() {
		clearState();
		const [project] = await DataStore.query(Project12);
		if (!project) return;

		try {
			const result = await DataStore.delete(Project12, c =>
				c.customProjectId('eq', project.customProjectId)
			);
			console.log('Project12 deleted:', result);
		} catch (error) {
			console.error('Delete failed:', error);
		}
	}

	// Does not apply: Delete by PK OL

	// Delete by PK + SK Predicate
	async function deleteProject12ByPkSkPredicate() {
		clearState();
		const [project] = await DataStore.query(Project12);
		if (!project) return;

		try {
			await DataStore.delete(Project12, c =>
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
	async function deleteProject12ByPkSkOL() {
		clearState();
		const [project] = await DataStore.query(Project12);
		if (!project) return;

		try {
			await DataStore.delete(Project12, {
				customProjectId: project.customProjectId,
				name: project.name,
			});
		} catch (error) {
			console.error('Delete failed:', error);
		}
	}

	//#endregion

	//#region Project12 Relational CRUD
	// Query by PK filter
	async function getCurrentTeamProject12sByPkFilter() {
		const projects = (await DataStore.query(Project12)).filter(
			c => c.project12TeamCustomTeamId === currentTeam.customTeamId
		);
		setProject12s(projects);
		console.log('Project12s', projects);
	}

	// Query by PK + SK filter
	async function getCurrentTeamProject12sByPkSkFilter() {
		if (!currentTeam) return;
		const projects = (await DataStore.query(Project12)).filter(
			c =>
				c.project12TeamCustomTeamId === currentTeam.customTeamId &&
				c.project12TeamName === currentTeam.name
		);
		setProject12s(projects);
		console.log('Project12s', projects);
	}

	// Does not apply to relational query: Query by PK

	// Query by PK Predicate
	async function getCurrentTeamProject12ByPkPredicate() {
		if (!currentTeam) return;
		const project = await DataStore.query(Project12, c =>
			c.project12TeamCustomTeamId('eq', currentTeam.customTeamId)
		);
		console.log('by PK Predicate', project);
		setProject12s(project);
	}

	// Query by PK + SK Predicate
	async function getCurrentTeamProject12sbyPKSKPredicate() {
		if (!currentTeam) return;
		const project = await DataStore.query(Project12, c =>
			c
				.project12TeamCustomTeamId('eq', currentTeam.customTeamId)
				.project12TeamName('eq', currentTeam.name)
		);
		console.log('by PK Predicate', project);
		setProject12s(project);
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
	async function deleteCurrentTeamProject12ByPkPredicate() {
		clearState();
		const [project] = await DataStore.query(Project12);
		if (!project) return;

		await DataStore.delete(Project12, c =>
			c.project12TeamCustomTeamId('eq', currentTeam.customTeamId)
		);
	}

	// Does not apply to relational model: Delete by PK OL

	// Delete by PK + SK Predicate
	async function deleteCurrentTeamProject12ByPkSkPredicate() {
		clearState();
		const [project] = await DataStore.query(Project12);
		if (!project) return;
		// await DataStore.delete(Project, project.customId);
		await DataStore.delete(Project12, c =>
			c
				.project12TeamCustomTeamId('eq', currentTeam.customTeamId)
				.project12TeamName('eq', currentTeam.name)
		);
	}

	// Does not apply: Delete by PK + Multi SK Predicate

	// Does not apply to relational model: Delete by PK + SK OL

	//#endregion

	//#region Team12
	// Query
	async function getTeam12s() {
		const _teams = await DataStore.query(Team12);
		setTeam12s(_teams);
		console.log('team12s', _teams);
	}

	// Does not apply: Query by PK (SK present)

	// Query by PK Predicate
	async function getTeam12ByPkPredicate() {
		const [_team] = await DataStore.query(Team12);
		console.log('first query:', _team);
		if (!_team) return;

		const team = await DataStore.query(Team12, c =>
			c.customTeamId('eq', _team.customTeamId)
		);
		console.log('by PK Predicate', team);
		setTeam12s(team);
	}

	// Query by PK + SK Predicate
	async function getTeam12sbyPKSKPredicate() {
		const [_team] = await DataStore.query(Team12);
		console.log('result of first query:', _team);
		if (!_team) return;

		const teams = await DataStore.query(Team12, c =>
			c.customTeamId('eq', _team.customTeamId).name('eq', _team.name)
		);

		console.log('PK + SK Predicate:', teams);
		setTeam12s(teams);
	}

	// Does not apply: Query by PK OL

	// Query by PK + SK OL
	async function getTeam12sbyPkSkOl() {
		const [_team] = await DataStore.query(Team12);

		const team = await DataStore.query(Team12, {
			customTeamId: _team.customTeamId,
			name: _team.name,
		});

		console.log('team12 by PK + SK w/ object literal', team);
		setTeam12s(team);
	}

	// Query by ALL
	async function getTeam12ByAll() {
		const team = await DataStore.query(Team12, Predicates.ALL);
		console.log('Query ALL by PK', team);
		if (!team) return;
		setTeam12s(team);
	}

	async function createTeam12() {
		clearState();

		try {
			const team = await DataStore.save(
				new Team12({
					customTeamId: ulid(),
					name: 'team12 Original Name',
					description: 'team12 Original Description',
				})
			);

			setCurrentTeam(team);
			console.log('Team12 created:', team);
		} catch (error) {
			console.error('Save failed:', error);
		}
	}

	// Update
	async function updateTeam12() {
		clearState();
		const [originalTeam] = await DataStore.query(Team12);
		try {
			const team = await DataStore.save(
				Team12.copyOf(originalTeam, updated => {
					updated.description = 'UPDATED DESCRIPTION';
				})
			);

			console.log('team12 created:', team);
		} catch (error) {
			console.error('Save failed:', error);
		}
	}

	// Update PK: should throw TS error, as PK is immutableTS error, as PK is immutable
	async function updateTeam12Pk() {
		clearState();
		const [originalteam] = await DataStore.query(Team12);
		console.log('Original team:', originalteam);

		try {
			const team = await DataStore.save(
				Team12.copyOf(originalteam, updated => {
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
	async function deleteTeam12() {
		clearState();
		const [team] = await DataStore.query(Team12);
		if (!team) return;
		await DataStore.delete(team);
	}

	// Does not apply: Delete by PK (SK is present)

	// Delete by PK Predicate
	async function deleteTeam12ByPkPredicate() {
		clearState();
		const [team] = await DataStore.query(Team12);
		if (!team) return;

		await DataStore.delete(Team12, c =>
			c.customTeamId('eq', team.customTeamId)
		);
	}

	// Does not apply: Delete by PK OL

	// Delete by PK + SK Predicate
	async function deleteTeam12ByPkSkPredicate() {
		clearState();
		const [team] = await DataStore.query(Team12);
		if (!team) return;

		await DataStore.delete(Team12, c =>
			c.customTeamId('eq', team.customTeamId).name('eq', team.name)
		);
	}

	// Does not apply: Delete by PK + Multi SK Predicate

	// Delete by PK + SK OL
	async function deleteTeam12ByPkSkOL() {
		clearState();
		const [team] = await DataStore.query(Team12);
		if (!team) return;
		await DataStore.delete(Team12, {
			customTeamId: team.customTeamId,
			name: team.name,
		});
	}

	//#endregion

	//#region Delete ALL

	function deleteAll() {
		DataStore.delete(Project12, Predicates.ALL);
		DataStore.delete(Team12, Predicates.ALL);
	}

	//#endregion

	//#region Team12 Relational CRUD
	// Query by PK filter
	async function getCurrentProjectTeam12sByPkFilter() {
		const projects = (await DataStore.query(Team12)).filter(
			c => c.team12ProjectCustomProjectId === currentProject.customProjectId
		);
		setProject12s(projects);
		console.log('Project12s', projects);
	}

	// Query by PK + SK filter
	async function getCurrentProjectTeam12sByPkSkFilter() {
		if (!currentTeam) return;
		const projects = (await DataStore.query(Team12)).filter(
			c =>
				c.team12ProjectCustomProjectId === currentProject.customProjectId &&
				c.team12ProjectName === currentProject.name
		);
		setProject12s(projects);
		console.log('Project12s', projects);
	}

	// Does not apply to relational query: Query by PK

	// Query by PK Predicate
	async function getCurrentProjectTeam12ByPkPredicate() {
		if (!currentTeam) return;
		const project = await DataStore.query(Team12, c =>
			c.team12ProjectCustomProjectId('eq', currentProject.customProjectId)
		);
		console.log('by PK Predicate', project);
		setProject12s(project);
	}

	// Query by PK + SK Predicate
	async function getCurrentProjectTeam12sbyPKSKPredicate() {
		if (!currentTeam) return;
		const project = await DataStore.query(Team12, c =>
			c
				.team12ProjectCustomProjectId('eq', currentProject.customProjectId)
				.team12ProjectName('eq', currentProject.name)
		);
		console.log('by PK Predicate', project);
		setProject12s(project);
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
	async function deleteCurrentProjectTeam12ByPkPredicate() {
		clearState();
		const [project] = await DataStore.query(Team12);
		if (!project) return;

		await DataStore.delete(Team12, c =>
			c.team12ProjectCustomProjectId('eq', currentProject.customProjectId)
		);
	}

	// Does not apply to relational model: Delete by PK OL

	// Delete by PK + SK Predicate
	async function deleteCurrentProjectTeam12ByPkSkPredicate() {
		clearState();
		const [project] = await DataStore.query(Team12);
		if (!project) return;
		// await DataStore.delete(Project, project.customId);
		await DataStore.delete(Team12, c =>
			c
				.team12ProjectCustomProjectId('eq', currentProject.customProjectId)
				.team12ProjectName('eq', currentProject.name)
		);
	}

	// Does not apply: Delete by PK + Multi SK Predicate

	// Does not apply to relational model: Delete by PK + SK OL

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

				<span>Team12:</span>
				<div className="buttons">
					<button data-test="datastore-query-1" onClick={getTeam12s}>
						Query
					</button>
					<button onClick={getTeam12s}>Query by PK</button>
					<button onClick={getTeam12ByPkPredicate}>Query by PK Pred</button>
					<button onClick={getTeam12sbyPKSKPredicate}>
						Query by PK + SK Predicate
					</button>
					<button disabled>Query by PK OL</button>
					<button onClick={getTeam12sbyPkSkOl}>Query by PK + SK OL</button>
					<button onClick={getTeam12ByAll}>Query by ALL</button>
					<button onClick={createTeam12} data-test="datastore-create-1">
						Create
					</button>
					<button onClick={updateTeam12} data-test="datastore-update-1">
						Update Last
					</button>
					<button onClick={updateTeam12Pk} data-test="datastore-update-1">
						Update Last by PK
					</button>
					<button onClick={deleteTeam12} data-test="datastore-delete-1">
						Delete Last
					</button>
					<button disabled>Delete by PK</button>
					<button onClick={deleteTeam12ByPkPredicate}>Delete by PK Pred</button>
					<button disabled>Delete by PK OL</button>
					<button onClick={deleteTeam12ByPkSkPredicate}>
						Delete by PK + SK Pred
					</button>
					<button onClick={deleteTeam12ByPkSkOL}>Delete by PK + SK OL</button>
				</div>
				<span>Project12 relational operations:</span>
				<div className="buttons">
					<button
						disabled={!currentTeam}
						onClick={getCurrentTeamProject12sByPkFilter}
					>
						get Proj for Cur. Team - PkFilter
					</button>
					<button
						disabled={!currentTeam}
						onClick={getCurrentTeamProject12sByPkSkFilter}
					>
						get Proj for Cur. Team - PkSkFilter
					</button>
					<button
						disabled={!currentTeam}
						onClick={getCurrentTeamProject12ByPkPredicate}
					>
						get Proj for Cur. Team - PkPredicate
					</button>
					<button
						disabled={!currentTeam}
						onClick={getCurrentTeamProject12sbyPKSKPredicate}
					>
						get Proj for Cur. Team - PkSkPredicate
					</button>
					<button disabled onClick={deleteCurrentTeamProject12ByPkPredicate}>
						Del Proj for Cur. Team - PkPred
					</button>
					<button
						disabled={!currentTeam}
						onClick={deleteCurrentTeamProject12ByPkSkPredicate}
					>
						Del Proj for Cur. Team - PkSkPred
					</button>
				</div>
				<span>Team12 relational operations:</span>
				<div className="buttons">
					<button
						disabled={!currentProject}
						onClick={getCurrentTeamProject12sByPkFilter}
					>
						get Team for Cur. Proj - PkFilter
					</button>
					<button
						disabled={!currentProject}
						onClick={getCurrentTeamProject12sByPkSkFilter}
					>
						get Team for Cur. Proj - PkSkFilter
					</button>
					<button
						disabled={!currentProject}
						onClick={getCurrentTeamProject12ByPkPredicate}
					>
						get Team for Cur. Proj - PkPredicate
					</button>
					<button
						disabled={!currentProject}
						onClick={getCurrentTeamProject12sbyPKSKPredicate}
					>
						get Team for Cur. Proj - PkSkPredicate
					</button>
					<button disabled onClick={deleteCurrentTeamProject12ByPkPredicate}>
						Del Team for Cur. Proj - PkPred
					</button>
					<button
						disabled={!currentProject}
						onClick={deleteCurrentTeamProject12ByPkSkPredicate}
					>
						Del Team for Cur. Proj - PkSkPred
					</button>
				</div>
				<span>Independent Project12 operations:</span>
				<div className="buttons">
					<button data-test="datastore-query-1" onClick={getProject12s}>
						Query
					</button>
					<button onClick={getProject12s}>Query by PK</button>
					<button onClick={getProject12ByPkPredicate}>Query by PK Pred</button>
					<button onClick={getProject12sbyPKSKPredicate}>
						Query by PK + SK Predicate
					</button>
					<button disabled>Query by PK OL</button>
					<button onClick={getProject12sbyPkSkOl}>Query by PK + SK OL</button>
					<button onClick={getProject12ByAll}>Query by ALL</button>
					<button
						disabled={!currentTeam}
						onClick={createProjectForCurrentTeam12}
						data-test="datastore-create-1"
					>
						Create (Cur. Team)
					</button>
					<button onClick={updateProject12} data-test="datastore-update-1">
						Update Last
					</button>
					<button onClick={updateProject12Pk} data-test="datastore-update-1">
						Update Last by PK
					</button>
					<button onClick={deleteProject12} data-test="datastore-delete-1">
						Delete Last
					</button>
					<button disabled>Delete by PK</button>
					<button onClick={deleteProject12ByPkPredicate}>
						Delete by PK Pred
					</button>
					<button disabled>Delete by PK OL</button>
					<button onClick={deleteProject12ByPkSkPredicate}>
						Delete by PK + SK Pred
					</button>
					<button onClick={deleteProject12ByPkSkOL}>
						Delete by PK + SK OL
					</button>
				</div>
				<div className="container">
					<div className="section">
						<pre>
							<span>Team12:</span>

							<pre data-test="datastore-output-3">
								{JSON.stringify(team12s, null, 2)}
							</pre>
						</pre>
					</div>
					<div className="section">
						<pre>
							<span>Project12:</span>
							<pre data-test="datastore-output-2">
								{JSON.stringify(project12s, null, 2)}
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

export default Project12Component;
