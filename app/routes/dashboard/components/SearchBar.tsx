import { Search } from "lucide-react";

export const SearchBar = ({ searchQuery, setSearchQuery, setCurrentPage }) => (
  <div className="relative">
    <input
      type="text"
      placeholder="Search Projects"
      className="pl-10 py-2 border rounded-lg bg-transparent ring-0 outline-none text-sm font-medium"
      value={searchQuery}
      onChange={(e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
      }}
    />
    <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
  </div>
);
