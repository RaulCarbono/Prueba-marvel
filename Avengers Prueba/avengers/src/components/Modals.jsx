import { UseModal } from "../Hooks/UseModal"
import Modal from "./Modal"

const Modals = () => {
 const [isOpenModal, openModal, closeModal] = UseModal(false)

  return (
    <div>
        <h2> Modals</h2>
    </div>
  )
}

export default Modals