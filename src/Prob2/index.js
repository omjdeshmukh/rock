import React, { useState } from "react";
import FileCard from "../components/FileCard";
import { mockConn1, mockConn2 } from "./mock";
import "./index.css";

const UserForm = ({ onClickBack }) => {
  const [fileData, setFileData] = useState("");

  const onClickCard = (e) => {
    setFileData(e);
  };

  return (
    <>
      <div className="p-4">
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => onClickBack()}
        >
          Back
        </button>
      </div>
      <div className="container d-flex">
        <div className=" pe-3 col-lg-8 col-md-6">
          <h6>ADMIN PANNEL / List of Data</h6>
          <div className="col-4 py-2">
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <h6>Connection 1</h6>
          <div className="d-flex connCard py-2">
            {mockConn1().map((x) => {
              return (
                <FileCard
                  key={x.id}
                  cardName={x.cardName}
                  files={x.files}
                  size={x.size}
                  rows={x.rows}
                  conn={x.conn}
                  onClick={onClickCard}
                />
              );
            })}
          </div>
          <h6>Connection 2</h6>
          <div className="d-flex connCard mb-4 py-2">
            {mockConn2().map((x) => {
              return (
                <FileCard
                  key={x.id}
                  cardName={x.cardName}
                  files={x.files}
                  size={x.size}
                  rows={x.rows}
                  conn={x.conn}
                  onClick={onClickCard}
                />
              );
            })}
          </div>
        </div>
        <div className="sideBar col-lg-4 col-md-6 ">
          <div className="p-3">
            <button type="button" className="btn btn-primary">
              Upload Data
            </button>
          </div>
          <hr />
          {fileData && (
            <>
              <div className="d-flex p-3 ">
                <div className="col-6 pe-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg"
                    alt="file"
                  />
                </div>
                <div>
                  <h6>
                    <b>{fileData?.cardName}</b>
                  </h6>
                  <h6>{`Connection ${fileData?.conn}`}</h6>
                  <h6>{`Size: ${fileData?.size}`}</h6>
                  <h6>{`No. of File: ${fileData?.files?.length}`}</h6>
                  <h6>{`Rows: ${fileData?.rows} L`}</h6>
                </div>
              </div>
              <div className="p-3">
                <h6>
                  <b>Data Files</b>
                </h6>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>File Name</th>
                      <th>Sent Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fileData?.files?.map((x, i) => {
                      return (
                        <tr key={i}>
                          <td>{x.fileName}</td>
                          <td>{x.date}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default UserForm;
