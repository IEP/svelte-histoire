<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	import '../../../app.css';

	import Card from './Card.svelte';

	export let Hst: Hst;
	let content: string = 'Hello';
</script>

<Hst.Story>
	<Card {content} />

	<svelte:fragment slot="controls">
		<Hst.Text bind:value={content} title="Content" />
	</svelte:fragment>
</Hst.Story>
