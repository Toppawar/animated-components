import React from "react";
import MenuButton from "./MenuButton";

export default {
  title: "Components",
  component: MenuButton,
};

const Component = (args) => <MenuButton {...args} />;


export const MenuComponent = Component.bind({});

MenuComponent.args = {};
