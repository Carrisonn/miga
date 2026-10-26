import styles from './FloatingButton.module.css'
import { useScroll } from '../hooks/useScroll'
import { APP_ICONS } from '../config/constants'

export function FloatingButton() {
  const { scrollTo } = useScroll()
  const { ArrowIcon } = APP_ICONS

  function handleClick() {
    scrollTo({ position: 0 })
  }

  return (
    <button
      onClick={handleClick}
      className={styles.floating_btn}
    >
      {<ArrowIcon />}
    </button>
  )
}