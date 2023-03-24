<script>
  import { getContext } from "svelte";
  import { notes } from "../store/db";
  import ColorPicker from "./ColorPicker.svelte";

  export let note;
  let showColorPick = false;

  function handleDelete() {
    notes.deleteNote(note.id);
  }

  function handleUpdateColor(color) {
    note.color = color;
    notes.updateNote(note);
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  id={note.id.toString()}
  on:click|self
  style="background-color: {note.color};"
  class="flex relative flex-col justify-start items-start border border-gray-300 p-4 rounded-lg hover:shadow-lg sm:w-[300px] min-h-[150px] max-h-[500px] cursor-pointer group"
>
  <h1 on:click|self class="text-xl font-bold text-gray-600">
    {note.title}
  </h1>
  <p on:click|self class=" mt-2 text-lg text-gray-800 h-auto overflow-hidden w-full min-h-[50px] break-all whitespace-pre-wrap inline-block ">
    {note.body}
  </p>
  <div class="flex justify-end w-full mt-4 opacity-0 gap-x-2 group-hover:opacity-100" class:opacity-100={showColorPick}>
    <ColorPicker bind:show={showColorPick} on:colorSelected={(e) => handleUpdateColor(e.detail.color)} />
    <button on:click={handleDelete}><iconify-icon inline icon="clarity:trash-line" width="20" height="20" class="text-slate-800" /></button>
  </div>
</div>
