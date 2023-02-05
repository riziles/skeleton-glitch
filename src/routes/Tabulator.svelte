<script>
	import 'tabulator-tables/dist/css/tabulator_simple.min.css';
  import {TabulatorFull as Tabulator} from 'tabulator-tables';
  import {onMount} from 'svelte';

  export let data, dataformat;

  let tableComponent;

  onMount(() => {
    new Tabulator(tableComponent, {
      data: data, //link data to table
      reactiveData:true, //enable data reactivity
      autoColumns:true,
      importFormat:dataformat,
      maxHeight:"100%",
      pagination:"local",
      paginationSize:1000,
      paginationSizeSelector:[3, 6, 8, 10, 1000],
      movableColumns:true,
      paginationCounter:"rows"
      // columns: columns, //define table columns
    });
  });
</script>

<div class="h-96 m-4">
  <div bind:this={tableComponent} ></div>
</div>
