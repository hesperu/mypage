import React from 'react';


const AboutMe = () => {
  return (
    <div className="h-screen bg-gray-100">
      <div className=" w-screen bg-gray-100 flex items-center justify-center py-10">
        <div className="flex flex-col lg:flex-row bg-white shadow-md rounded-lg p-8 h-5/6 lg:h-1/2 w-3/4 ">
          <div className="lg:w-1/2 mt-4 lg:mt-0 px-6 flex justify-center items-center">
            <img
              src="./moon.png"
              alt="hesperu Avatar"
              className="rounded-full lg:rounded-lg object-contain w-1/2 lg:w-full h-full"
            />
          </div>
          <div className="lg:w-1/2 mt-4 lg:mt-0">
            <h1 className="text-6xl lg:text-2xl font-semibold mb-4 flex justify-center lg:justify-normal">hesperu</h1>
            <p className="profile_text">
              大学院で月惑星探査の課題を、情報科学で解決することに取り組んでいます。
            </p>
            <p className="profile_text">興味のあること: サーバーサイド領域の技術、月惑星探査、月惑星データを用いたエンタメ・コンテンツ開発</p>
            <p className="profile_text">保有資格: 応用情報技術者、G検定、実用数学検定2級</p>
            <p className="profile_text">
              経験のある技術: C/C++, C#, Unity, JavaScript, Node.js, React, TypeScript, Go, WebGL, deck.GL, Python, Django, Kivy, Pytorch, Docker, 
              Apache, AWS, PostgreSQL, MySQL
            </p>
            <p className="profile_text">座右の銘: vanitas vanitatum et omnia vanitas</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
