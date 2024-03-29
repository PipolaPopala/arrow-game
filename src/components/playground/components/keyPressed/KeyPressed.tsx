import styles from "./KeyPressed.module.css"

import { useEffect, useCallback } from "react"
import { MAP_ARROW_CODES } from "../../constants"
import { setEnteredValue } from "../../store/slices"
import { useAppDispatch } from "../../../../app/hooks"
import { useKeyPressedElement } from "./hooks"
import { TypographyHeader, TypographyText } from "../../../UI"

export interface IKeyPressedProps {
  isTimerActive: boolean
}

const KeyPressed: React.FC<IKeyPressedProps> = props => {
  const { isTimerActive } = props
  const dispatch = useAppDispatch()
  const keyPressedElement = useKeyPressedElement()

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (
        Object.prototype.hasOwnProperty.call(MAP_ARROW_CODES, event.key) &&
        isTimerActive
      ) {
        dispatch(setEnteredValue(event.key))
      }
    },
    [dispatch, isTimerActive],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  })

  return (
    <div>
      <TypographyHeader>Key pressed</TypographyHeader>
      <div className={styles.container}>
        <TypographyText>
          Press the key corresponding to the key in "Random keys"
        </TypographyText>
        <div className={styles.wrapper}>
          <span className={styles.icon}>{keyPressedElement}</span>
        </div>
      </div>
    </div>
  )
}

export default KeyPressed
