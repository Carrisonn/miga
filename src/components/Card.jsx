import styles from './Card.module.css'
import { Link } from './Link.jsx'
import { APP_ICONS } from '../config/constants.js'

export function Card({ recepie, isSaved, toogleRecepie }) {
  const { id, name, prep_time, servings, ingredients } = recepie
  const { SaveIcon, SavedIcon } = APP_ICONS
  const iconButton = isSaved ? <SavedIcon /> : <SaveIcon />

  return (
    <div className={styles.card}>
      <div className="wrapper">
        <div className={styles.save_recepie}>
          <Link href={`/recepie-detail/${id}`}>
            <p>{name}</p>
          </Link>
          <button type='button' onClick={() => toogleRecepie(recepie)}>
            {iconButton}
          </button>
        </div>
        <div className='gap_x'>
          <p className={`small_text ${styles.prep_time}`}>{prep_time} min</p>
          <p className='small_text'>{servings} servings</p>
        </div>
        <hr />

        <p>Main ingredients:</p>
        <div className={styles.ingredients_container}>
          {
            ingredients
              .slice(0, 7)
              .map(({ id, name }) => <span className='small_text pill bold' key={id}>{name}</span>)
          }
        </div>
      </div>
    </div>
  )
}