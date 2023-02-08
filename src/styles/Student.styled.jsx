import styled from "styled-components";

export const StudentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;

  .student-nav {
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: 10%;
    background-color: #f5f5f5;
    border-bottom: 1px solid #e0e0e0;

    .nav-item {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      svg {
        margin-right: 8px;
        font-size: 1.2rem;
      }

      span {
        font-size: 1.2rem;

        input {
          margin-right: 8px;
          height: 2rem;
          width: 100%;
          border: none;
          outline: 0;

          font-size: 0.9rem;
          font-weight: 500;
          color: #000;
          border-radius: 5px;
          line-height: 1.2rem;
          padding: 10px;

          &:focus {
            outline: 0;
          }
        }
      }
    }
  }
`;
