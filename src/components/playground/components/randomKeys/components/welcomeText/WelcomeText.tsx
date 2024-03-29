import styles from "./WelcomeText.module.css"
import Loader from "./img/loader.svg"
import { TypographyText } from "../../../../../UI"

export interface IWelcomeTextProps {
  isTimerActive: boolean
}

const WelcomeText: React.FC<IWelcomeTextProps> = props => {
  const { isTimerActive } = props

  if (isTimerActive) {
    return (
      <div className={styles.wrapper}>
        <span className={styles.icon}>
          <img className={styles.loader} src={Loader} alt="loader" />
        </span>
      </div>
    )
  }

  return (
    <TypographyText>
      Press "Play" to start the game and wait for the first arrow to appear
    </TypographyText>
  )
}

export default WelcomeText
