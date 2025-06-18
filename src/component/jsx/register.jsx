import styles from "../css/register.module.css";
import { Button } from "./Button";
import { Input } from "./link";

export const Register = ({ onClick }) => {
  return (
    <>
      <h2>Welcome to Register Page</h2>
      <div className={styles.inormation}>
        <Input placeholder="Enter your First Name " />
        <Input placeholder="Enter your last Name " />
        <Input placeholder="Enter your Username " />
        <Input type="password" placeholder="Enter your password" />
        <Input placeholder="Enter your mobile No." />
      </div>
      
      <Button text="Back to Login" onClick={() => onClick("login")} />
    </>
  );
};
