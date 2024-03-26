export interface IPlaygroundStepsStare {
  step: number
  currentValue: string | null
  enteredValue: string | null
  success: boolean | null
}

export interface IPlaygroundState {
  currentStep: number
  steps: IPlaygroundStepsStare[]
  totalSuccess: number
  totalUnsuccess: number
}
