import styles from "./ui/login/login.module.css";
import LoginForm from "./ui/login/loginForm/loginForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      {/* <LoginForm/> */}
      <div className="mx-auto container text-center items-center mt-10 space-y-5">
        <Link href="/website/home">
          <button>
            Go to website
          </button>
        </Link><br/>
        <Link href="/dashboard">
          <button>
            Go to dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;