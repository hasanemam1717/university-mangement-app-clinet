import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Flex } from "antd";

import { toast } from "sonner";
import { TResponse } from "../../../types";
import UmForm from "../../../components/from/UmForm";
import UmSelect from "../../../components/from/UmSelect";
import UmDatePicker from "../../../components/from/UmDatePicker";
import UmInput from "../../../components/from/UmInput";
import { useGetAllSemestersQuery } from "../../../redux/fetures/admin/academicManagement.api";
import { semesterStatusOptions } from "../../../constant/semester";
import { useAddRegisteredSemesterMutation } from "../../../redux/fetures/admin/courseManagement.api";

const SemesterRegistration = () => {
  const [addSemester] = useAddRegisteredSemesterMutation();
  const { data: academicSemester } = useGetAllSemestersQuery([
    { name: "sort", value: "year" },
  ]);

  const academicSemesterOptions = academicSemester?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");

    const semesterData = {
      ...data,
      minCredit: Number(data.minCredit),
      maxCredit: Number(data.maxCredit),
    };

    console.log(semesterData);

    try {
      const res = (await addSemester(semesterData)) as TResponse<any>;
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
          <UmSelect
            label="Academic Semester"
            name="academicSemester"
            options={academicSemesterOptions}
          />

          <UmSelect
            name="status"
            label="Status"
            options={semesterStatusOptions}
          />
          <UmDatePicker name="startDate" label="Start Date" />
          <UmDatePicker name="endDate" label="End Date" />
          <UmInput type="text" name="minCredit" label="Min Credit" />
          <UmInput type="text" name="maxCredit" label="Max Credit" />

          <Button htmlType="submit">Submit</Button>
        </UmForm>
      </Col>
    </Flex>
  );
};

export default SemesterRegistration;
