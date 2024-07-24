import React, { useEffect, useState } from "react";
import BotsTable from "../home/mat/BotsTable";
import Header from "../../components/templates/Header";
import Menu from "../../components/templates/Menu";
import Footer from "../../components/templates/Footer";
import SimulationModal from "./SimulationModal";
import "./ConfigSimulation.css";
import { ChakraProvider, Input, Button, useDisclosure } from "@chakra-ui/react";
import useGetBotNames from "../../hooks/api/useGetBotNames";
import useSimulateBots from "../../hooks/api/useSimulateBots";

const ConfigSimulation = () => {
  const [bot1, setBot1] = useState("MineiroByBueno");
  const [bot2, setBot2] = useState("DummyBot");
  const [times, setTimes] = useState(1);
  const [botsList, setBotsList] = useState([]);
  const [botsToShowT1, setBotsToShowT1] = useState(botsList);
  const [botsToShowT2, setBotsToShowT2] = useState(botsList);
  const [results, setResults] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const fetchBotNames = useGetBotNames();
  const startSimulation = useSimulateBots();

  const updateBotsList = async () => {
    const response = await fetchBotNames();
    const data = await response.data.sort();
    setBotsList(data);
  };

  useEffect(() => {
    updateBotsList();
  }, []);

  const handleInputChangeT1 = (target) => {
    const content = target.value;
    const newBotsList = botsList.filter((botName) =>
      botName.toLowerCase().includes(content.toLowerCase())
    );
    setBotsToShowT1(newBotsList);
  };

  const handleInputChangeT2 = (target) => {
    const content = target.value;
    const newBotsList = botsList.filter((botName) =>
      botName.toLowerCase().includes(content.toLowerCase())
    );
    setBotsToShowT2(newBotsList);
  };

  useEffect(() => {
    setBotsToShowT1(botsList);
    setBotsToShowT2(botsList);
  }, [botsList]);

  const handleSimulationRequest = async () => {
    const results = await startSimulation(bot1, bot2, times);
    console.log(results);
  };

  return (
    <div className="app">
      <Header />
      <Menu />
      <main className="config-simulation">
        <ChakraProvider>
          <SimulationModal
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            results={results}
          />
          <form>
            <Input
              className="bot-filter in1"
              onChange={(e) => handleInputChangeT1(e.target)}
              placeholder="Buscar bot1"
            ></Input>

            <Input
              className="bot-filter in2"
              onChange={(e) => handleInputChangeT2(e.target)}
              placeholder="Buscar bot2"
            ></Input>

            <div className="others">
              <label htmlFor="number-of-simulations">
                Numbero de simulações
              </label>
              <Input
                id="number-of-simulations"
                type="number"
                onChange={(e) => {
                  if (e.target.value > 10000) {
                    e.target.value = 10000;
                  }
                  setTimes(e.target.value);
                }}
              ></Input>
              <Button
                onClick={
                  (onOpen,
                  (e) => {
                    handleSimulationRequest();
                  })
                }
              >
                {bot1 + " X " + bot2}
              </Button>
            </div>

            <div className="table1">
              <BotsTable
                selectedBot={bot1}
                setSelectedBot={setBot1}
                bots={botsToShowT1}
              />
            </div>
            <div className="table2">
              <BotsTable
                selectedBot={bot2}
                setSelectedBot={setBot2}
                bots={botsToShowT2}
              />
            </div>
          </form>
        </ChakraProvider>
      </main>
      <Footer />
    </div>
  );
};

export default ConfigSimulation;