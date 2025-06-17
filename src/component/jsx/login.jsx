import styles from "../css/login.module.css";
import img from "../hepler/images.jpeg";
import { Button } from "./Button";
import { Input } from "./link";


export const Login = ({ onClick }) => {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.imgcontainer}>
        <img src={img} alt="mela img" />
      </div>
      <h1>Welcome To Our Website Login Page</h1>
      <div className={styles.infocontainer}>
        <Input placeholder="Enter your Name Here" />
        <Input type="password" placeholder="Enter your password" />
        <Input placeholder="Enter your Email id" />
        <Input placeholder="Enter your mobile No." />
      </div>
      <div className={styles.buttoncontainer}>
        <Button text="Login" />
        <Button text="Register" />
       
        
      </div>
    </div>
  );
};
