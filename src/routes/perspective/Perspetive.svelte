<script>
	import { onMount } from 'svelte';
	import perspective from '@finos/perspective';
	import "@finos/perspective-viewer/dist/css/themes.css";
  import { storeLightSwitch} from '@skeletonlabs/skeleton';

  $: condtheme = $storeLightSwitch? "Vaporwave":"Material Light"

  let mounted


	let table = [];
	let perspectiveSvelte;
	let viewerModule;
	let dataGrid;
	let d3fc;
	let LAYOUT = {
			plugin: 'Y Area',
			plugin_config: {
				legend: {
					height: '106px',
					left: '100px',
					top: '25px',
					width: ''
				}
			},
			settings: true,
			group_by: ['Parsed "date" bucket by week'],
			split_by: ['state'],
			columns: ['deathIncrease'],
			filter: [],
			sort: [['deathIncrease', 'col desc']],
			expressions: [
				`// Parsed "date" bucket by week
var year := integer(floor("date" / 10000));
var month := integer(floor("date" / 100)) - year * 100;
var day := integer("date" % 100);
bucket(date(year, month, day), \'W\')`
			],
			aggregates: {}
		};
	onMount(async () => {
		dataGrid = await import('@finos/perspective-viewer-datagrid');
		d3fc = await import('@finos/perspective-viewer-d3fc');
		viewerModule = await import('@finos/perspective-viewer');
		let plugin = await perspectiveSvelte.getPlugin('Y Area')
		plugin.max_cells = 10000000;
		plugin.max_columns = 10000000;		
		let WORKER = perspective.worker();
		let REQ = fetch('https://api.covidtracking.com/v1/states/daily.csv');
		const resp = await REQ;
		const csv = await resp.text();
		table = WORKER.table(csv);
		perspectiveSvelte.load(table);
		perspectiveSvelte.restore(LAYOUT);
		perspectiveSvelte.toggleConfig();
    mounted = true
	});
  

</script>


<div>
	<perspective-viewer bind:this={perspectiveSvelte} theme={condtheme} />
</div>

<style>
	perspective-viewer {
		position: absolute;
		top: 100px;
		left: 100px;
		right: 100px;
		bottom: 100px;
	}
@media screen and (max-width: 990px) {
	perspective-viewer {
		top: 50px;
		left: 0px;
		right: 0px;
		bottom: 0px;
  }
}
</style>