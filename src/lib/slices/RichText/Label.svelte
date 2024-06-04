<script lang="ts">
	import type { RTLabelNode } from '@prismicio/client';

	export let node: RTLabelNode;
</script>

{#if node.data.label === 'codespan'}
	<code><slot /></code>
{:else}
	<span class={node.data.label}><slot /></span>
{/if}
