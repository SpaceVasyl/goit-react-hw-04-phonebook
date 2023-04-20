
export const Search = ({addFilterToState}) => {
    return (
        <div><p>Find contact by name</p>
        <input
      type="text"
      name="name"
      className='asd'
      onChange={addFilterToState}
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required/></div>
    )
}