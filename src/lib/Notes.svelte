<script>
  import { fly, fade } from "svelte/transition";
  import Note from "./Note.svelte";
  import { notes } from "../store/db";
  import UpdateNote from "./UpdateNote.svelte";
  import { onMount } from "svelte";
  let updateDialog;
  let initialized = false;
  onMount(() => {
    setTimeout(() => {
      initialized = true;
    }, 100);
  });
</script>

<main class="container w-full h-full mx-auto mt-12">
  <div class="space-y-4 columns-1 sm:columns-2 md:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5 dire">
    {#each $notes as note (note.id)}
      <div class="break-inside-avoid" in:fly={{ y: -200, x: 200, duration: initialized ? 500 : 0 }} out:fly={{ y: 300, x: 700, duration: 300 }}>
        <Note {note} on:click={() => updateDialog.show(note)} />
      </div>
    {/each}
  </div>
</main>
<UpdateNote bind:this={updateDialog} />
