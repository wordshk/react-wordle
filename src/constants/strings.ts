import { VALID_GUESSES } from '../constants/validGuesses'

export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ["嘩，你的運氣好厲害！", "嘩，你的運氣好厲害！", "好快！", "贏啦", "贏啦", "辛苦您啦", "辛苦您啦"]
export const GAME_COPIED_MESSAGE = '遊戲紀錄已複製到剪貼簿上'
export const NOT_ENOUGH_LETTERS_MESSAGE = '輸入符號不足'
export const WORD_NOT_FOUND_MESSAGE = '找不到這個詞'
export const HARD_MODE_ALERT_MESSAGE =
  'Hard Mode can only be enabled at the start!'
export const HARD_MODE_DESCRIPTION =
  '必須使用所有提示的字'
export const HIGH_CONTRAST_MODE_DESCRIPTION = '提升顏色辨別程度'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `正確答案是 ${solution} (${VALID_GUESSES[solution]})`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess must contain ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = '往績統計'
export const GUESS_DISTRIBUTION_TEXT = '提交次數分佈'
export const NEW_WORD_TEXT = '離下次的時間還有'
export const SHARE_TEXT = '分享'
export const MIGRATE_BUTTON_TEXT = 'Transfer'
export const MIGRATE_DESCRIPTION_TEXT =
  'Click here to transfer your statistics to a new device.'
export const TOTAL_TRIES_TEXT = '參與次數'
export const SUCCESS_RATE_TEXT = '勝率'
export const CURRENT_STREAK_TEXT = '目前連勝次數'
export const BEST_STREAK_TEXT = '最長連勝紀錄'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  "You are using an embedded browser and may experience problems sharing or saving your results. We encourage you rather to use your device's default browser."
export const SETTINGS = '設定'
