<script>
	import { SliceZone } from '@prismicio/svelte';

	import { components } from '$lib/slices';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<SliceZone slices={data.page.data.slices} {components} />
