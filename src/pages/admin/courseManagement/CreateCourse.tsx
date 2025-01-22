import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Flex } from "antd";
import { toast } from "sonner";
import { TResponse } from "../../../types";
import UmForm from "../../../components/from/UmForm";
import UmInput from "../../../components/from/UmInput";
import UmSelect from "../../../components/from/UmSelect";
import {
  useAddCourseMutation,
  useGetAllCoursesQuery,
} from "../../../redux/fetures/admin/courseManagement.api";

const CreateCourse = () => {
  const [createCourse] = useAddCourseMutation();
  const { data: courses } = useGetAllCoursesQuery(undefined);

  const preRequisiteCoursesOptions = courses?.data?.map((item) => ({
    value: item._id,
    label: item.title,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");

    const courseData = {
      ...data,
      code: Number(data.code),
      credits: Number(data.credits),
      isDeleted: false,
      preRequisiteCourses: data.preRequisiteCourses
        ? data.preRequisiteCourses?.map((item) => ({
            course: item,
            isDeleted: false,
          }))
        : [],
    };

    console.log(courseData);

    try {
      const res = (await createCourse(courseData)) as TResponse<any>;
      console.log(res);
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
    <Flex justify="center" align="center">
      <Col span={6}>
        <UmForm onSubmit={onSubmit}>
          <UmInput type="text" name="title" label="Title" />
          <UmInput type="text" name="prefix" label="Prefix" />
          <UmInput type="text" name="code" label="Code" />
          <UmInput type="text" name="credits" label="Credits" />
          <UmSelect
            mode="multiple"
            options={preRequisiteCoursesOptions}
            name="preRequisiteCourses"
            label="preRequisiteCourses"
          />
          <Button htmlType="submit">Submit</Button>
        </UmForm>
      </Col>
    </Flex>
  );
};

export default CreateCourse;
