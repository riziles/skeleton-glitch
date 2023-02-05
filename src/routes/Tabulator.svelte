<script>
	import 'tabulator-tables/dist/css/tabulator_simple.min.css';
  import {TabulatorFull as Tabulator} from 'tabulator-tables';
  import {onMount} from 'svelte';

  export let data;

  let tableComponent;

  onMount(() => {
    new Tabulator(tableComponent, {
      data: data, //link data to table
      reactiveData:true, //enable data reactivity
      autoColumns:true,
      maxHeight:"100%"
      // columns: columns, //define table columns
    });
  });
</script>

<div bind:this={tableComponent}></div>


<!-- 
<svelte:head>
  <link href="node_modules\tabulator-tables\dist\css\tabulator_simple.min.css" rel="stylesheet">
</svelte:head> -->