import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate, ValidatorOptions } from 'class-validator';

type ParseEntityOptions = {
  validatorOptions: ValidatorOptions;
};

@Injectable()
export class ParseEntityPipe implements PipeTransform {
  constructor(
    private readonly parseEntityOptions: ParseEntityOptions = {
      validatorOptions: {
        whitelist: true,
      },
    },
  ) {}

  public async transform(value: any, metadata: ArgumentMetadata) {
    const { metatype } = metadata;

    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    const entity = plainToClass(metatype, value);
    const errors = await validate(
      entity,
      this.parseEntityOptions.validatorOptions,
    );

    if (errors.length) {
      throw new BadRequestException(errors);
    }

    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
