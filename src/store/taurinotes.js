import { Store } from "tauri-plugin-store-api";

const notes = [];
const db = new Store("db.dat");

export default {
  notes,
  load: async () => {
    let savedNotes = await db.get("notes");
    console.log(savedNotes);
    if (savedNotes != null) {
      notes.push(...savedNotes);
    }
    return notes;
  },
  addNote: async (note) => {
    notes.unshift(note);
    await db.set("notes", notes);
    await db.save();
  },
  updateNote: async (note) => {
    const inx = notes.findIndex((n) => n.id === note.id);
    notes[inx] = note;
    await db.set("notes", notes);
    await db.save();
  },
  deleteNote: async (id) => {
    const inx = notes.findIndex((note) => note.id === id);
    notes.splice(inx, 1);
    console.log(notes);
    await db.set("notes", notes);
    await db.save();
  },
};
