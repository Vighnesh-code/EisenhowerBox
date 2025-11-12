import TaskContainer from "./components/TaskContainer";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col ">
      <div className="flex justify-center py-6 mx-50 rounded-t-[14px] uppercase font-bold border-7 border-b-0 border-[#53908a] mt-4 ">
        <h1 className="lg:text-4xl text-[24px] text-[#53908a] md:text-3xl">
          Eisenhower Box
        </h1>
      </div>
      {/* Section Container */}
      <TaskContainer />
    </div>
  );
}

export default App;
