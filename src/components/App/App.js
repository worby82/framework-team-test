import { withNaming } from '@bem-react/classname';
import Container from '../Container/Container';
import './styles.css';

const cn = withNaming({ n: '', e: '__', m: '--' });
const app = cn('app')
function App() {
  return (
    <div className={app()}>
      <Container />
    </div>
  );
}

export default App;
