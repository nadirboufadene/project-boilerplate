import { HttpException, HttpStatus } from '@nestjs/common';

export const IdAlreadyInUseException = new HttpException(
  {
    statusCode: HttpStatus.CONFLICT,
    message: 'Supplied id is already in use.',
  },
  HttpStatus.CONFLICT,
);
