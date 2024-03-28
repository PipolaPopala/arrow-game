import styles from "./Controls.module.css"
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded"
import PauseRoundedIcon from "@mui/icons-material/PauseRounded"
import { Button } from "../../../UI"

export interface IControlsProps {
  isTimerActive: boolean
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Controls: React.FC<IControlsProps> = props => {
  const { isTimerActive, setIsTimerActive } = props

  return (
    <div>
      <Button
        onClick={() => setIsTimerActive(true)}
        disabled={isTimerActive}
        className={styles.button}
        endIcon={<PlayArrowRoundedIcon />}
      >
        Play
      </Button>
      <Button
        onClick={() => setIsTimerActive(false)}
        disabled={!isTimerActive}
        className={styles.button}
        endIcon={<PauseRoundedIcon />}
      >
        Pause
      </Button>
    </div>
  )
}

export default Controls
