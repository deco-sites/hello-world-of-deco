import { type User } from '../loaders/getUser.ts'

export default function Greeting(
  { user }: { user: User },
) {
  return (
    <div class="flex justify-center items-center h-80">
      Hello {user.name}
    </div>
  );
}
