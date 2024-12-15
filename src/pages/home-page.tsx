import { formatMessage } from '@/lib/translations';

const HomePage = () => {
  return <div> {formatMessage('core', 'HomePage.welcome')} </div>;
};

export default HomePage;
