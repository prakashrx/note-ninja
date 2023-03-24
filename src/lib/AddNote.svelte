<script>
  import { clickOutside } from "../actions/clickOutside";
  import { notes } from "../store/db";

  let title;
  let body;
  let placeholder;
  let focused = false;
  $: focused, reset();

  function reset() {
    title = "";
    body = "";
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      const newNote = {
        id: new Date().getTime(),
        title,
        body,
        color: "#fff",
      };
      notes.addNote(newNote);
      focused = false;
    } else if (e.key === "Escape") {
      console.log(e.key);
      focused = false;
    }
  }

  function handleFocus(e) {
    focused = true;
  }
</script>

<div use:clickOutside on:clickOutside={() => (focused = false)} class="mt-4 ">
  <input
    type="text"
    placeholder={focused ? "Title" : "Add a note"}
    bind:value={title}
    on:focus={handleFocus}
    on:keydown={handleKeyDown}
    class="w-full px-4 py-2 text-lg text-gray-700 bg-white border-b-0 border-gray-300 rounded-lg shadow-md focus:outline-0"
    class:font-bold={focused}
    class:rounded-b-none={focused}
  />
  {#if focused}
    <textarea
      bind:value={body}
      on:focus={handleFocus}
      on:keydown={handleKeyDown}
      class="w-full px-4 py-2 text-lg text-gray-700 bg-white border-gray-300 rounded-b-lg shadow-md focus:outline-0 min-h-16 "
      placeholder="Type a note..."
    />
  {/if}
</div>
