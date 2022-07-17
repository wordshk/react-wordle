import { solution } from '../../lib/words'
import { Cell } from './Cell'
import { SUPP_WIDTH } from '../../constants/settings'

export const EmptyRow = () => {
  const emptyCells = Array.from(Array(solution.length))

  return (
    <div className="flex justify-center mb-1">
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    <span style={{maxWidth: SUPP_WIDTH, width: SUPP_WIDTH}}>&nbsp;</span>
    </div>
  )
}
