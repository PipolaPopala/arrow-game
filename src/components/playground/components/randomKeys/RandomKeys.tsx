import { useAppSelector } from "../../../../app/hooks"
import { TypographyHeader } from "../../../UI"
import RandomArrows from "./randomArrows"
import WelcomeText from "./welcomeText"

export interface IRandomKeysProps {
  isTimerActive: boolean
}

const RandomKeys: React.FC<IRandomKeysProps> = props => {
  const { isTimerActive } = props

  const state = useAppSelector(state => state.playgroundReducer)

  return (
    <div>
      <TypographyHeader>RandomKeys</TypographyHeader>
      {state.steps.length === 0 ? (
        <WelcomeText isTimerActive={isTimerActive} />
      ) : (
        <RandomArrows />
      )}
    </div>
  )
}

export default RandomKeys
