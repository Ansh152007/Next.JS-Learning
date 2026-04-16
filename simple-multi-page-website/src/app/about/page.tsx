import React from "react";

const page = () => {
  return (
    <div className="mt-10 flex justify-center items-center ">
      <div className="text-center bg-white px-10 py-8 rounded-2xl shadow-lg border-2 border-gray-100 max-w-1/2">
        <h1 className="text-3xl">About Us</h1>
        <h2 className="text-2xl text-gray-600 mt-1">
          Learn more about our Story.
        </h2>
        <div className="border-2 border-gray-200 rounded-lg shadow-md flex items-center justify-center flex-col mt-8">
          <h3 className="text-2xl mt-2">Our Story</h3>
          <p className="text-gray-600 my-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            quos hic veritatis! Quod, placeat enim obcaecati dolores ipsum
            dolorem nihil possimus. Dolorum aliquam error pariatur doloremque
            asperiores quo molestias, perferendis nostrum sint aspernatur
            excepturi molestiae quasi amet libero culpa assumenda ipsam totam
            eaque voluptatum? Perferendis quidem tenetur earum esse doloribus.
          </p>
        </div>
        <div className="flex items-center justify-center gap-8">
          <div className="border-2 border-gray-200 rounded-lg shadow-md flex items-center justify-center flex-col mt-8">
            <h3 className="text-2xl mt-2">Our Mission</h3>
            <p className="text-gray-600 my-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              quos hic veritatis! Quod, placeat enim obcaecati dolores ipsum
              dolorem nihil possimus.
            </p>
          </div>
          <div className="border-2 border-gray-200 rounded-lg shadow-md flex items-center justify-center flex-col mt-8">
            <h3 className="text-2xl mt-2">Our vision</h3>
            <p className="text-gray-600 my-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              quos hic veritatis! Quod, placeat enim obcaecati dolores ipsum
              dolorem nihil possimus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
