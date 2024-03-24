export interface IPlaygroundStepsStare {
  currentValue: string
}

export interface IPlaygroundState {
  currentStep: number
  steps: IPlaygroundStepsStare[]
}
