<script lang="ts">
	import type { RTLabelNode } from '@prismicio/client';
	import type { Snippet } from 'svelte';

	type Props = {
		node: RTLabelNode;
		children: Snippet;
	};

	let { node, children }: Props = $props();
</script>

{#if node.data.label === 'codespan'}
	<code>{@render children()}</code>
{:else}
	<span class={node.data.label}>{@render children()}</span>
{/if}
