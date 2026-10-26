export function InputSearch({ name, handleChange, query, isDisabled }) {
  const placeholderText = isDisabled ? 'Not available' : 'Search by dish'

  return (
    <input
      type='text'
      name={name}
      placeholder={placeholderText}
      autoComplete='off'
      onChange={handleChange}
      value={query}
      disabled={isDisabled}
    />
  )
}