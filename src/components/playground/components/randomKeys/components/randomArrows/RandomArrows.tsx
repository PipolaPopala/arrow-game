import styles from "./RandomArrows.module.css"
import { useAppSelector } from "../../../../../../app/hooks"
import type { IPlaygroundStepsStare } from "../../../../store/types"
import { MAP_ARROW_CODES } from "../../../../constants"
import type { IMapArrowCodes } from "../../../../type"

const RandomArrows: React.FC = () => {
  const state = useAppSelector(state => state.playgroundReducer)

  const getStylesRandomKeys = (element: IPlaygroundStepsStare): string => {
    if (element.success && element.success !== null) {
      return styles.iconSuccess
    }
    if (!element.success && element.success !== null) {
      return styles.iconUnsuccess
    }
    return styles.icon
  }

  return (
    <>
      {state.steps.map(element => (
        <span key={element.step} className={getStylesRandomKeys(element)}>
          {MAP_ARROW_CODES[element.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </>
  )
}

export default RandomArrows
