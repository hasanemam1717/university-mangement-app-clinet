import { useGetAllOfferedCoursesQuery } from "../../redux/fetures/student/studentCourseManagement.api";

const OfferedCourse = () => {
  const { data } = useGetAllOfferedCoursesQuery(undefined);
  console.log(data);
  return (
    <div>
      <h1>This is a OfferedCourse page from student</h1>
    </div>
  );
};

export default OfferedCourse;
