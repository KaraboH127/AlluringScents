import { useEffect } from 'react';

// Applies a page-specific body class so legacy CSS selectors keep working.
export function useBodyPageClass(pageClassName) {
  useEffect(() => {
    document.body.classList.add(pageClassName);

    return () => {
      document.body.classList.remove(pageClassName);
    };
  }, [pageClassName]);
}
