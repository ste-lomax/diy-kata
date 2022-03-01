const employees = [{

        name: 'Satti',
      
        role: 'Developer'
      
      }, {
      
        name: 'Jenny',
      
        role: 'Sales Associate'
      
      }, {
      
        name: 'Javid',
      
        role: 'Human Recommended Reading Assistant'
      
      }]

const getEmployerRole = (employeeName, employees) => {
    const nameRole = employees.filter(obj => obj.name === employeeName);
    return nameRole[0].role
};

module.exports = getEmployerRole;
