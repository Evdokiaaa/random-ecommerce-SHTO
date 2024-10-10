import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 text-center">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">
          404
        </h1>
        <h2 className="text-3xl font-bold text-white">Страница не найдена</h2>
        <p className="text-lg text-indigo-200">
          Извините, мы не можем найти страницу, которую вы ищете.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-md hover:bg-indigo-100 transition-colors duration-300"
          >
            Вернуться на главную
          </Link>
        </div>
      </div>
    </div>
  );
}
