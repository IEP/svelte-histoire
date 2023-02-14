<script lang="ts">
  export let title: string = '';
  export let content: string;

  let showedContent: string;
  $: showedContent = content.length > 200 ? content.slice(0, 200) + '...' : content;
</script>

<div
  class="block min-w-min max-w-md cursor-pointer rounded-lg border border-gray-400 bg-white p-2 transition duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:border-red-700 hover:shadow-lg"
>
  {#if title}
    <h5 class="mb-2 text-xl font-medium leading-tight text-gray-900">{title}</h5>
  {/if}
  <p class="mb-2 text-base text-gray-700">
    {showedContent}
  </p>
</div>
