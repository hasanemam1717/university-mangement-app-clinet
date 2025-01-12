import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/fetures/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/fetures/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "admin123",
    },
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login, { isError }] = useLoginMutation();
  const onSubmit = async (data) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };
    const res = await login(userInfo).unwrap();
    console.log(res);
    const user = verifyToken(res.data.accessToken);
    dispatch(setUser({ user: user, token: res.data.accessToken }));
    navigate(`/${user.role}/dashboard`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="id">ID:</label>
          <input type="text" {...register("id")} id="id" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="text" {...register("password")} id="password" />
        </div>
        <Button htmlType="submit">LogIN</Button>
      </form>
    </div>
  );
};

export default LogIn;
