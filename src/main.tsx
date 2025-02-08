// react imports
import { StrictMode }                  from 'react';
import { createRoot }                  from 'react-dom/client';

// external imports
import { Provider }                    from 'react-redux';

// internal imports
import App                             from './App.tsx';
import store                           from './store.ts';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>,
  </Provider>
)
