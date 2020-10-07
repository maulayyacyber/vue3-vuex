import { createStore } from 'vuex'

const store = createStore({
    
    //state
    state: {
        todos: [
            {
                title: "Task 1",
                completed: false
            },
            {
                title: "Task 2",
                completed: false
            }
        ]
    },

    //getters
    getters: {

        completedTodos(state) {
            return state.todos.filter(todo => {
                return todo.completed === true
            }).length
        },

        pendingTodos(state) {
            return state.todos.filter(todo => {
                return todo.completed === false
            }).length
        }

    },

    //mutations
    mutations: {
        NEW_TODO(state, todoItem) {
            state.todos.push({
                title: todoItem,
                completed: false
            })
        },

        DELETE_TODO(state, todoItem) {
            let index = state.todos.indexOf(todoItem)
            state.todos.splice(index, 1)
        },

        TOGGLE_TODO_STATUS(state, todoItem) {
            todoItem.completed = !todoItem.completed
        }
    },

    //actions
    actions: {
        addNewTodo({ commit }, todoItem) {
            commit('NEW_TODO', todoItem)
        },

        deleteTodo({ commit }, todoItem) {
            commit('DELETE_TODO', todoItem)
        },

        toggleTodoStatus({ commit }, todoItem) {
            commit('TOGGLE_TODO_STATUS', todoItem)
        }
    },
})

export default store;