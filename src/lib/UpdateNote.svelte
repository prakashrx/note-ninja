<script>
  import { clickOutside } from "../actions/clickOutside";
  import { scale } from "svelte/transition";
  import { notes } from "../store/db";
  let showDialog = false;
  let context;
  let title;
  let body;

  export function show(note) {
    context = note;
    title = context.title;
    body = context.body;
    showDialog = true;
  }

  function handleUpdate(e) {
    let updatedNote = { ...context, title, body };
    notes.updateNote(updatedNote);
    showDialog = false;
  }
</script>

{#if showDialog}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div on:click={() => (showDialog = false)} class="fixed top-0 left-0 flex items-start justify-center w-screen h-screen bg-gray-500 bg-opacity-50">
    <div
      in:scale
      on:click|stopPropagation
      class="w-full max-w-xl min-h-[150px] max-h-[500px] bg-white opacity-100 z-30 mt-36 shadow-lg shadow-gray-500 rounded-lg p-4"
    >
      <input
        type="text"
        placeholder="Title"
        bind:value={title}
        class="w-full px-4 py-2 text-lg font-bold text-gray-700 bg-white border-b-0 rounded-t-lg focus:outline-0"
      />
      <div
        bind:textContent={body}
        contenteditable="true"
        role="textbox"
        class="bg-white border-gray-300 text-gray-700 text-lg px-4 py-2 rounded-b-lg  focus:outline-0 w-full max-h-[380px] overflow-y-auto break-all  inline-block whitespace-pre-wrap"
        placeholder="Type a note..."
      />
      <div class="flex justify-end my-2">
        <button on:click={handleUpdate} class="px-4 py-1 text-gray-700 rounded-md bg-gray-50 hover:bg-gray-300 hover:shadow-sm focus:outline-gray-400"
          >Update</button
        >
      </div>
    </div>
  </div>
{/if}
