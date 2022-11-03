import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersFetch } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  useEffect(() => {
    dispatch(getUsersFetch())
  }, [dispatch])
  return (
    <div className="App">
      {users.map(user => (<h2 key={Math.random()}>{user.name}</h2>))}
    </div>
  );
}
export default App;
