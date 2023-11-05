import { SetStateAction } from 'react'

interface ModalProps {
  openModal: boolean
  setOpenModal: (newState: SetStateAction<boolean>) => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ openModal, setOpenModal, children }) => {
  return (
    <>
      <dialog
        id='my_modal_3'
        className={`modal ${openModal ? 'modal-open' : ''}`}
      >
        <div className='modal-box'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button
              onClick={() => setOpenModal(false)}
              className='absolute btn btn-sm btn-circle btn-ghost right-2 top-2'
            >
              ✕
            </button>
          </form>
          {children}
        </div>
      </dialog>
    </>
  )
}

export default Modal
