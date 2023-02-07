<script>
	import * as echarts from 'echarts';
	import * as echartsgl from 'echarts-gl'
	import { onMount } from 'svelte';
	import { storeLightSwitch } from '@skeletonlabs/skeleton';

	$: condtheme = $storeLightSwitch ? 'dark' : null;

	let myChartDiv, myChart, p, q;

	export let option;

	onMount(() => {
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
