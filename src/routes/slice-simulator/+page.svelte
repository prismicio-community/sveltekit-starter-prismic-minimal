<script>
	import { SliceSimulator, SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
</script>

<!-- Slot syntax is used for backward compatibility with Svelte <=4. -->
<SliceSimulator let:slices>
	<SliceZone {slices} {components} />
</SliceSimulator>
