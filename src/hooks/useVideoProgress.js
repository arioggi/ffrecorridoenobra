import { useState, useCallback } from 'react';
import { CONFIG } from '../config/constants';
import { trackEvent, trackCustom } from '../lib/tracking';

export const useVideoProgress = () => {
  const [isUnlocked, setIsUnlocked] = useState(
    () => localStorage.getItem(CONFIG.STORAGE_KEY) === 'true'
  );

  const unlock = useCallback(() => {
    if (isUnlocked) return;
    setIsUnlocked(true);
    localStorage.setItem(CONFIG.STORAGE_KEY, 'true');
    trackEvent('VSLCompleted');
    trackCustom('VSLCompleted');
  }, [isUnlocked]);

  return { isUnlocked, unlock };
};
