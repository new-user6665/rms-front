import { CheckLoggedInDocument, CheckLoggedInQuery, CheckLoggedInQueryVariables } from '@/gql/graphql';
import { getUrqlClient } from '@/lib/urql';
import Image from 'next/image'
import { useEffect } from 'react';

export default async function User() {

  // check logged in query from urql

  const { client } = getUrqlClient();
  const result = await client.query<
    CheckLoggedInQuery,
    CheckLoggedInQueryVariables
  >(CheckLoggedInDocument, {} , {
    fetchOptions:{
      credentials: 'include'
    }
  });



  console.log(result);
  

  return (
   <main>
    User
   </main>
  )
}
