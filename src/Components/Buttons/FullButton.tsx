import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const FullButton: FC<
  PropsWithChildren<{
    title: string;
    action?: any;
    border?: any;
  }>
> = ({ title, action, border }) => {
  return (
    <Wrapper
      className="animate pointer radius16"
      onClick={action}
      border={border}
    >
      {title}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  border: 1px solid
    ${(props: { border: boolean }) => (props.border ? "#707070" : "#448aff")};
  background-color: ${(props: { border: boolean }) =>
    props.border ? "transparent" : "#448aff"};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props: { border: boolean }) => (props.border ? "#707070" : "#fff")};
  :hover {
    background-color: ${(props: { border: boolean }) =>
      props.border ? "transparent" : "#005ecb"};
    border: 1px solid #448aff;
    color: ${(props: { border: boolean }) =>
      props.border ? "#448aff" : "#fff"};
    box-shadow: rgba(100, 100, 111, 0.6) 0px 7px 29px 0px;
  }
  font-size: 20px;
  font-weight: 700;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;`;

export default FullButton;
