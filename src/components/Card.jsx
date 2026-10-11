import styles from './Card.module.css'
import { Link } from './Link.jsx'
import { SaveIcon } from './SaveIcon.jsx'
import { SavedIcon } from './SavedIcon.jsx'

export function Card({ recepie, isSaved, toogleRecepie }) {
  const { id, name, prep_time, servings, ingredients } = recepie
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
          <p className={`small_text ${styles.servings}`}>{servings} servings</p>
        </div>
        <hr />

        <p>Main ingredients:</p>
        <div className={styles.ingredients_container}>
          {
            ingredients
              .slice(0, 7)
              .map(({ id, name }) => <span className='small_text pill' key={id}>{name}</span>)
          }
        </div>
      </div>
    </div>
  )
}