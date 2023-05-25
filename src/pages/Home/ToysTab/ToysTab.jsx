import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Toys.css";
import ToysCard from "./ToysCard";
const ToysTab = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("alltoys");
  useEffect(() => {
    fetch(`https://baby-toys-server.vercel.app/toys/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [activeTab]);

  const handleTabSelect = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className="container">
      <h3 className="mt-5 mb-3 text-center">Our Toys</h3>
      <Tabs>
        <TabList>
          <Tab onClick={() => handleTabSelect("alltoys")}>All Toys</Tab>
          <Tab onClick={() => handleTabSelect("truck")}>truck</Tab>
          <Tab onClick={() => handleTabSelect("sports car")}>sports Car</Tab>
          <Tab onClick={() => handleTabSelect("vehicles")}>vehicles</Tab>
        </TabList>

        {toys.length > 0 ? (
          <div>
            <TabPanel>
              <div
                className="row"
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                {toys.map((toys) => (
                  <ToysCard key={toys._id} toys={toys}></ToysCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div
                className="row"
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                {toys.map((toys) => (
                  <ToysCard key={toys._id} toys={toys}></ToysCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div
                className="row"
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                {toys.map((toys) => (
                  <ToysCard key={toys._id} toys={toys}></ToysCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="row">
                {toys.map((toys) => (
                  <ToysCard key={toys._id} toys={toys}></ToysCard>
                ))}
              </div>
            </TabPanel>
          </div>
        ) : (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </Tabs>
    </div>
  );
};

export default ToysTab;
