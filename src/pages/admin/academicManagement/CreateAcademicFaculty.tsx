import { Button, Col, Flex } from "antd";
import UmForm from "../../../components/from/UmForm";
import UmInput from "../../../components/from/UmInput";
import { useAppDispatch } from "../../../redux/hooks";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useAddAcademicFacultyMutation } from "../../../redux/fetures/admin/academicManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../types";

const CreateAcademicFaculty = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    // dispatch()
    console.log(data);
    const toastId = toast.loading("Creating...");
    try {
      const res = (await addAcademicFaculty(data)) as TResponse<any>;
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
            <Button htmlType="submit">Submit</Button>
          </UmForm>
        </Col>
      </Flex>
    </div>
  );
};

export default CreateAcademicFaculty;
