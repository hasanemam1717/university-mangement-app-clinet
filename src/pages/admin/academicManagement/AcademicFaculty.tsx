import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useGetAllFacultyQuery } from "../../../redux/fetures/admin/academicManagement.api";
import { TAcademicSemester } from "../../../types/academicManagement.type";

export type TTableData = Pick<
  TAcademicSemester,
  "name" | "year" | "startMonth" | "endMonth"
>;
const AcademicFaculty = () => {
  const {
    data: name,
    isLoading,
    isFetching,
  } = useGetAllFacultyQuery(undefined);
  console.log(name);

  const tableData = name?.data?.map(({ _id, name }) => ({
    key: _id,
    name,
  }));
  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },

    {
      title: "Action",
      key: "x",
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        );
      },
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);

    if (isLoading) {
      return <>Loading...</>;
    }
  };
  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
    ></Table>
  );
};

export default AcademicFaculty;
