import styled from "styled-components";

export const LoginSection = styled.section`
  background: #43435e;
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #43435e;
  }

  .wrapper {
    background-color: #43435e;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 80%;
    border-radius: 20px;
    padding: 50px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }

  .image-section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 20px;

    img {
      width: 400px;
      object-fit: cover;
      margin-top: 1rem;
      @media (max-width: 767px) {
        width: 200px;
      }
    }

    span {
      font-size: 1.5rem;
      color: #fff;
      font-weight: 600;
      font-family: "Noto Sans", "Montserrat", sans-serif;
      line-height: 1.5rem;
      letter-spacing: 0.2rem;
      text-transform: uppercase;
      margin-top: 1rem;
    }
  }
  .form p {
    margin-bottom: 10px;
  }
  .form-group {
    margin: 5px;
  }
  .form-section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 20px;
    border-radius: 20px;
    padding: 1rem;
    height: 80%;
    width: 100%;
    p {
      margin-bottom: 20px;
    }
  }

  .form-section form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 400px;
    border-radius: 20px;
    padding: 1rem;
    color: #fff;
  }

  .form-section form .form-title {
    font-size: 1.5rem;
    color: #fff;
    font-weight: 600;
    font-family: "Poppins", "Montserrat", sans-serif;
    line-height: 1.5rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .form-section form .form-group {
    display: flex;
    align-items: flex-start;
    position: relative;
    width: 100%;
  }

  .form-section form .form-group input {
    width: 100%;
    height: 2rem;
    border: none;
    border-radius: 5px;
    padding: 5px 45px;
    margin-bottom: 1rem;
    font-size: 1rem;

    &::placeholder {
      color: #424549;
      font-size: 1rem;
    }

    &:focus {
      outline: 0;
    }
  }

  .form-section form .form-group .icon {
    color: #424549;
    font-size: 1.3rem;
    position: absolute;
    left: 10px;
    top: 0.3rem;
  }

  .form-section form .form-group button {
    width: 100%;
    background-image: linear-gradient(
      92.88deg,
      #455eb5 9.16%,
      #5643cc 43.89%,
      #673fd7 64.72%
    );
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    flex-shrink: 0;
    font-family: "Inter UI", "SF Pro Display", -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    font-size: 18px;
    font-weight: 500;
    padding: 10px;
    text-align: center;
    text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
    transition: all 0.5s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    :hover {
      box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
      transition-duration: 0.1s;
    }
  }

  .error {
    color: red;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;
