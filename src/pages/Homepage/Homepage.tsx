import React, { useEffect, useState } from "react";
import {
  Container,
  Header,
  Button,
  HeaderLeft,
  SearchBar,
  Section,
} from "./styled";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { COLUMNS } from "../../utils/mock";
import { DataProps, PaginatedTable } from "../../components/Table";
import { getAllCompanies, logout } from "../../actions/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CompanyState } from "../../reducers";
import { RootState } from "../../store";

const Homepage = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  // const [companyData, setCompanyData] = useState<DataProps[]>([]);
  const { data, loading } = useSelector<RootState, CompanyState>(
    (state) => state.companies
  );

  useEffect(() => {
    dispatch(getAllCompanies(0));
  }, [dispatch]);

  // useEffect(() => {
  //   setCompanyData(data?.companies);
  // }, [data?.companies]);

  // console.log(companyData.isArray());
  // console.log(companyData);

  const navigateTo = () => navigate("/login");
  const handleLogout = () => {
    dispatch(logout(navigateTo));
  };

  return (
    <Container>
      <Header>
        <HeaderLeft>
          <Logo />
          <SearchBar placeholder="Search for a user" />
        </HeaderLeft>
        <Button onClick={handleLogout}>Logout</Button>
      </Header>
      <Section>
        <PaginatedTable
          columns={COLUMNS}
          data={data?.companies || []}
          loading={loading}
          // getTrProps={onRowClick}>
        />
      </Section>
    </Container>
  );
};

export default Homepage;
