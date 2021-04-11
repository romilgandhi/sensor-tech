import { useEffect, useState } from 'react';
import { data } from './models/beer-information';

function App() {
  const [items, setItems] = useState({});

  const request = () =>
      data.forEach((product) => {
        fetch(`http://localhost:8081/temperature/${product.id}`)
          .then((response) => response.json())
          .then((response) =>
            setItems((prevItems) => ({
              ...prevItems,
              [product.id]: {
                ...product,
                ...response,
              },
            }))
          );
      });

  useEffect(() => {
    setInterval(request(), 5000);

    return clearInterval(request());
  })

  useEffect(() => {
    request();
  }, []);

  const renderTemp = (itemKey) => {
    if(items[itemKey].temperature < items[itemKey].minimumTemperature) {
          return <span>too low</span>
      } else if(items[itemKey].temperature > items[itemKey].maximumTemperature) {
          return <span>too high</span>
      } else if(items[itemKey].maximumTemperature 
        && items[itemKey].temperature >=items[itemKey].minimumTemperature) {
          return <span>all good</span>
        }

}

  return (
    <div className="App">
      <h2>Beers</h2>
      <table>
        <thead>
          <tr>
            <th align="left">Product</th>
            <th align="left">Temperature</th>
            <th align="left">Status</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(items).map((itemKey) => (
            <tr key={items[itemKey].id}>
              <td width={150}>{items[itemKey].name}</td>
              <td width={150}>{items[itemKey].temperature}</td>
              <td width={150}>
                {renderTemp(itemKey)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
