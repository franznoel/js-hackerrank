
function sortEmployeesByName(employees) {
  return employees.sort((a, b) => a.name.localeCompare(b.name))
}

function sortEmployeesByRank(employees) {
  return employees.sort((a, b) => a.rank - b.rank)
}


const employees = [
  {
    name: "Joe Smith",
    rank: 25
  },
  {
    name: "Jane Doe",
    rank: 2
  },
  {
    name: "Domingo Go",
    rank: 30
  },
  {
    name: "Superman Batman",
    rank: 14
  } 
]

console.log(sortEmployeesByName(employees))
console.log(sortEmployeesByRank(employees))