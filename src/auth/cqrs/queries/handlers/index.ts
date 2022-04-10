import { GetAccessTokenQueryHandler } from './get-access-token-query.handler';
import { GetUserProfileQueryHandler } from './get-user-profile-query.handler';
import { ValidateUserRequestQueryHandler } from './validate-user-request-query.handler';

export const AuthQueryHandlers = [
  ValidateUserRequestQueryHandler,
  GetAccessTokenQueryHandler,
  GetUserProfileQueryHandler,
];
