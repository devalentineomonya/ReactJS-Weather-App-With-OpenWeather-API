const WeatherInfo = ({ label, value }) => {
    return (
      <div className="flex flex-row gap-x-1 mt-1">
        <p className="text-[#55626b] text-[14px] overflow-hidden text-nowrap  text-ellipsis">{label}</p>
        <p className="text-[#1e1e1e] font-Anta overflow-hidden text-nowrap  text-ellipsis ">{value}</p>
      </div>
    );
  };
  export default WeatherInfo;