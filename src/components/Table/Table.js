import React from "react";

const Table = ({ header, data, type, loading }) => {
  return (
    <div className="table-cont">
      <table className="table">
        <thead>
          <tr>
            <th>S/N</th>
            {header?.map((item, i) => (
              <th key={i}>{item?.title}</th>
            ))}
          </tr>
        </thead>

        {Boolean(data?.length) && (
          <tbody>
            {data?.map((data, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                {header?.map((item, i) =>
                  item?.component ? (
                    <td key={i}>
                      {item?.component({ item: data[item?.key], data })}
                    </td>
                  ) : (
                    <td key={i}>{data[item?.key]}</td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        )}
      </table>

      {!Boolean(data?.length) && (
        <div className="empty-cont">
          <img src="" alt="" />
          {loading ? (
            <div className="data-loading">Loading data</div>
          ) : (
            <div className="available">
              {type === "list" ? "Not avalable" : ""}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Table;
