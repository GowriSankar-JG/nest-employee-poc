import { Injectable } from '@nestjs/common';
import { Employee } from 'src/employee/employee.interface';

@Injectable()
export class EmployeeService {
  private employeeList: Employee[] = [];

  createOne(emp: Employee) {
    this.employeeList.push(emp);
  }

  findAll(): Employee[] {
    return this.employeeList.sort((a, b) => {
      if (a.id > b.id) return 1;
      else return -1;
    });
  }

  findOne(id: number): Employee {
    return this.employeeList.find((emp) => emp.id === id);
  }

  deleteOne(id: number) {
    this.employeeList = this.employeeList.filter((emp) => emp.id != id);
  }
}
