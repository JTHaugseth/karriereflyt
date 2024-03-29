import {
  ReadMore,
  }from "../components/index";

const ServiceCardRight = ({
  icon = "✚", 
  iconColor = "text-gray-600", 
  squareColor = "bg-gray-300", 
  headingFourText = "Default Title", 
  headingFourColor = "text-gray-700", 
  headingOneText = "Main Title", 
  headingOneColor = "text-gray-600", 
  listItems = []
}) => {
  return (
      <div className="flex bg-gray-100 rounded-lg shadow-md overflow-hidden">
          <div className="flex-grow p-6">
              <div className="flex flex-col justify-between h-full">
                  <div>
                      <h4 className={`text-md ${headingFourColor} font-semibold`}>{headingFourText}</h4>
                      <h1 className={`text-3xl ${headingOneColor}`}>{headingOneText}</h1>
                      <ul className="list-none mt-4">
                          {listItems.map((item, index) => (
                              <li key={index} className="flex items-center">
                                  <span className={`text-green-500 mr-2`}>{item.icon}</span> {item.text}
                              </li>
                          ))}
                      </ul>
                  </div>
                  {/* Replaced button with ReadMore component */}
                  <ReadMore direction="down" />
              </div>
          </div>
          <div className={`flex-none w-64 ${squareColor} flex items-center justify-center`}>
              <span className={`text-4xl ${iconColor}`}>{icon}</span>
          </div>
      </div>
  );
};

export default ServiceCardRight;
  