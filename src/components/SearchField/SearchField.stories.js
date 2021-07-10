import React from "react";
import SearchField from "./SearchField";

export default {
  title: "Components",
  component: SearchField,
};

const Component = (args) => <SearchField {...args} />;

export const SearchComponent = Component.bind({});

SearchComponent.args = {};
