import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CollegeList from './CollegeList';

const API_URL = import.meta.env.VITE_API_URL || '';
console.log('API_URL:', API_URL);

// The list of locations for the filter (removing duplicates)
const LOCATIONS = [
  "Matunga", "Andheri", "Vile Parle", "Bandra", "Chembur", "Sion", "Vashi", "Wadala",
  "Kandivali", "Mumbai", "Nerul", "Borivali", "Mahim", "Vasai", "Navi Mumbai", "New Panvel",
  "Malad (West)", "Airoli", "Mira Road", "Byculla", "Thane", "Kharghar Navi Mumbai", "Kopar Khairane",
  "Kharghar", "Kamothe", "Vevoor", "Kopri", "Tal. Khalapur. Dist. Raigad", "Ratnagiri", "Khed",
  "Kaman Dist. Palghar", "Panvel", "Viva Institute of Technology", "Khalapur Dist Raigad", "Dombivali",
  "Shedung", "Yadavrao Tasgaonkar Institute of Engineering & Technology", "Karjat", "Shahapur, Asangaon",
  "Kankavli", "Ulhasnagar", "Sapgaon", "At. Villege Betegaon", "Wada", "Kanhor",
  "Shelu", "At. Mamdapur, Post- Neral, Tal- Karjat", "Tala"
];

function College() {
  const [colleges, setColleges] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [cutoffFilter, setCutoffFilter] = useState('');

  // Fetch college data from the backend
  useEffect(() => {
    axios.get(`${API_URL}/api/colleges`)
      .then(response => {
        setColleges(response.data);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  // Filter the colleges based on search and filter criteria
  const filteredColleges = colleges.filter(college => {
    return (
      college.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (locationFilter === '' || college.location.toLowerCase() === locationFilter.toLowerCase()) &&
      (cutoffFilter === '' || college.cutoff2023 <= parseFloat(cutoffFilter))
    );
  });

  return (
    <div className="container mx-auto mb-6 px-4 min-h-screen">
      <h1 className="text-4xl font-bold text-center my-6">College Finder</h1>

      {/* Search bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by college name..."
          className="border rounded w-full py-2 px-4"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <select
            value={locationFilter}
            onChange={e => setLocationFilter(e.target.value)}
            className="border rounded w-full py-2 px-4"
          >
            <option value="">All Locations</option>
            {LOCATIONS.map(location => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        <div>
          <input
            type="number"
            placeholder="Max Cutoff 2023"
            className="border rounded w-full py-2 px-4"
            value={cutoffFilter}
            onChange={e => setCutoffFilter(e.target.value)}
          />
        </div>
      </div>

      {/* College List */}
      <CollegeList colleges={filteredColleges} />
    </div>
  );
}

export default College;
