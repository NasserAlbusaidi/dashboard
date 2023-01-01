const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

//query from employees table

async function main() {

const allEmployees = await prisma.employee.findMany()


}

main()




//export default allEmployees

