<script>
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>


<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong>
				<a class="text-xl uppercase" href="https://tabulator.info/">
					Tabulator
				</a> 
				in 
				<a class="text-xl uppercase" href="https://www.skeleton.dev">
					Skeleton
				</a>
			</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
				<a class="btn btn-sm variant-ghost-surface" href="https://github.com/riziles/skeleton-glitch" target="_blank" rel="noreferrer">Source</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
