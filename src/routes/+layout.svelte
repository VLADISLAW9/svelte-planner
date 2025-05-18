<script>
	import '../app.css';
	import { ClipboardCopy } from 'lucide-svelte';

	let { children } = $props();
</script>

<div class="h-screen flex justify-between flex-col">
	<header class="flex justify-between px-30 py-5">
		<div class="flex gap-2">
			<ClipboardCopy />
			<h1>Planner</h1>
		</div>
	</header>
	<div class="px-30 flex-1">
		{@render children()}
	</div>
	<footer class="flex justify-between px-30 py-5">footer</footer>
</div>
