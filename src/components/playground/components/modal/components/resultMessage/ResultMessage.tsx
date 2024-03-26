// import styles from "./ResultMessage.module.css"

export interface IResultMessageProps {
  isSuccessEndGame: boolean | null
}

const ResultMessage: React.FC<IResultMessageProps> = props => {
  const { isSuccessEndGame } = props

  return isSuccessEndGame ? (
    <p>
      Congratulation! <br /> You win!
    </p>
  ) : (
    <p>
      My regrets. <br /> You have lost this game
    </p>
  )
}

export default ResultMessage
