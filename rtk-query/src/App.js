import { useGetTodosQuery } from "./features/userSlice";

function App() {
  const {
    data: users,
    isLoading,
    isSuccess,
  } = useGetTodosQuery()  

  return (
    <div className="App">
      {isLoading && <span>Loading...</span>}
      {isSuccess && users.map(user => (<h2 key={Math.random()}>{user.name}</h2>))}
    </div>
  );
}
export default App;