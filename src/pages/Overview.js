import { useEffect, useState } from "react";
import Table from "../components/Table/Table";
import { table_head } from "../components/Table/TableHeader";

const Overview = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("contactList")) || [];

    setTableData(data);
  }, []);
  return (
    <div className="overview-cont">
      <div className="title-cont">
        <h3>Overview Page</h3>
      </div>
      <Table type="list" data={tableData} header={table_head} />
    </div>
  );
};

export default Overview;
