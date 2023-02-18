import React from 'react';
import { GlobalStyle } from "./style/GlobalStyle";
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from "recoil";
import ReactDOM from 'react-dom/client';
import App from './App';

const client = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <RecoilRoot>
      <QueryClientProvider client={client} >
        <GlobalStyle />
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  </>
);
