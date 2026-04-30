import Footer from './Footer';
import Navbar from './Navbar';
import WhatsAppFab from './WhatsAppFab';
import styles from '../../styles/appShell.module.css';

// Shared app chrome used by all pages.
function PageLayout({ children }) {
  return (
    <div className={styles.appShell}>
      <Navbar />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default PageLayout;
