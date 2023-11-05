import { iTask } from './types/tasks'

const baseURL = 'http://localhost:8000'

export const getAllTodos = async (): Promise<iTask[] | undefined> => {
  try {
    const response = await fetch(`${baseURL}/tasks`, {
      cache: 'no-store',
    })
    const fetchedTasks: iTask[] = await response.json()
    console.log({ tasks: fetchedTasks })
    return fetchedTasks
  } catch (error) {
    console.error('Error fetching tasks:', error)
  }
}

export const addTodo = async (todo: iTask): Promise<iTask | undefined> => {
  try {
    const response = await fetch(`${baseURL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    })
    const newTodo: iTask = await response.json()
    return newTodo
  } catch (error) {
    console.error('Error fetching tasks:', error)
  }
}

export const editTodo = async (todo: iTask): Promise<iTask | undefined> => {
  try {
    const response = await fetch(`${baseURL}/tasks/${todo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    })
    const updated: iTask = await response.json()
    return updated
  } catch (error) {
    console.error('Error fetching tasks:', error)
  }
}

export const deleteTodo = async (id: string): Promise<void> => {
  try {
    await fetch(`${baseURL}/tasks/${id}`, {
      method: 'DELETE',
    })
  } catch (error) {
    console.error('Error fetching tasks:', error)
  }
}
