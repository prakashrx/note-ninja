# Note Ninja
Note Ninja is a simple note-taking desktop app created with Rust and Svelte. It is designed to be an alternative to Google Keep and was developed as part of an educational training exercise.

![Screenshot](https://raw.githubusercontent.com/prakashrx/note-ninja/main/screenshots/screenshot.jpg)

## Features

- Add, delete, and update notes
- Coloring feature for notes
- Interacts with the file system to store and retrieve notes using the tauri-plugin-store-api plugin

## Technologies Used

- Rust
- Svelte
- Tauri
- pmpm
- Tailwind

## Visual Studio Code Setup

- [VS Code](https://code.visualstudio.com/) 
- [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) 
- [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) 
- [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer).

## Getting Started
To get started with Note Ninja, follow these steps:

- Clone the repository
    
    ```bash
    git clone https://github.com/prakashrx/note-ninja.git
    cd note-ninja
    ```
- Install Rust and pmpm on your system
- Run `pmpm install` to install the dependencies
- Run `pmpm tauri dev` to start the development server and Start the Tauri Desktop app in Debug mode
- To Build the executable in release mode, use the command `pnpm tauri build`

If you prefer to use your own IDE, you may need to configure your IDE to use the correct build tools and linters for your project. Consult your IDE's documentation for more information on how to set up your IDE for Rust/Tauri and Svelte development.

## License
Note Ninja is released under the MIT License. See the LICENSE file for details.

