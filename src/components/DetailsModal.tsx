import styled from "styled-components";

const DetailsModal = ({ data }: any) => {
  console.log(data);
  return (
    <div>
      <H3>My company</H3>
      <Content>
        <div>
          <p style={{ width: "120px", fontWeight: "bold" }}>Email:</p>
          <p>{data?.email}</p>
        </div>
        <div>
          <p style={{ width: "120px", fontWeight: "bold" }}>Address:</p>
          <p>{data?.address}</p>
        </div>
        <div>
          <p style={{ width: "120px", fontWeight: "bold" }}>Date created:</p>
          <p>{data?.createdAt}</p>
        </div>
        <div>
          <p style={{ width: "120px", fontWeight: "bold" }}>No. of staff:</p>
          <p>{data?.number_of_staff}</p>
        </div>
        <div>
          <p style={{ width: "120px", fontWeight: "bold" }}>Country:</p>
          <p>{data?.country}</p>
        </div>
        <div>
          <p style={{ width: "120px", fontWeight: "bold" }}>Net worth</p>
          <p>{data?.worth_currency}</p>
        </div>
      </Content>
    </div>
  );
};

export default DetailsModal;

const H3 = styled.h3`
  padding: 15px 30px;
  margin: 0px;
  background: #fbfbfb;
  border-bottom: 1px solid #f0f0f0;
`;
const Content = styled.div`
  padding: 10px 30px;
  padding-bottom: 30px;
  div {
    display: flex;
  }
`;
