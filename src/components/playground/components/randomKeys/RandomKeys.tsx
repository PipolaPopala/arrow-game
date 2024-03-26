// import styles from "./RandomKeys.module.css"
import { useAppSelector } from "../../../../app/hooks"
import RandomArrows from "./components/randomArrows"
import WelcomeText from "./components/welcomeText"

export interface IRandomKeysProps {
  isTimerActive: boolean
}

const RandomKeys: React.FC<IRandomKeysProps> = props => {
  const { isTimerActive } = props

  const state = useAppSelector(state => state.playgroundReducer)

  return (
    <div>
      <h3>RandomKeys</h3>
      {state.steps.length === 0 ? (
        <WelcomeText isTimerActive={isTimerActive} />
      ) : (
        <RandomArrows />
      )}
    </div>
  )
}

export default RandomKeys
