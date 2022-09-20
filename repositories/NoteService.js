"use strict";
exports.__esModule = true;
var notes_js_1 = require("../helpers/notes.js");
var datas_js_1 = require("../helpers/datas.js");
var NoteService = /** @class */ (function () {
    function NoteService() {
    }
    NoteService.prototype.create = function (note) {
        var createdNote = notes_js_1["default"].push({
            id: new Date().getTime().toString(),
            name: note.name,
            created: datas_js_1.dataCreate,
            category: note.category,
            content: note.content,
            dates: "",
            archived: false
        });
        return createdNote;
    };
    NoteService.prototype.getAll = function () {
        return notes_js_1["default"];
    };
    NoteService.prototype.getOne = function (id) {
        if (!id) {
            throw new Error("не указан ID");
        }
        var note = notes_js_1["default"].filter(function (el) { return el.id === id; });
        return note;
    };
    NoteService.prototype.edit = function (id, note) {
        if (!id) {
            throw new Error("не указан ID");
        }
        var editNote = notes_js_1["default"].filter(function (note) { return note.id === id; });
        editNote[0].name = note.name;
        editNote[0].content = note.content;
        editNote[0].category = note.category;
        editNote[0].dates = datas_js_1.dataChangeNote;
        return editNote;
    };
    NoteService.prototype["delete"] = function (id) {
        if (!id) {
            throw new Error("не указан ID");
        }
        return notes_js_1["default"].filter(function (el) { return el.id !== id; });
    };
    NoteService.prototype.statistic = function () {
        var Ideas, Quotes, Tasks, Thoughts, IdeasActive, QuotesActive, TasksActive, ThoughtsActive;
        Ideas =
            Quotes =
                Tasks =
                    Thoughts =
                        IdeasActive =
                            QuotesActive =
                                TasksActive =
                                    ThoughtsActive =
                                        0;
        notes_js_1["default"].forEach(function (note) {
            if (note.category === "Idea") {
                Ideas++;
                if (!note.archived)
                    IdeasActive++;
            }
            if (note.category === "Quote") {
                Quotes++;
                if (!note.archived)
                    QuotesActive++;
            }
            if (note.category === "Task") {
                Tasks++;
                if (!note.archived)
                    TasksActive++;
            }
            if (note.category === "Random Thought") {
                Thoughts++;
                if (!note.archived)
                    ThoughtsActive++;
            }
        });
        return [
            { category: "Idea", active: IdeasActive, total: Ideas - IdeasActive },
            { category: "Quote", active: QuotesActive, total: Quotes - QuotesActive },
            { category: "Task", active: TasksActive, total: Tasks - TasksActive },
            {
                category: "Random Thought",
                active: ThoughtsActive,
                total: Thoughts - ThoughtsActive
            },
        ];
    };
    return NoteService;
}());
exports["default"] = new NoteService();
