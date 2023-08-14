import clsx from 'clsx'
import ToggleIcon from './icons/ToggleIcon'

interface ToggleButtonProps {
  onToggle: () => void
  todosAmount: number
  isShow: boolean
}

const ToggleButton = ({ onToggle, todosAmount, isShow }: ToggleButtonProps) => {
  return (
    <button
      onClick={onToggle}
      type='button'
      className={clsx(
        isShow
          ? 'bg-teal-500 hover:bg-teal-600 focus:ring-teal-300'
          : 'bg-gray-400 hover:bg-gray-500 focus:ring-gray-100',
        'mt-2.5 flex items-center gap-2 rounded-lg px-4 py-2.5',
        'transition-all focus:outline-none focus:ring-4',
      )}
    >
      <span className='font-medium text-white'>
        Completed Tasks {todosAmount}
      </span>
      <ToggleIcon isShow={isShow} />
    </button>
  )
}

export default ToggleButton

