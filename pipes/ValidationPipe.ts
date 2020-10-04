import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import * as validate from 'validate.js';

@Injectable()
export class ValidationPipe implements PipeTransform {
  constructor(private schema: any) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const errors = validate(value, this.schema);

    console.log('errors :>> ', errors);

    if (errors) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }

    return value;
  }
}
