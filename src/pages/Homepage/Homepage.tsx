import React, { useEffect, useState, useCallback } from "react";
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
import { PaginatedTable } from "../../components/Table";
import { getAllCompanies, logout, searchCompanies } from "../../actions/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CompanyState } from "../../reducers";
import { RootState } from "../../store";

const Homepage = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [currentPage, setPage] = useState(0);
  const [companyData, setCompanyData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [dat, setD] = useState([]);
  const [searching, setSearching] = useState(false);

  const { data, loading } = useSelector<RootState, CompanyState>(
    (state) => state.companies
  );
  const { data: searchResponse } = useSelector<RootState, CompanyState>(
    (state) => state.searchCompany
  );

  useEffect(() => {
    if (searching) {
      setD(searchResult);
    } else {
      setD(companyData);
    }
  }, [companyData, searchResult, searching]);

  useEffect(() => {
    dispatch(getAllCompanies(currentPage));
  }, [currentPage, dispatch]);

  useEffect(() => {
    setCompanyData(data?.companies);
  }, [data?.companies]);
  useEffect(() => {
    setSearchResult(searchResponse?.companies);
  }, [searchResponse?.companies]);

  const handleNextPage = () => {
    setPage(data?.page + 1);
  };
  const handlePrevPage = () => {
    setPage(data?.page - 1);
  };

  const navigateTo = () => navigate("/login");

  const handleLogout = () => {
    dispatch(logout(navigateTo));
  };

  const debounce = (func: any) => {
    let timer: any;
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, 800);
    };
  };

  const handleSearch = (e: any) => {
    const { value } = e.target;
    if (!value) {
      setSearching(false);
      return;
    }
    if (value) setSearching(true);
    dispatch(searchCompanies(currentPage, value));
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const optimizedCall = useCallback(debounce(handleSearch), []);

  return (
    <Container>
      <Header>
        <HeaderLeft>
          <Logo />
          <SearchBar onChange={optimizedCall} placeholder="Search for a user" />
        </HeaderLeft>
        <Button onClick={handleLogout}>Logout</Button>
      </Header>
      <Section>
        <PaginatedTable
          columns={COLUMNS}
          data={dat || []}
          pages={data?.pages}
          currentPage={data?.page}
          loading={loading}
          gotoNextPage={handleNextPage}
          gotoPrevPage={handlePrevPage}
        />
      </Section>
    </Container>
  );
};

export default Homepage;
