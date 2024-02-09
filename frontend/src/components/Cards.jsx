import React from 'react'

function Cards() {
    return (
        <div className="relative rounded-xl w-80 shadow-xl p-4 m-4">
            {/* Image */}
            <div className="h-3/4">
                <img src='https://www.houselogic.com/wp-content/uploads/2016/08/property-tax-appeal-retina_retina_9f661fd354bfde92b764d39542dfee75.jpg?crop&resize=2560%2C1706' alt="Audio Card" className="object-cover w-full h-full" />
            </div>


            {/* Text */}
            <div className="h-1/4 p-2">
                <h3 className="text-xl font-bold mb-2 text-center">Beach House</h3>
                <div className="flex justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Location
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        View Details
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Cards

