import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeController } from './controllers/employee.controller';
import { EmployeeModule } from './modules/employee.module';
import { EmployeeService } from './services/employee.service';

@Module({
  imports: [EmployeeModule],
  controllers: [AppController, EmployeeController],
  providers: [AppService, EmployeeService],
})
export class AppModule {}
