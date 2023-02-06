<script>
	import 'tabulator-tables/dist/css/tabulator_simple.min.css';
  import {TabulatorFull as Tabulator} from 'tabulator-tables';
  import {onMount} from 'svelte';

  export let data, dataformat;

  let tableComponent;

  var rowMenu = [
    {
        label:"<i class='fas fa-user'></i> Change Name",
        action:function(e, row){
            row.update({name:"Steve Bobberson"});
        }
    },
    {
        label:"<i class='fas fa-check-square'></i> Select Row",
        action:function(e, row){
            row.select();
        }
    },
    {
        separator:true,
    },
    {
        label:"Admin Functions",
        menu:[
            {
                label:"<i class='fas fa-trash'></i> Delete Row",
                action:function(e, row){
                    row.delete();
                }
            },
            {
                label:"<i class='fas fa-ban'></i> Disabled Option",
                disabled:true,
            },
        ]
    }
]

  onMount(() => {
    new Tabulator(tableComponent, {
      data: data, //link data to table
      reactiveData:true, //enable data reactivity
      autoColumns:true,
      importFormat:dataformat,
      rowContextMenu: rowMenu,
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

<div class="h-96 max-w-full">
  <div bind:this={tableComponent} ></div>
</div>
