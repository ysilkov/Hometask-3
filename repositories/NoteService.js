import notes from "../helpers/Note.js";
import { dataChangeNote, dataCreate } from "../helpers/datas.js";

class NoteService {
  create(note) {
    const createdNote = notes.push({
      id: new Date().getTime().toString(),
      name: note.name,
      created: dataCreate,
      category: note.category,
      content: note.content,
      dates: "",
      archived: false,
    });
    return createdNote;
  }

  getAll() {
    return notes;
  }
  getOne(id) {
    if (!id) {
      throw new Error("не указан ID");
    }
    const note = notes.filter((el) => el.id === id);
    return note;
  }

  edit(id, note) {
    if (!id) {
      throw new Error("не указан ID");
    }
    let editNote = notes.filter((note) => note.id === id);
    editNote[0].name = note.name;
    editNote[0].content = note.content;
    editNote[0].category = note.category;
    editNote[0].dates = dataChangeNote;
    return editNote;
  }

  delete(id) {
    if (!id) {
      throw new Error("не указан ID");
    }
    return notes.filter((el) => el.id !== id);
  }

  statistic() {
    let Ideas,
      Quotes,
      Tasks,
      Thoughts,
      IdeasActive,
      QuotesActive,
      TasksActive,
      ThoughtsActive;
    Ideas =
      Quotes =
      Tasks =
      Thoughts =
      IdeasActive =
      QuotesActive =
      TasksActive =
      ThoughtsActive =
        0;

    notes.forEach((note) => {
      if (note.category === "Idea") {
        Ideas++;
        if (!note.archived) IdeasActive++;
      }
      if (note.category === "Quote") {
        Quotes++;
        if (!note.archived) QuotesActive++;
      }
      if (note.category === "Task") {
        Tasks++;
        if (!note.archived) TasksActive++;
      }
      if (note.category === "Random Thought") {
        Thoughts++;
        if (!note.archived) ThoughtsActive++;
      }
    });
    return [
      { category: "Idea", active: IdeasActive, total: Ideas - IdeasActive },
      { category: "Quote", active: QuotesActive, total: Quotes - QuotesActive },
      { category: "Task", active: TasksActive, total: Tasks - TasksActive },
      {
        category: "Random Thought",
        active: ThoughtsActive,
        total: Thoughts - ThoughtsActive,
      },
    ];
  }
}

export default new NoteService();
