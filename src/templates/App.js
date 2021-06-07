import Title from "../atoms/Title/Title";
import List from "../organisms/List/List";
import { StyledWrapper } from "./App.styles";
import { users as UsersData } from "../data/users";
import { useReducer } from "react";
import AddForm from "../organisms/AddForm/AddForm";

const DELETE_ACTION = "delete";

function userReducer(state, action) {
  switch (action.type) {
    case DELETE_ACTION:
      const newUsers = state.filter((user) => user.id !== action.id);
      return newUsers;
    default:
      throw new Error();
  }
}

function App() {
  const [users, setUsers] = useReducer(userReducer, UsersData);
  return (
    <StyledWrapper>
      <Title text="Users List" />
      <List data={users} setUsers={setUsers} />
      <Title text="Add user" />
    </StyledWrapper>
  );
}

export default App;
