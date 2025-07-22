/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";
import Select, { Option, SelectProps } from "./Select";

const resources: Option[] = [
  { show: "Projector", value: "Projector" },
  { show: "Room B", value: "Room B" },
  { show: "Room A", value: "Room A" },
  { show: "Camera 1", value: "Camera 1" },
  { show: "Lab 2", value: "Lab 2" },
];

interface ResourceDropdownProps {
  value: string;
  id: string;
  placeholder?: string | undefined | null;
  onChange: (value: string) => void;
}

const ResourceDropdown = ({
  value,
  id,
  placeholder,
  onChange,
}: ResourceDropdownProps) => {
  return (
    <Select
      options={resources}
      value={value || ""}
      id={id}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default ResourceDropdown;
