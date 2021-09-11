import { mount } from "enzyme";

import React, { FC, ReactElement } from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../redux/store";

const AllTheProvider: FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

const customRender = (ui: ReactElement, options?: any) =>
    mount(<AllTheProvider>{ui}</AllTheProvider>);

export * from "enzyme";
export {customRender as mount};

export const toJSON = (element: ReactElement) => {
  return renderer.create(element).toJSON();
};
