// import styles from "./WelcomeText.module.css"

export interface IWelcomeTextProps {
  isTimerActive: boolean
}

const WelcomeText: React.FC<IWelcomeTextProps> = props => {
  const { isTimerActive } = props

  if (isTimerActive) {
    return <span>loading...</span>
  }

  return (
    <div>
      Press "Play" to start the game and wait for the first arrow to appear
    </div>
  )
}

export default WelcomeText
