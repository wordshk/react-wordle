import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="遊戲說明" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
      這是<b>新</b>的注音版 Wordle！答案是一個中文詞語。猜答案要提供五個構成中文詞語的注音碼（不包括聲調），按「ENTER」鍵提交。提交答案後，方格會變成不同的顏色，作為你下一輪的提示。例子：
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ㄕ" />
        <Cell value="ㄚ" />
        <Cell value="ㄏ" />
        <Cell value="ㄞ" />
        <Cell
          value="ㄗ"
          isRevealing={true}
          isCompleted={true}
          status="correct"
        />
        <span style={{width:45 }}>傻孩子</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        答案入面有 ㄗ 這個注音碼，而且位置正確。
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ㄓ" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="ㄢ"
          status="present"
        />
        <Cell value="ㄍ" />
        <Cell value="ㄨ" />
        <Cell value="ㄥ" />
        <span style={{width:45 }}>戰功</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        個答案係有ㄢ這個注音碼，但位置不對。
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell isRevealing={true} isCompleted={true} value="ㄕ" status="absent" />
        <Cell value="ㄗ" />
        <Cell value="ㄐ" />
        <Cell value="ㄧ" />
        <Cell value="ㄚ" />
        <span style={{width:45 }}>十字架</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        答案裏面沒有ㄕ。
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        這是開源遊戲 - <a href="https://github.com/cwackerfuss/react-wordle" className="underline font-bold" >英文版的源代碼在這裡</a> - <a href="https://github.com/wordshk/react-wordle" className="underline font-bold" >注音版的源代碼</a>。<br />另外，<a href="https://words.hk/static/bopomofo-wordle/index2.html" className="underline" >舊版注音Wordle在這裡</a> / 聯絡、查詢：<a className="underline" href="mailto:info+bpmf@words.hk">info+bpmf@words.hk</a>
      </p>
    </BaseModal>
  )
}
