import styled from "styled-components";

export const SidebarContainer = styled.div`
  background-color: #43435e;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  .logo {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 20px;

    .logo-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: solid #fff;
      margin-right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 70%;
        height: 70%;
        fill: #fff;
      }
    }

    .logo-text {
      color: #fff;
      font-size: 1.2rem;
      line-height: 1.5rem;

      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
  .menu {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    width: 100%;

    .menu-item {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      height: 2.5rem;
      background: #fff;
      color: black;
      margin-bottom: 8px;
      padding: 0 20px;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      .menu-item-icon {
        width: 20px;
        height: 20px;
        margin-right: 8px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          width: 100%;
          height: 100%;
          fill: black;
        }
      }

      .menu-item-text {
        font-size: 1rem;
        line-height: 1.5rem;

        a {
          color: #fff;
          text-decoration: none;
        }
      }
      &:hover {
        background-image: linear-gradient(
          92.88deg,
          #455eb5 9.16%,
          #5643cc 43.89%,
          #673fd7 64.72%
        );
        color: #fff;
        border: 1px solid #fff;
        svg {
          fill: #fff;
        }
      }
    }

    .sub-menu {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      width: 80%;
    }
  }
`;
