'use client'
import { FormEvent, useState } from 'react'
import Modal from './Modal'
import { v4 as uuidv4 } from 'uuid'
import { addTodo, getAllTodos } from '../../apis'
import { useRouter } from 'next/navigation'

const AddTask = () => {
  const router = useRouter()
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [newText, setNewText] = useState<string>('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newTodo = await addTodo({ id: uuidv4(), text: newText })
    console.log(newTodo)
    setNewText('')
    setOpenModal(false)
    router.refresh()
  }

  return (
    <>
      <button
        onClick={(e) => setOpenModal(true)}
        className='w-full btn btn-primary'
      >
        Add New Task
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={3}
          stroke='currentColor'
          className='w-5 h-5'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 6v12m6-6H6'
          />
        </svg>
      </button>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3 className='text-lg font-bold'>Add New Task</h3>
          <div className='modal-action'>
            <input
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              type='text'
              placeholder='Type here'
              className='w-full input input-bordered'
            />
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default AddTask
