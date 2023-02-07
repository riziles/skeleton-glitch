<script>
	import * as echarts from 'echarts';
	import { onMount } from 'svelte';
	import { storeLightSwitch } from '@skeletonlabs/skeleton';

	$: condtheme = $storeLightSwitch ? 'dark' : null;

	let myChartDiv, myChart, p, q, echartsgl;

	export let option;

	onMount(async () => {
		echartsgl = await import ('echarts-gl');
		console.log('test');
		// Create the echarts instance
		myChart = echarts.init(myChartDiv, condtheme);
		console.log(myChart);
		// Draw the chart
		myChart.setOption(option);
	});

	$: if (myChart) {
		console.log([p , q]);
		// Create the echarts instance
		myChart.dispose();
		myChart = echarts.init(myChartDiv, condtheme);
		console.log(myChart);
		// Draw the chart
		myChart.setOption(option);
	}
</script> 

<svelte:window bind:innerWidth={p} bind:innerHeight={q}/>

<div class="h-full w-full m-5" bind:this={myChartDiv} />
