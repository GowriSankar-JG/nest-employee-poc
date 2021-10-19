import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { of } from 'rxjs';
import { EmployeeDto } from 'src/employee-dto';
import { EmployeeService } from 'src/services/employee.service';


@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Get()
  findAll() {
    return of(this.employeeService.findAll());
  }

  @Get(':id')
  findOne(@Param('id', new ParseIntPipe()) id: number) {
    return of(this.employeeService.findOne(id));
  }

  @Post()
  async create(@Body() employee: EmployeeDto) {
    this.employeeService.createOne(employee);
  }

  @Delete(':id')
  deleteOne(@Param('id', new ParseIntPipe()) id: number) {
    this.employeeService.deleteOne(id);
  }
}
