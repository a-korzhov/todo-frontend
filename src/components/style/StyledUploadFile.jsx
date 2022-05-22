import styled from "styled-components";

const StyledUploadFile = styled.div`
  height: 55px;
  width: 55px;
  border-radius: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid #FFFFFF;
  overflow: hidden;
  background-image: linear-gradient(to bottom, #fdd835 50%, #006E7F 50%);
  background-size: 100% 200%;
  transition: all 1s;
  color: #FFFFFF;
  font-size: 30px;

  input[type='file'] {
    height: 200px;
    width: 200px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
  }

  &:hover {
    background-position: 0 -100%;
    color: #fdd835;
  }
`;

export default StyledUploadFile;