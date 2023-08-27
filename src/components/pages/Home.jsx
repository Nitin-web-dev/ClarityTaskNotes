import React from "react";
import Layout from "../layout/Layout";
import Card from "../ShareComponents/Card";
// import Data from "../../Data";
import {  useSelector } from "react-redux/es/hooks/useSelector";

const Home = () => {

  const Data = useSelector(state => {
    return state.users;
  })



  return (
    <div>
      <Layout>
        <section class="text-gray-400 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap m-4">
                    {/* cards section   */}
               
                {
                  Data.map((v,i) =>  <Card key={i} data={v} idx={i}/>)
                }
          
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Home;
