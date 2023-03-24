<script>
	import AddNote from './AddNote.svelte'
	import ColorPicker from './ColorPicker.svelte'
</script>

<svelte:head>
	<title>Note Ninja</title>
	<link rel="icon" type="image/svg+xml" href="/Icon.svg" />
</svelte:head>
<header
	class="flex flex-col justify-center w-full max-w-xl m-4 min-w-max"
>
	<div class="flex items-center justify-center p-4 gap-x-8">
		<img src="\Icon.svg" alt="Logo" class="w-16 h-16" />
		<div class="flex flex-col items-start">
			<div class="text-5xl font-semibold">Note Ninja</div>
			<div class="mt-1 text-lg">
				A simple notebook app powered by Tauri<iconify-icon
					inline
					icon="vscode-icons:file-type-tauri"
					width="20"
					height="20"
					class="pl-1"
				/>
			</div>
		</div>
	</div>

	<AddNote />
</header>
