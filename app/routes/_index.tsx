import type { MetaFunction } from "@remix-run/node";
import { MoveDownRight } from "lucide-react";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [searchName, setSearchName] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchName);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-200 p-4">
      {/* Background image placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/bg-1.png?height=1080&width=1920')",
        }}
      />

      <div className="z-10 text-center">
        <div className="bg-white rounded-full py-1.5 shadow-sm px-6 inline-flex items-center mb-4">
          <img src="/whatsapp.png" alt="Whatsapp" className="h-4 w-4 mr-2" />
          <span className="text-gray-700 font-semibold text-sm">
            082285714607
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Dewi Laundry Binjai
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Pantau{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent">
            status
          </span>{" "}
          laundry anda hanya disini!
        </h2>

        <p className="text-gray-700 mb-8 font-medium">
          Jl. Sawi, Payaroba, Kec. Binjai Barat, Kota Binjai, Sumatera Utara
        </p>
        <p className="text-sm text-purple-700 flex gap-2 items-center justify-center font-medium mb-2">
          Lihat status laundry anda disini
          <MoveDownRight className="inline-block h-4 w-4 text-purple-500" />
        </p>
        <form
          onSubmit={handleSearch}
          className="flex flex-col md:flex-row justify-center mb-4"
        >
          <input
            type="text"
            placeholder="Nama anda..."
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="px-4 py-2 rounded-full md:rounded-l-full md:rounded-r-none border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-2 md:mb-0"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-400 to-purple-700 text-white px-6 py-2 rounded-full md:rounded-r-full md:rounded-l-none hover:brightness-110 transition duration-300"
          >
            Cari
          </button>
        </form>
      </div>
    </div>
  );
}
