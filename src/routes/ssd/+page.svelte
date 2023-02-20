<script>
	import myData from './sampledata.js';
	import { DataHandler, Datatable, Th, ThFilter } from '@vincjo/datatables';

	const handler = new DataHandler(myData, { rowsPerPage: 10 });
	const rows = handler.getRows();
</script>

<!-- <table class="table table-hover"> -->

<div class="flex items-center justify-center">
	<div class="table-container w-5/6">
		<Datatable {handler}>
			<table class="table table-compact table-hover">
				<thead>
					<tr>
						<Th {handler} orderBy="first_name">First Name</Th>
						<Th {handler} orderBy="last_name">Last Name</Th>
						<Th {handler} orderBy="email">Email</Th>
					</tr>
					<tr>
						<ThFilter {handler} filterBy="first_name" />
						<ThFilter {handler} filterBy="last_name" />
						<ThFilter {handler} filterBy="email" />
					</tr>
				</thead>
				<tbody>
					{#each $rows as row}
						<tr>
							<td>{row.first_name}</td>
							<td>{row.last_name}</td>
							<td>{row.email}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</Datatable>
	</div>
</div>
