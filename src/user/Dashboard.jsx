import User_row from "./User-row";
import Score_row from "./Score_row";
import Target21 from "./Target21";
import AccordComponent from "./AccordComponent";
const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <div className=" flex justify-center container  mx-auto p-6 flex flex-row">
        <div className="w-1/3 h-60">
          <User_row />
        </div>
        <div className="w-25">
          <div className="flex flex-col gap-11">
            <Score_row />
            <Score_row />
          </div>
        </div>
      </div>

      <div className=" bg-blue-100 ">
        <div className=" flex justify-center containerw-4/5 ">
          <Target21></Target21>
        </div>
        <div>
          <div className="ml-40 mr-40">
            <AccordComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
