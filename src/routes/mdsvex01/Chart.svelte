<svelte:head>
   <script src="https://cdn.plot.ly/plotly-2.18.0.min.js"></script>
</svelte:head>

<script>
  import { onMount } from 'svelte';
	
	let headerText;

  export let plotHeader = '';

  export let data = [{
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [20, 14, 23],
    type: 'bar'
  }];

  onMount(() => {
		headerText = 'A Chart !';
		let plotDiv = document.getElementById('plotDiv');				
		let Plot = new Plotly.newPlot(plotDiv, data, {}, {showSendToCloud:true}); 
  });
            
</script>

<h3>{headerText}</h3>
<div id="plotly">
  <div>
    <h1>{plotHeader}</h1>
  </div>
  <div id="plotDiv"><!-- Plotly chart will be drawn inside this DIV --></div>
</div>