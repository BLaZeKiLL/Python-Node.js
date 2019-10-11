import { Options } from 'python-shell';
import { Logger } from '@nestjs/common';

const logger = new Logger('Python Shell', true);

export const config: Options = {
  mode: 'json',
  pythonPath: 'C:/ProgramData/Miniconda3/python.exe',
  scriptPath: './apps/backend/src/app/scripts/',
  pythonOptions: ['-u'],
  stderrParser: (log) => logger.verbose(log)
}
