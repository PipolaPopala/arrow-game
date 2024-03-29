import { ARR_ARROW_CODES } from "../../constants"
import playgroundReducer, {
  initialState,
  setEnteredValue,
  setCurrentStep,
  setSteps,
} from "../slices"

describe("reducer setEnteredValue", () => {
  it("check setEnteredValue", () => {
    const enteredValue = ARR_ARROW_CODES[0]

    const setCurrentStepState = playgroundReducer(
      initialState,
      setCurrentStep(),
    )

    const setStepsState = playgroundReducer(setCurrentStepState, setSteps())

    const setEnteredValueState = playgroundReducer(
      setStepsState,
      setEnteredValue(enteredValue),
    )

    expect(setStepsState.steps[0].enteredValue).toBe(null)
    expect(setEnteredValueState.steps[0].enteredValue).toBe(enteredValue)
  })

  it("check totalSuccessful and totalUnsuccessful", () => {
    const setCurrentStepState = playgroundReducer(
      initialState,
      setCurrentStep(),
    )

    const setStepsState = playgroundReducer(setCurrentStepState, setSteps())

    const setEnteredValueState = playgroundReducer(
      setStepsState,
      setEnteredValue(setStepsState.steps[0].currentValue),
    )

    expect(setStepsState.totalSuccess).toBe(0)
    expect(setStepsState.totalUnsuccess).toBe(0)
    expect(setEnteredValueState.totalSuccess).toBe(1)
    expect(setEnteredValueState.totalUnsuccess).toBe(0)
  })
})
