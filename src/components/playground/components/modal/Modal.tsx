import styles from "./Modal.module.css"
import cn from "classnames"
import { resetStore } from "../../store/slices"
import { useAppDispatch } from "../../../../app/hooks"
import ResultMessage from "./components/resultMessage"
import { Button } from "../../../UI"
import { Modal as MuiModal } from "@mui/material"

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
    <MuiModal open onClose={handleClose} className={styles.wrapper}>
      <div
        className={cn(styles.container, {
          [styles.modalSuccess]: isSuccessEndGame,
          [styles.modalUnsuccess]: !isSuccessEndGame,
        })}
      >
        <ResultMessage isSuccessEndGame={isSuccessEndGame} />
        <Button onClick={handleClose} className={styles.button}>
          Start New Game
        </Button>
      </div>
    </MuiModal>
  )
}

export default Modal
