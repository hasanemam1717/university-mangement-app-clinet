import { Button, Row } from "antd";
import UmForm from "../components/from/UmForm";
import UmInput from "../components/from/UmInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useChangePasswordMutation } from "../redux/fetures/admin/userManagement.api";
import { useAppDispatch } from "../redux/hooks";
import { logOut } from "../redux/fetures/auth/authSlice";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [changePassword] = useChangePasswordMutation();
  const disPatch = useAppDispatch();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const res = await changePassword(data);
    if (res?.data?.success) {
      disPatch(logOut());
      return navigate("/login");
    }
  };
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <UmForm onSubmit={onSubmit}>
        <UmInput type="password" name="oldPassword" label="Old Password" />
        <UmInput type="password" name="newPassword" label="New Password" />
        <Button htmlType="submit">Login</Button>
      </UmForm>
    </Row>
  );
};

export default ChangePassword;
