"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const HomeComponent = () => {
  const router = useRouter();

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200 flex items-center justify-center px-4">
      <section className="w-full max-w-5xl grid md:grid-cols-2 bg-white shadow-2xl rounded-3xl overflow-hidden">
        <div className="bg-gray-900 text-white p-10 flex flex-col justify-center">
          <div className="space-y-6">
            <span className="bg-blue-500/20 text-blue-300 px-4 py-1 rounded-full text-sm w-fit">
              Full Stack
            </span>

            <h1 className="text-5xl font-extrabold leading-tight">
              Organiza tu trabajo y tareas facilmente
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed">
              Gestiona tus tareas diarias con autenticación, filtrado de tareas,
              paginación y una interfaz responsiva y limpia construida con
              Next.js, TypeScript y NestJS.
            </p>

            <div className="flex gap-4 pt-4">
              <div className="bg-white/10 border border-white/10 rounded-xl px-5 py-4">
                <p className="text-2xl font-bold">JWT</p>
                <span className="text-sm text-gray-400">Auth</span>
              </div>

              <div className="bg-white/10 border border-white/10 rounded-xl px-5 py-4">
                <p className="text-2xl font-bold">CRUD</p>
                <span className="text-sm text-gray-400">Task Management</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-10 flex flex-col justify-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Bienvenido</h2>

              <p className="text-gray-500 mt-2">
                Accede a tu panel o crea una nueva cuenta para comenzar a
                gestionar tus tareas.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {!token ? (
                <>
                  <Link
                    href="/register"
                    className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-center font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Crear Cuenta
                  </Link>

                  <Link
                    href="/login"
                    className="bg-gray-900 hover:bg-black text-white py-3 rounded-xl text-center font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Login
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/tasks"
                    className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl text-center font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Dashboard
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="border border-red-300 text-red-500 hover:bg-red-50 py-3 rounded-xl font-medium transition-all duration-200"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>

            <div className="border-t pt-6"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeComponent;
