import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      { id: 1, todo: "ders çalış", done: false },
      { id: 2, todo: "film izle", done: true },
      { id: 3, todo: "dizi izle", done: false },
      { id: 4, todo: "koşu yap", done: true },
    ],
  },
  getters: {
    todoTotalCount(state) {
      return state.todos.length;
    },
    todoDoneCount(state) {
      return state.todos.filter((x) => x.done == true).length;
    },
    todoNotDoneCount(state) {
      return state.todos.filter((x) => x.done == false).length;
    },
  },
  mutations: {
    addTodo(state, { newTodo, done }) {
      let todo = {
        id: Math.floor(Math.random() * 1000000),
        todo: newTodo,
        done: done,
      };
      state.todos.push(todo);
    },
  },
  actions: {
    addTodoAction(contex, todoObject) {
      contex.commit("addTodo", todoObject);
    },
  },
  modules: {},
});
