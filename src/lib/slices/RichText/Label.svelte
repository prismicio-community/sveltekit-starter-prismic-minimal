<script>
	/** @type {import("@prismicio/client").RTLabelNode} */
	export let node;
</script>

{#if node.data.label === 'codespan'}
	<code><slot /></code>
{:else}
	<span class={node.data.label}><slot /></span>
{/if}
