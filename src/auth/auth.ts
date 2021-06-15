import { AuthChecker } from "type-graphql";

export const customAuthChecker: AuthChecker<any> = (
    { root, args, context, info },
    roles,
  ) => {

      console.log('role:',roles,'root:',root,'args:',args,'context:',context,'info:',info)
    // here you can read user from context
    // and check his permission in db against `roles` argument
    // that comes from `@Authorized`, eg. ["ADMIN", "MODERATOR"]
  
    return true; // or false if access denied
  };