import { SignOutButton } from "@/components/signout-button";
import { SignUpForm } from "@/components/signup-form";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { SignInForm } from "@/components/signin-form";
import { revalidatePath } from "next/cache";
import { Textarea } from "@/components/ui/textarea";
export default async function Home() {
  const headersList = await headers();
  const session = await auth.api.getSession({
    headers: headersList,
  });

  const signoutAction = async () => {
    "use server";
    const headersList = await headers();
    await auth.api
      .signOut({
        headers: headersList,
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const signupAction = async (email: string, password: string) => {
    "use server";
    const headersList = await headers();
    await auth.api.signUpEmail({
      headers: headersList,
      body: {
        email: email,
        name: email,
        password,
      },
    });
    revalidatePath("/");
  };

  const signinAction = async (email: string, password: string) => {
    "use server";
    const headersList = await headers();
    await auth.api.signInEmail({
      headers: headersList,
      body: {
        email: email,
        password: password,
      },
    });
    revalidatePath("/");
  };

  return (
    <div className="w-screen h-screen grid grid-cols-3">
      <div className="flex flex-col items-center justify-center gap-4 p-4 h-full">
        <h1>Signin</h1>
        <SignInForm signInAction={signinAction} />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 p-4 h-full">
        <h1>Server Side Session</h1>
        <Textarea
          className="w-full resize-y font-mono text-xs"
          defaultValue={JSON.stringify(session, null, 2)}
        />
        <SignOutButton signOutAction={signoutAction} />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 p-4 h-full">
        <h1>Signup</h1>
        <SignUpForm signUpAction={signupAction} />
      </div>
    </div>
  );
}
