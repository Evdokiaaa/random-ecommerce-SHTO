import Auth from "./components/auth";
import CheckAuth from "./utils/checkAuth";

const user = {
  role: "admin",
  isAuthenticated: true, //думаю можно вот сделать и потом вытащить эт
};

export default function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>Header component</h1>
      <CheckAuth user={user} isAuthenticated={user.isAuthenticated}>
        <Auth />
      </CheckAuth>
    </div>
  );
}
