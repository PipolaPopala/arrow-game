import { useAppSelector } from "../../../../app/hooks"
import { MAP_ARROW_CODES } from "../../constants"
import type { IMapArrowCodes } from "../../type"

export const useKeyPressedElement = (): string => {
  const state = useAppSelector(state => state.playgroundReducer)

  if (state.steps.length) {
    const enteredValue = state.steps[state.currentStep - 1].enteredValue

    if (enteredValue) {
      return MAP_ARROW_CODES[enteredValue as keyof IMapArrowCodes]
    }
  }

  return "⏳"
}
