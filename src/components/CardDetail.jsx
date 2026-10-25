import styles from './Card.module.css'
import { APP_ICONS } from '../config/constants.js'
import { Link } from './Link.jsx'

export function CardDetail({ recepie, isSaved, toogleRecepie }) {
  const {
    name,
    description,
    difficulty,
    cuisine,
    protein,
    servings,
    prep_time,
    cook_time,
    ingredients,
    instructions
  } = recepie

  const {
    DifficultyIcon,
    CuisineIcon,
    ProteinIcon,
    ServingsIcon,
    PrepTimeIcon,
    CookTimeIcon,
    SaveIcon,
    SavedIcon
  } = APP_ICONS

  const formatter = word => word.slice(0, 1).toUpperCase() + word.slice(1)

  const iconButton = isSaved ? <SavedIcon /> : <SaveIcon />
  const textButton = isSaved ? 'Delete recepie' : 'Save recepie'
  const classButton = isSaved ? 'danger' : 'normal'

  return (
    <div className={styles.card}>
      <div className='wrapper'>
        <div className={styles.save_recepie}>
          <h1>{name}</h1>
          <button
            type='button'
            onClick={() => toogleRecepie(recepie)}
            className='button'
          >
            {iconButton}
          </button>
        </div>

        <p className={`${styles.description}`}>{description}</p>

        <div className={styles.recepie_keys}>
          <div className={`${styles.mini_card}`}>
            <DifficultyIcon />
            <p className='mini_text'>Difficulty
              <span className='bold small_text'>{formatter(difficulty)}</span>
            </p>
          </div>
          <div className={`${styles.mini_card}`}>
            <CuisineIcon />
            <p className='mini_text'>Cuisine
              <span className='bold small_text'>{formatter(cuisine)}</span>
            </p>
          </div>
          <div className={`${styles.mini_card}`}>
            <ProteinIcon />
            <p className='mini_text'>Protein
              <span className='bold small_text'>{protein}g</span>
            </p>
          </div>
          <div className={`${styles.mini_card}`}>
            <ServingsIcon />
            <p className='mini_text'>Servings
              <span className='bold small_text'>{servings} dish(es)</span>
            </p>
          </div>
          <div className={`${styles.mini_card}`}>
            <PrepTimeIcon />
            <p className='mini_text'>Prep. time
              <span className='bold small_text'>{prep_time}min</span>
            </p>
          </div>
          <div className={`${styles.mini_card}`}>
            <CookTimeIcon />
            <p className='mini_text'>Cook time
              <span className='bold small_text'>{cook_time}min</span>
            </p>
          </div>
        </div>

        <h2 className='gap_x'>Ingredients
          <span className='pill small_text bold'>{ingredients.length}</span>
        </h2>
        <ul>
          {
            ingredients.map(({ id, name, quantity, unit, optional }) => (
              <li key={id}>
                {name}: <span className='bold pill_green'>{quantity} {unit}</span> {optional ? <span className='mini_text cursive'>(optional)</span> : null}
              </li>

            ))
          }
        </ul>

        <h2 className='gap_x'>Steps
          <span className='pill small_text bold'>{instructions.length}</span>
        </h2>
        <ol>
          {
            instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))
          }
        </ol>

        <button
          type='button'
          onClick={() => toogleRecepie(recepie)}
          className={`button ${classButton}`}
        >
          {textButton}
        </button>
        <Link className='button normal' href='/'>
          Explore more recepies
        </Link>
      </div>
    </div>
  )
}