import { toast } from "sonner";
import { semesterOptions } from "../../../constant/semester";
import { Button, Col, Flex } from "antd";
import UmForm from "../../../components/from/UmForm";
import UmSelect from "../../../components/from/UmSelect";
import { monthOptions } from "../../../constant/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schemas/academicManagement.schema";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useAddAcademicSemesterMutation } from "../../../redux/fetures/admin/academicManagement.api";
import { TResponse } from "../../../types/global";

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const toastId = toast.loading("Creating...");

    const name = semesterOptions[Number(data?.name) - 1]?.label;

    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };

    console.log(semesterData);
    try {
      const res = (await addAcademicSemester(semesterData)) as TResponse<any>;
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
        <UmForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <UmSelect label="Name" name="name" options={semesterOptions} />
          <UmSelect label="Year" name="year" options={yearOptions} />
          <UmSelect
            label="Start Month"
            name="startMonth"
            options={monthOptions}
          />
          <UmSelect label="End Month" name="endMonth" options={monthOptions} />

          <Button htmlType="submit">Submit</Button>
        </UmForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
