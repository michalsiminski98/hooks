import PropTypes from "prop-types";

const List = ({ data, setUsers }) => {
  const usersList = data.map(({ id, name }) => (
    <li key={id}>
      {name}
      <button onClick={() => setUsers({ type: "delete", id: id })}>
        delete
      </button>
    </li>
  ));

  return <ul>{usersList}</ul>;
};

List.propTypes = {
  data: PropTypes.array,
  setUsers: PropTypes.func,
};

export default List;
