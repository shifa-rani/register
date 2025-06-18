import { Button } from "./Button";
import { Input } from "./link";

export const LoginSecond = ({ onClick }) => {
  return (
    <>
      <h1> welcome </h1>
      <Button text=" Back to Register" onClick={() => onClick("register")} />
      <Input placeholder="Enter your user password " />
      <Button text="Forgot password" onClick={() => onClick("login")} />

      <Input placeholder="Enter your user id " />
      <Button text=" Forgot id" onClick={() => onClick("login")} />
    </>
  );
};
