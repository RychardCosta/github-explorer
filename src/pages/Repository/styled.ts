import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    align-items: center;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }
  }

  svg {
    margin-right: 4px;
  }
`;

export const RepositoryInfo = styled.section`
  header {
    display: flex;
    align-items: center;

    margin-top: 40px;
    img {
      width: 120;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;
      align-items: center;
      strong {
      }
      p {
        font-size: 16px;
        color: #6c6c80;
        margin-top: 4px;
      }
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      align-items: center;

      & + li {
        margin-left: 80px;
      }
      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }
      span {
        display: block;
        font-size: 16px;
        color: #6c6c80;
        margin-top: 4px;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;
  max-width: 715px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
  div {
    margin-left: 16px;
    flex: 1;

    strong {
      font-size: 20px;
      color: #3d3d4d;
    }
    p {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }
`;
