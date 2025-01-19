import { DatePicker, Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TDatePickerProps = {
  name: string;
  label?: string;
};

const UmDatePicker = ({ name, label }: TDatePickerProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <DatePicker
              {...field}
              id={name}
              size="large"
              style={{ width: "100%" }}
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default UmDatePicker;
