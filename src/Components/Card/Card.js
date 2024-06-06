import React, { useState } from "react";
import "./Card.css";
import Data from "../../api/api.json";
import logo from "../../Images/demo_cardbg.jpg";

const pageSize = 8; // Number of cards per page

const Card = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderCards = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedData = Data.slice(startIndex, endIndex);

    return paginatedData.map((data, index) => (
      
      <div key={index} className="">
          {/* <div className="flex gap-5 max-md:flex-col max-md:gap-0"> */}
            <div className="flex w-60 h-80">
              <div className="flex flex-col grow p-2.5 mx-auto w-full bg-white rounded-xl shadow-lg ">
                <div className="flex  justify-center rounded-xl">
                  <img
                    loading="lazy"
                    src={logo}
                    alt="Card"
                    className="w-full aspect-[1.79]"
                  />
                </div>
                <div className="justify-center p-1 text-base font-medium capitalize text-ellipsis text-stone-700">
                  {data.title}
                </div>
                <div className="px-1 text-xs tracking-wide text-ellipsis text-stone-700 text-opacity-80 overflow-clip mb-1">
                  {data.desc}
                </div>
                <div className="flex gap-5 px-3 py-2 mt-1 rounded-xl bg-neutral-100">
                  <div className="flex flex-col tracking-wide">
                    <div className="text-xs leading-5 text-stone-700 text-opacity-80">
                      {data.date}
                    </div>
                    <div className="justify-center px-3 py-1 mt-2 text-xs leading-5 capitalize rounded-xl bg-zinc-300 bg-opacity-60 text-stone-700">
                      {data.domain}
                    </div>
                  </div>
                  <div className="flex flex-col self-start text-xs font-light text-center text-black whitespace-nowrap">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/02e4fc9e495fd92f1d2c429f70b95139e5152de1578737c2cedb40ab347a52ef?apiKey=8d04b9944a634e01987170e71ff9880d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/02e4fc9e495fd92f1d2c429f70b95139e5152de1578737c2cedb40ab347a52ef?apiKey=8d04b9944a634e01987170e71ff9880d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/02e4fc9e495fd92f1d2c429f70b95139e5152de1578737c2cedb40ab347a52ef?apiKey=8d04b9944a634e01987170e71ff9880d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/02e4fc9e495fd92f1d2c429f70b95139e5152de1578737c2cedb40ab347a52ef?apiKey=8d04b9944a634e01987170e71ff9880d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/02e4fc9e495fd92f1d2c429f70b95139e5152de1578737c2cedb40ab347a52ef?apiKey=8d04b9944a634e01987170e71ff9880d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/02e4fc9e495fd92f1d2c429f70b95139e5152de1578737c2cedb40ab347a52ef?apiKey=8d04b9944a634e01987170e71ff9880d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/02e4fc9e495fd92f1d2c429f70b95139e5152de1578737c2cedb40ab347a52ef?apiKey=8d04b9944a634e01987170e71ff9880d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/02e4fc9e495fd92f1d2c429f70b95139e5152de1578737c2cedb40ab347a52ef?apiKey=8d04b9944a634e01987170e71ff9880d&"
                      className="self-center w-5 aspect-[1.05]"
                      alt="card_image"
                    />
                    <div className="mt-1">100</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

    ));
  };

  const totalPages = Math.ceil(Data.length / pageSize);

  return (

    <div>
      <div className="flex flex-wrap gap-10 px-10 py-2" >
        {renderCards()}
      </div>
      <div className="flex justify-center mt-5"> {/* Adjusted margin-top */}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`mx-1 px-2 py-1 border rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"}`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>

  );
};

export default Card;
