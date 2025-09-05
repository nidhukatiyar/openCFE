import { useEffect, useState } from "react";
// import api from "./service/serviceHandler";
import { io } from "socket.io-client";
const socket = io("http://localhost:3001");

export function useApp() {
  const [state, setChat] = useState([]);
  useEffect(() => {
    socket.on("connect", () => {
        console.log("Connected:", socket.id);
      
        socket.emit("send_message", { text: "Hello from test client" });
      });
  }, []);

  return {
    state,
  };
}
