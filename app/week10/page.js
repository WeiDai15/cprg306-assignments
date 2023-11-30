import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignInWithGitHub = async () => {
    await gitHubSignIn();
  };

  const handleSignOut = async () => {
    await firebaseSignOut();
  };

  return (
    <div>
      {user ? (
        // User is logged in
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleSignOut}>Logout</button>
          <Link href="/week8/shopping-list">
            <a>Go to Shopping List</a>
          </Link>
        </div>
      ) : (
        // User is not logged in
        <div>
          <p>Welcome to our shopping list app!</p>
          <button onClick={handleSignInWithGitHub}>Login with GitHub</button>
        </div>
      )}
    </div>
  );
};

export default LandingPage;