import PropTypes from "prop-types";
export const Contacts = ({contactFilter, deleteContact}) => {
return (
<>
<ul className="contacts">{contactFilter.map(contact => {
const {name , number, id} = contact;
return (
    <li key={id}><p>{name}: {number}</p><button onClick={()=>deleteContact(id)}>delete</button></li>
)
})}
</ul></>
    )
}
Contacts.propTypes = {
    contactFilter: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
      })
    ).isRequired,
    deleteContact: PropTypes.func.isRequired
  };