import axios from 'axios';
import { useEffect, useState } from 'react';
import { server } from '../constance';

const useClients = () => {
  const [clients, setClients] = useState();

  useEffect(() => {
    axios.get(`${server}/v1/clients`).then((res) => {
      setClients(res.data.data.clients);
    });
  }, []);

  return clients;
};

export default useClients;
