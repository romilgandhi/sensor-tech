import React from "react";
import { renderHook } from '@testing-library/react-hooks';
import App from './App';

jest.mock('./models/beer-information', () => ({
    data: [{
      id: '1',
      name: 'Test',
      minimumTemperature: 4,
      maximumTemperature: 6,
    },
    {
      id: '2',
      name: 'Data',
      minimumTemperature: 5,
      maximumTemperature: 6,
    }]
  }));

  const useApiFetchMock = [{ id: '1', temprature: '5' }, { id: '2', temprature: '5' }];

  const mockFetch = (mockData) => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );
  };
  
  const mockFetchError = (error) => {
    global.fetch = jest.fn().mockImplementation(() => Promise.reject(error));
  };
  
  const mockFetchCleanUp = () => {
    global.fetch.mockClear();
    delete global.fetch;
  };

describe('<App />', () => {
    it('renders without errors', () => {
        render(<App />)
    });

    // it("loads the sensor on the mount", async () => {
    //     await act(async () => render(<App/>));
    //     expect(screen.getByText("Test").toBeInTheDocument);
    // })

    it('initial and success state', async () => {
        mockFetch(useApiFetchMock);
        const { result, waitForNextUpdate } = renderHook(() =>
          App
        );

        expect(result).toBeDefined();
        expect(result.current).toMatchObject({
          data: []
        });
    
        await waitForNextUpdate();
    
        expect(result.current).toMatchObject({
          data: useApiFetchMock
        });
        mockFetchCleanUp();
      });

      
});
