const notes = [
  {
    id: 1,
    title: "Title 1",
    body: "Lorem ipsum dolor sit amet",
    color: "#fff",
  },
  {
    id: 2,
    title: "Title 2",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero consectetur adipiscing elit. Nunc vulputate",
    color: "#fff",
  },
  {
    id: 3,
    title: "Title 3",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero consectetur adipiscing elit. Nunc vulputate",
    color: "#fff",
  },
  {
    id: 4,
    title: "Title 4",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero consectetur adipiscing elit. Nunc vulputate",
    color: "#fff",
  },
  {
    id: 5,
    title: "Title 5",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero consectetur adipiscing elit. Nunc vulputate",
    color: "#fff",
  },
  {
    id: 6,
    title: "Title 6",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero consectetur adipiscing elit. Nunc vulputate",
    color: "#fff",
  },
];

export default {
  notes,
  load: async () => notes,
  addNote: async (note) => {
    notes.unshift(note);
  },
  updateNote: async (note) => {
    const inx = notes.findIndex((n) => n.id === note.id);
    notes[inx] = note;
  },
  deleteNote: async (id) => {
    const inx = notes.findIndex((note) => note.id === id);
    notes.splice(inx, 1);
  },
};
