import styles from "./ResultMessage.module.css"
import { TypographyText } from "../../../../../UI"

export interface IResultMessageProps {
  isSuccessEndGame: boolean | null
}

const ResultMessage: React.FC<IResultMessageProps> = props => {
  const { isSuccessEndGame } = props

  return (
    <div className={styles.wrapper}>
      {isSuccessEndGame ? (
        <TypographyText className={styles.text}>
          Congratulation! <br /> You win!
        </TypographyText>
      ) : (
        <TypographyText className={styles.text}>
          My regrets. <br /> You have lost this game
        </TypographyText>
      )}
    </div>
  )
}

export default ResultMessage
