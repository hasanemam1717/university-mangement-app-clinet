import { useGetAllSemesterQuery } from "../../../redux/fetures/academicSemister/academinSemisterApi";

const AcademicSemester = () => {
  const { data } = useGetAllSemesterQuery(undefined);
  console.log(data);
  return (
    <div>
      <h1>This is a academic semester from admin academic Management</h1>
    </div>
  );
};

export default AcademicSemester;
