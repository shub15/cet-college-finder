import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CollegeList from './CollegeList';

const API_URL = import.meta.env.VITE_API_URL || '';
console.log('API_URL:', API_URL);

// The list of locations, branches, and college types for the filters
const LOCATIONS = [
  "Matunga", "Andheri", "Vile Parle", "Bandra", "Chembur", "Sion", "Vashi", "Wadala",
  "Kandivali", "Mumbai", "Nerul", "Borivali", "Mahim", "Vasai", "Navi Mumbai", "New Panvel",
  "Malad (West)", "Airoli", "Mira Road", "Byculla", "Thane", "Kharghar Navi Mumbai", "Kopar Khairane",
  "Kharghar", "Kamothe", "Vevoor", "Kopri", "Tal. Khalapur. Dist. Raigad", "Ratnagiri", "Khed",
  "Kaman Dist. Palghar", "Panvel", "Viva Institute of Technology", "Khalapur Dist Raigad", "Dombivali",
  "Shedung", "Yadavrao Tasgaonkar Institute of Engineering & Technology", "Karjat", "Shahapur, Asangaon",
  "Kankavli", "Ulhasnagar", "Sapgaon", "At. Villege Betegaon", "Wada", "Kanhor",
  "Shelu", "At. Mamdapur, Post- Neral, Tal- Karjat", "Tala"
]; // Your existing locations array
const BRANCHES = [
  "Civil Engineering", 
  "Computer Science And Engineering",
  "Computer Engineering", 
  "Information Technology", 
  "Cyber Security", 
  "Internet Of Things (Iot)", 
  "Mechanical And Mechatronics Engineering (Additive Manufacturing)", 
  "Computer Science And Engineering (Cyber Security)", 
  "Artificial Intelligence (AI) And Data Science", 
  "Electrical Engineering", 
  "Electronics And Telecommunication Engg", 
  "Electronics Engineering", 
  "Electronics Engineering (VLSI Design And Technology)", 
  "Bio Medical Engineering", 
  "Instrumentation Engineering", 
  "Chemical Engineering", 
  "Automobile Engineering", 
  "Mechanical Engineering", 
  "Mechatronics Engineering", 
  "Electronics And Computer Science", 
  "Computer Science And Engineering (Artificial Intelligence And Machine Learning)", 
  "Computer Science And Engineering (Data Science)", 
  "Automation And Robotics", 
  "Civil And Infrastructure Engineering", 
  "Computer Science And Engineering (Internet Of Things And Cyber Security Including Blockchain Technology)", 
  "Artificial Intelligence And Machine Learning", 
  "Electronics And Communication (Advanced Communication Technology)", 
  "Artificial Intelligence And Data Science"
];

const COLLEGE_TYPES = ["Autonomous", "Minority", "Non-Minority"];

function College() {
  const [colleges, setColleges] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [cutoffFilter, setCutoffFilter] = useState('');
  const [branchFilter, setBranchFilter] = useState('');
  const [collegeTypeFilter, setCollegeTypeFilter] = useState('');

  useEffect(() => {
    const cachedData = localStorage.getItem('collegesData');
    if (cachedData) {
      setColleges(JSON.parse(cachedData)); // Load from cache
    } else {
      axios.get(`${API_URL}/api/colleges`)
        .then(response => {
          setColleges(response.data);
          localStorage.setItem('collegesData', JSON.stringify(response.data));
        })
        .catch(error => console.error('Error fetching data: ', error));
    }
  }, []);

  // Filter colleges based on search, location, branch, cutoff, and college type
  const filteredColleges = colleges.filter(college => {
    const branchMatch = branchFilter === '' || college.branches.some(branch => branch.branchName === branchFilter);
    const collegeTypeMatch = collegeTypeFilter === '' || (collegeTypeFilter === 'Autonomous' && college.autonomy === 1) || 
                             (collegeTypeFilter === 'Minority' && college.minority) ||
                             (collegeTypeFilter === 'Non-Minority' && !college.minority && college.autonomy !== 1);

    return (
      college.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (locationFilter === '' || college.location.toLowerCase() === locationFilter.toLowerCase()) &&
      (cutoffFilter === '' || college.branches.some(branch => branch.cutoffCategories?.openPercentile <= parseFloat(cutoffFilter))) &&
      branchMatch &&
      collegeTypeMatch
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
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
          <select
            value={branchFilter}
            onChange={e => setBranchFilter(e.target.value)}
            className="border rounded w-full py-2 px-4"
          >
            <option value="">All Branches</option>
            {BRANCHES.map(branch => (
              <option key={branch} value={branch}>
                {branch}
              </option>
            ))}
          </select>
        </div>

        <div>
          <select
            value={collegeTypeFilter}
            onChange={e => setCollegeTypeFilter(e.target.value)}
            className="border rounded w-full py-2 px-4"
          >
            <option value="">All College Types</option>
            {COLLEGE_TYPES.map(type => (
              <option key={type} value={type}>
                {type}
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
