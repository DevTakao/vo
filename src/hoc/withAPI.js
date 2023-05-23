import { useEffect, useState } from "react";
import axios from "axios";

const withAPI = (Component, apiUrl) => {
  const WithAPI = (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(apiUrl);
          setData(response.data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, [apiUrl]);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return <Component data={data} {...props} />;
  };

  return WithAPI;
};

export default withAPI;
