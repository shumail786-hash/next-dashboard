import Card from "../ui/dashboard/card/card.jsx";
import Transactions from "../ui/dashboard/transaction/transactions.jsx";
import Chart from "../ui/dashboard/chart/chart.jsx";
import Rightbar from "../ui/dashboard/rightbar/rightbar.jsx";
const Dashboard = () => {
  return (
    <div className="flex mt-5 gap-4">
      <div className="flex flex-3 flex-col gap-4">
        <div className="flex gap-4 justify-between">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="flex-1">
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
