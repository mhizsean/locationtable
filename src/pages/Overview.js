import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Button from "../components/Button/Button";
import Table from "../components/Table/Table";
import { table_head } from "../components/Table/TableHeader";
import Map from "./partials/Map";

const Overview = () => {
  const [tableData, setTableData] = useState([]);
  const [positions, setPositions] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("contactList")) || [];
    const store = data?.map((item) => ({
      lat: item?.lat,
      lng: item?.lng,
    }));
    setTableData(data);
    setPositions(store);
  }, []);
  return (
    <div className="overview-cont">
      <div className="title-cont">
        <h3>Dashboard</h3>

        <div>
          <Button
            text="Add contact"
            onClick={() => history.push("/add-contact")}
          />
        </div>
      </div>
      <Table type="list" data={tableData} header={table_head} />
      <Map store={positions} />
    </div>
  );
};

export default Overview;
