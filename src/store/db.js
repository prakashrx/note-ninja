import { writable } from "svelte/store";
import noteStore from "./taurinotes";

export const notes = createStore();

function createStore() {
  let store = writable([], (set) => {
    noteStore.load().then((notes) => set(notes));
    return () => {};
  });

  return {
    subscribe: store.subscribe,
    addNote: (note) => {
      noteStore.addNote(note).then(() => {
        store.update(() => noteStore.notes);
      });
    },
    deleteNote: (id) => {
      noteStore.deleteNote(id).then(() => {
        store.update(() => noteStore.notes);
      });
    },
    updateNote: (note) => {
      noteStore.updateNote(note).then(() => {
        store.update(() => noteStore.notes);
      });
    },
  };
}
