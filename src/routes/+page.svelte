<script>
	import Tabulator from './Tabulator.svelte';

  import { LightSwitch } from '@skeletonlabs/skeleton';


  let tdata = [
    {id:1, name:"Billy Bob", age:12, gender:"male", height:95, col:"red", dob:"14/05/2010"},
    {id:2, name:"Jenny Jane", age:42, gender:"female", height:142, col:"blue", dob:"30/07/1954"},
    {id:3, name:"Steve McAlistaire", age:35, gender:"male", height:176, col:"green", dob:"04/11/1982"},,
    {id:3, name:"Steve McAlistaire", age:35, gender:"male", height:176, col:"green", dob:"04/11/1982"},
];

</script>

<LightSwitch />

<div class="container h-auto mx-auto flex justify-center items-center">
  <Tabulator data = {tdata} />
</div>
