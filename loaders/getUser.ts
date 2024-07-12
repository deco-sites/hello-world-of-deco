export type User = {
  name: string
}

export default async function getUser(_, req: Request): Promise<User> {
  // fetch data from an API

  // req.headers.get('cookies')
  
  return {
    name: 'Deco.cx',
  }
}