import styles from "./RandomArrows.module.css"
import cn from "classnames"
import { useAppSelector } from "../../../../../../app/hooks"
import type { IPlaygroundStepsStare } from "../../../../store/types"
import { MAP_ARROW_CODES } from "../../../../constants"
import type { IMapArrowCodes } from "../../../../type"

const RandomArrows: React.FC = () => {
  const state = useAppSelector(state => state.playgroundReducer)

  const getStylesRandomKeys = (element: IPlaygroundStepsStare): string => {
    return cn(styles.icon, {
      [styles.iconSuccess]: element.success && element.success !== null,
      [styles.iconUnsuccess]: !element.success && element.success !== null,
    })
  }

  return (
    <div className={styles.wrapper}>
      {state.steps.map(element => (
        <span key={element.step} className={getStylesRandomKeys(element)}>
          {MAP_ARROW_CODES[element.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </div>
  )
}

export default RandomArrows
