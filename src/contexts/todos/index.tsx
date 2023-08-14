import { Dispatch, createContext, useContext, useReducer } from 'react'
import { todosReducer } from './reducer'
import { TodoItemProps, TodosAction } from './type'

const TodosContext = createContext<TodoItemProps[] | null>(null)
const TodosDispatch = createContext<Dispatch<TodosAction> | null>(null)

export const useTodos = () => useContext(TodosContext)
export const useTodosDispatch = () => useContext(TodosDispatch)

const initialTodos: TodoItemProps[] = [
  { value: "Codewunder's next task", isChecked: false },
  { value: 'Create a To-do list app', isChecked: true },
]

export function TodosProvider({ children }: { children: React.ReactNode }) {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos)

  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatch.Provider value={dispatch}>
        {children}
      </TodosDispatch.Provider>
    </TodosContext.Provider>
  )
}
