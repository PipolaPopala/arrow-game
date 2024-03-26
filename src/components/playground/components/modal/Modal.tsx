// import styles from "./Modal.module.css"
import { resetStore } from "../../store/slices"
import { useAppDispatch } from "../../../../app/hooks"
import ResultMessage from "./components/resultMessage"

export interface IModalProps {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
  isSuccessEndGame: boolean | null
}

const Modal: React.FC<IModalProps> = props => {
  const { setIsShowModal, isSuccessEndGame } = props
  const dispatch = useAppDispatch()

  const handleClose = () => {
    setIsShowModal(false)
    dispatch(resetStore())
  }

  return (
    <div>
      <h3>Modal</h3>
      <ResultMessage isSuccessEndGame={isSuccessEndGame} />
      <button onClick={handleClose}>Start New Game</button>
    </div>
  )
}

export default Modal
