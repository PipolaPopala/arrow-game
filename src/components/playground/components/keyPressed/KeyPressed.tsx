// import styles from "./KeyPressed.module.css"

import { useEffect, useCallback } from "react"
import { MAP_ARROW_CODES } from "../../constants"
import { setEnteredValue } from "../../store/slices"
import { useAppDispatch } from "../../../../app/hooks"
import { useKeyPressedElement } from "./hooks"

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
      <h3>KeyPressed</h3>
      <span>{keyPressedElement}</span>
    </div>
  )
}

export default KeyPressed
