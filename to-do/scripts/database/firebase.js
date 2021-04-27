// async function create(list) {
//   const response = await fetch(
//     'https://todo-app-947d8-default-rtdb.europe-west1.firebasedatabase.app/lists.json',
//     {
//       method: 'POST',
//       body: JSON.stringify(list),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     },
//   );
//   const response_1 = await response.json();
//   console.log(response_1);
// }

export async function authUser(authMethod, email, password) {
  const API_KEY = 'AIzaSyAPWXC4UnLLCNq0ib68CdCCwhWwUgq78MM';

  const responce = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:${authMethod}?key=${API_KEY}`,
    {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  const data = await responce.json();
  return data;
}
