import { LogEntity, LogSeverityLevel } from '../entities/log.entity';

//todos los LogDatasource deben cumplir con estas condiciones. 
export abstract class LogDatasource {
  abstract saveLog( log: LogEntity ): Promise<void>;
  abstract getLogs( severityLevel: LogSeverityLevel ): Promise<LogEntity[]>;
}


