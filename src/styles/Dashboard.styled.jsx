import styled from "styled-components";

export const DashSection = styled.section`
  background: #fff;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 96vw;
    height: 96vh;
    background-color: #43435e;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    border-radius: 10px;
    padding: 10px 5px;
  }

  .content {
    margin-left: 10px;
    padding: 8px;
    height: 94vh;
    width: calc(100% - 200px);
    background: #fff;
    border-radius: 10px;
  }

  .sidebar {
    padding: 8px;
    height: 100%;
    width: 200px;
    background-color: #43435e;
    color: #f0f1f0;
    overflow: hidden;
  }
`;
