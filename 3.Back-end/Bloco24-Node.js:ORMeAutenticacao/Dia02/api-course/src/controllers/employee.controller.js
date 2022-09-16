const employeeService = require('../services/employee.service');
const addressService = require('../services/address.service');

const getAll = async (_req, res) => {
  try {
    const employees = await employeeService.getAll();
    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await employeeService.getById(id);

    if (!employee)
      return res
        .status(404)
        .json({ message: 'Pessoa colaboradora não encontrada' });

    if (req.query.includeAddresses === 'true') {
      const addresses = await addressService.getAllByEmployeeId(id);
      return res.status(200).json({ employee, addresses });
    }

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  getAll,
  getById,
};
