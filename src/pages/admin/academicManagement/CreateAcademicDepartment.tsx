import { Button, Col, Flex } from "antd";
import UmForm from "../../../components/from/UmForm";
import UmInput from "../../../components/from/UmInput";
import { toast } from "sonner";
import { TResponse } from "../../../types";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useAddAcademicDepartmentMutation } from "../../../redux/fetures/admin/academicManagement.api";

const CreateAcademicDepartment = () => {
  const [addAcademicDepartment] = useAddAcademicDepartmentMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    // dispatch()
    console.log(data);
    const toastId = toast.loading("Creating...");
    try {
      const res = (await addAcademicDepartment(data)) as TResponse<any>;
      console.log("Res data", res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Semester created", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };
  return (
    <div>
      <Flex justify="center" align="center">
        <Col span={6}>
          <UmForm onSubmit={onSubmit}>
            <UmInput name="name" type="text" label="Name of Faculty"></UmInput>
            <UmInput
              name="academicFaculty"
              type="text"
              label="Faculty id"
            ></UmInput>
            <Button htmlType="submit">Submit</Button>
          </UmForm>
        </Col>
      </Flex>
    </div>
  );
};

export default CreateAcademicDepartment;
