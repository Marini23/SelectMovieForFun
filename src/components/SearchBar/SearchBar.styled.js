import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
`;

export const BtnSubmit = styled.button`
  display: inline-block;
  width: 120px;
  height: 48px;
  border: solid 1px black;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  background-color: #0000cd;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const BtnLabel = styled.span`
  display: flex;
  padding: 0;
  border: 0;
  color: #fff;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  height: 48px;
  font: inherit;
  font-size: 20px;
  border: solid 1px black;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
