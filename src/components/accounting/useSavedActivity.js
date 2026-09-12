import { useRef, useState } from 'react';
import { useLearning } from '@/components/accounting/LearningProvider';
export default function useSavedActivity(sessionKey, initialState) {
  const { progress, saveProgress } = useLearning();
  const saved = progress.find(p => p.session_key === sessionKey);
  const [state, setState] = useState(() => saved?.state || { ...initialState(), run_id: crypto.randomUUID() });
  const current = useRef(state), version = useRef(0);
  const [status, setStatus] = useState(saved ? 'saved' : 'idle');
  const [error, setError] = useState('');
  const update = async patch => {
    const next = { ...current.current, ...patch };
    current.current = next;
    setState(next);
    const revision = ++version.current;
    setStatus('saving'); setError('');
    try {
      await saveProgress(sessionKey, next);
      if (revision === version.current) setStatus('saved');
      return true;
    } catch (e) {
      if (revision === version.current) { setStatus('error'); setError(e.message || 'Progress could not be saved. Please retry.'); }
      return false;
    }
  };
  return { state, update, status, error, retry: () => update({}), reset: () => update({ ...initialState(), run_id: crypto.randomUUID() }) };
}