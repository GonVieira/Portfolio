import styled from "styled-components";

export const CertificateComponentWrapper = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 60%;
  overflow: hidden;
  border: 0.5px solid #689af8;
  margin: 1.4rem;
  border-radius: 4%;

  :hover {
    border: 0.5px solid transparent;
    transition: 0.5s ease;
  }
`;

export const CertificateImage = styled.img`
  opacity: 1;
  display: block;
  object-fit: cover;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  border-radius: 5%;
  cursor: pointer;

  ${CertificateComponentWrapper}:hover & {
    opacity: 0.4;
  }
`;


export const CertificateNameContainer = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  cursor: pointer;

  h2 {
    font-size: 2.5rem;
    color: white;
    font-weight: bolder;
  }

  ${CertificateComponentWrapper}:hover & {
    opacity: 1;
  }
`;
