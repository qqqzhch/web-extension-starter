import { BackgroundDispatch, RootState } from "../../Background/index"


import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

export const useBackgroundDispatch = (): BackgroundDispatch =>
  useDispatch<BackgroundDispatch>()
export const useBackgroundSelector: TypedUseSelectorHook<RootState> =
  useSelector

export type  { RootState }


