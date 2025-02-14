import { getGuessStatuses } from '../../lib/statuses'
import { Cell } from './Cell'
import { unicodeSplit } from '../../lib/words'
import { VALID_GUESSES } from '../../constants/validGuesses'
import { SUPP_WIDTH } from '../../constants/settings'

type Props = {
  solution: string
  guess: string
  isRevealing?: boolean
}

export const CompletedRow = ({ solution, guess, isRevealing }: Props) => {
  const statuses = getGuessStatuses(solution, guess)
  const splitGuess = unicodeSplit(guess)

  return (
    <div className="flex justify-center mb-1">
      {splitGuess.map((letter, i) => (
        <Cell
          key={i}
          value={letter}
          status={statuses[i]}
          position={i}
          isRevealing={isRevealing}
          isCompleted
        />
      ))}
    <span className="dark:text-white" style={{maxWidth: SUPP_WIDTH, width: SUPP_WIDTH}}>{VALID_GUESSES[guess]}</span>
    </div>
  )
}
