<script>
  import { clickOutside } from "../actions/clickOutside";
  import { createEventDispatcher } from "svelte";
  export let show = false;

  let dispatch = createEventDispatcher();

  function handleSelect(color) {
    //show = false;
    dispatch("colorSelected", { color });
  }
</script>

<div use:clickOutside on:clickOutside={() => (show = false)} class="relative">
  <button on:click={() => (show = true)}>
    <iconify-icon inline icon="ic:outline-color-lens" width="20" height="20" class="text-slate-800" />
  </button>
  {#if show}
    <div class="absolute z-10 -top-[70px] -left-10">
      <div class="w-24 h-16 p-2 bg-white border shadow-xl cursor-pointer ">
        <button
          class="w-4 h-4 bg-white border border-gray-200 rounded-full hover:border-2 hover:border-gray-400"
          on:click={() => handleSelect("#fff")}
        />
        <button class="w-4 h-4 bg-red-200 rounded-full hover:border-2 hover:border-gray-400" on:click={() => handleSelect("#fecaca")} />
        <button class="w-4 h-4 bg-orange-200 rounded-full hover:border-2 hover:border-gray-400" on:click={() => handleSelect("#fed7aa")} />
        <button class="w-4 h-4 rounded-full bg-amber-200 hover:border-2 hover:border-gray-400" on:click={() => handleSelect("#fde68a")} />
        <button class="w-4 h-4 rounded-full bg-lime-200 hover:border-2 hover:border-gray-400" on:click={() => handleSelect("#d9f99d")} />
        <button class="w-4 h-4 bg-teal-200 rounded-full hover:border-2 hover:border-gray-400" on:click={() => handleSelect("#99f6e4")} />
        <button class="w-4 h-4 bg-blue-200 rounded-full hover:border-2 hover:border-gray-400" on:click={() => handleSelect("#bfdbfe")} />
        <button class="w-4 h-4 rounded-full bg-fuchsia-300 hover:border-2 hover:border-gray-400" on:click={() => handleSelect("#f0abfc")} />
      </div>
    </div>
  {/if}
</div>
