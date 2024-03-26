import type { IMapArrowCodes, IEND_GAME_CONDITION } from "./type"

export const INTERVAL_TIME: number = 3000

export const MAP_ARROW_CODES: IMapArrowCodes = {
  ArrowUp: "⬆️",
  ArrowDown: "⬇️",
  ArrowLeft: "⬅️",
  ArrowRight: "➡️",
}

export const ARR_ARROW_CODES = Object.keys(MAP_ARROW_CODES)

export const END_GAME_CONDITION: IEND_GAME_CONDITION = {
  SUCCESS_COUNT: 3,
  UNSUCCESS_COUNT: 3,
}
