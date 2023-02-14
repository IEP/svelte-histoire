<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';
  export let Hst: Hst;

  import Card from './Card.svelte';

  let title: string = 'Some kind of title';
  let content: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis porttitor condimentum. Curabitur ornare enim ' +
    'in neque lacinia, id pharetra velit iaculis. Nam luctus fringilla justo et sagittis. Integer sit amet congue est, a ultrices dui. ' +
    'Fusce pharetra id sapien eget scelerisque. Vestibulum scelerisque euismod mi, eget tincidunt odio lacinia sed. Aenean euismod at ' +
    'magna non imperdiet. Nullam augue erat, convallis ac tellus ac, maximus convallis est. In convallis, lorem in suscipit rhoncus, orci ' +
    'sem sagittis ipsum, in pellentesque velit nisi a mauris. Integer facilisis varius dui quis dapibus. Fusce congue, turpis non ' +
    'pellentesque ullamcorper, nunc elit finibus orci, sit amet fringilla tellus purus a tellus. Ut interdum urna ex, a volutpat lorem ' +
    'semper ut. Aliquam aliquam tristique lectus, a aliquam ipsum mollis iaculis.';
</script>

<div class="container mx-auto p-10">
  <Hst.Story title="Card">
    <Hst.Variant title="No Title">
      <Card content="The quick brown fox jumps over the lazy dog" />
    </Hst.Variant>
    <Hst.Variant title="With Title">
      <Card title="Card Title" content="The quick brown fox jumps over the lazy dog" />
    </Hst.Variant>
    <Hst.Variant title="Configurable">
      <Card {content} {title} />

      <svelte:fragment slot="controls">
        <Hst.Text bind:value={title} title="Title" />
        <Hst.Textarea bind:value={content} title="Content" />
      </svelte:fragment>
    </Hst.Variant>
  </Hst.Story>
</div>
