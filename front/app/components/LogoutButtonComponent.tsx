"use client";

import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
