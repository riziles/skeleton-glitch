
<svelte:head>

<link rel="stylesheet" href="https://bossanova.uk/jspreadsheet/v4/jexcel.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v4/jsuites.css" type="text/css" />
<!-- 
<link rel="stylesheet" href="https://bossanova.uk/jspreadsheet/v4/jexcel.datatables.css" type="text/css" /> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jexcel/4.6.1/jexcel.min.js" integrity="sha512-TFb0BBBoMRJZ4nFqwtuJv7E+eAttxt0LaKobnfH9U79r2AM7qxBpi7hO7O+XlSxGP9NbI1F8UBSowK9dVmQd2Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsuites/5.0.1/jsuites.js" integrity="sha512-zZapc7dMRwrjU5GNDxsP0AQ9a86/YGezCvbCWLSUnudh945/9hHaL7PvuavDC0HiomLC8MWtmK8regg5xVBODQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</svelte:head>



<script >
    let spreadsheet
    let jspread
    let jsuites
    let jsexcel
    let data

import { onMount } from 'svelte'
	let QrCode
	onMount(async () => {

        data = [
    ['Mazda', 2001, 2000],
    ['Pegeout', 2010, 5000],
    ['Honda Fit', 2009, 3000],
    ['Honda CRV', 2010, 6000],
];
 
jspreadsheet(spreadsheet, {
    data:data,
    columns:[
        { title:'Model', width:300 },
        { title:'Price', width:80 },
        { title:'Model', width:100 }
    ]
});




})

</script>
<div bind:this={spreadsheet}></div>
 