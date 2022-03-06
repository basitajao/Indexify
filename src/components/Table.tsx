import React, { useState } from "react";
import { useTable, usePagination } from "react-table";
import styled from "styled-components";
import NextPage from "../assets/next.svg";
import NextDisabled from "../assets/next-disabled.svg";
import PreviousPage from "../assets/previous.svg";
import PreviousDisabled from "../assets/previous-disabled.svg";
import { Modal } from "./ModalWrapper";
import { useModal } from "../hooks/useModal";
import DetailsModal from "./DetailsModal";

export interface DataProps {
  _id: number;
  company_name: string;
  email: string;
  address: string;
  createdAt: string;
  country: string;
  number_of_staff: number;
  net_worth: string;
  worth_currency: string;
}

interface Props {
  columns: any;
  // data: DataProps[];
  data: any;
  loading?: boolean;
}

export const PaginatedTable = ({ columns, data, loading }: Props) => {
  const [modalDetails, setDetails] = useState({});
  const {
    onRowClick = () => {},
    // gotoPrevPage = () => {},
    // gotoNextPage = () => {},
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    state,
    pageCount,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    usePagination
  );

  // console.log(data);
  const { isModalVisible, openModal, closeModal } = useModal();
  const { pageIndex } = state;
  return (
    <div>
      {isModalVisible && (
        <Modal show={isModalVisible} onClose={closeModal}>
          <DetailsModal data={modalDetails} />
        </Modal>
      )}
      <Table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                onClick={() => {
                  onRowClick(row.original);
                  openModal();
                  setDetails(row?.original);
                }}
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Pagination>
        <button onClick={() => previousPage()} style={{ marginRight: "10px" }}>
          {pageIndex + 1 === pageCount ? (
            <img src={PreviousPage} alt="" />
          ) : (
            <img src={PreviousDisabled} alt="" />
          )}
        </button>
        <span style={{ marginRight: "8px" }}>{pageIndex + 1} </span>
        <span style={{ color: "#9A9A9A" }}> of {pageCount}</span>
        <button style={{ marginLeft: "10px" }} onClick={() => nextPage()}>
          {pageIndex + 1 === pageCount ? (
            <img src={NextDisabled} alt="" />
          ) : (
            <img src={NextPage} alt="" />
          )}
        </button>
      </Pagination>
    </div>
  );
};

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 5px 5px 0px 0px;

  th {
    text-align: left;
    padding: 20px 20px;
    font-weight: 500;
    font-size: 16px;
    line-height: 13px;
    color: #000;

    :first-child {
      padding-left: 40px;
    }
  }
  td {
    font-size: 14px;
    padding: 20px 20px;
    line-height: 12px;
    color: #666666;

    :first-child {
      padding-left: 40px;
    }
  }
  tr {
    padding: 10px;
    cursor: pointer;
    border-top: 1px solid #f1f1f1;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 0 0 0;
  align-items: center;

  button {
    border: 0px;
    background: none;
    cursor: pointer;
  }
`;
