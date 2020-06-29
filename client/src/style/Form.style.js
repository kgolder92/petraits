import styled from 'styled-components';
import { Upload } from '@styled-icons/feather/Upload';

export const UploadIcon = styled(Upload)`
  width: 24px;
  color: rgb(0, 132, 137);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: #f5f0f0;
  align-items: center;
  margin-left: 16%;
  border-radius: 5px;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 31%;
  align-items: center;
  border-radius: 5px;
`;

export const FormWrapper = styled.div`
  width: 50%;
  padding: 20px;
  font-family: Ginto,helvetica,"sans-serif";
  font-size: 20px;
  color: #042228;
`;

export const InputFields = styled.input`
  width: 31vh;
  height: 0vh;
  border: none;
  display: flex;
  margin-bottom: 8%;
  border-radius: 5px;
  font-family: Ginto,helvetica,"sans-serif";
  color: #042228;
  font-size: 17px;
  padding: 25px;
`;

export const ImagePreview = styled.img`
  width: auto;
  height: auto;
  max-width: 30vh;
  max-height: 38vh;
`;

export const SearchButton = styled.button`
  border-radius: 5px;
  border: none;
  height: 5vh;
  width: 14vh;
  background-color: white;
`;

export const UploadButton = styled.button`
  margin-bottom: 27px;
  border-radius: 5px;
  border: none;
  height: 10vh;
  width: 37vh;
  font-family: Ginto,helvetica,"sans-serif";
  color: rgb(118,118,118);
  font-size: 17px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
