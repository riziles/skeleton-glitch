<script>
	import EChart from './EChart.svelte';

	let chartoption = {
		title: {
			text: 'ECharts Getting Started Example'
		},
		tooltip: {},
		xAxis: {
			data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']
		},
		yAxis: {},
		series: [
			{
				name: 'sales',
				type: 'bar',
				data: [5, 20, 36, 10, 10, 20]
			}
		]
	};
</script>

<div class="max-h-screen h-full flex justify-center overflow-hidden pr-5">
  <div class = "h-5/6 w-full max-w-5xl items-center overflow-hidden">
	<EChart option={chartoption} />
  </div>
</div>
