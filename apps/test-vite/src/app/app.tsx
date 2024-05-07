// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

console.log(import.meta.env);

export function App() {
  return (
    <div>
      <NxWelcome title={'test-vite'} />
    </div>
  );
}

export default App;
