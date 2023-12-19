import Feed from './Feed';
import { useContext } from 'react';
import DataContext from './context/DataContext';
const Home = () => {
  const { searchResults } = useContext(DataContext);

  // Kiểm tra xemposts đã được định nghĩa trước khi truy cập thuộc tính length
  const hasSearchResults =searchResults &&searchResults.length > 0;

  return (
    <main className="Home">
      {hasSearchResults ? (
        <Feed posts={searchResults} />
      ) : (
        <p style={{ marginTop: '2rem' }}>Không có bài đăng để hiển thị.</p>
      )}
    </main>
  );
};

export default Home;
