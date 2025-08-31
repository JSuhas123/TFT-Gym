import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SecretAdminAccess: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let keySequence: string[] = [];
    const secretSequence = ['Control', 'Shift', 'KeyA', 'KeyD', 'KeyM'];
    let timeoutId: NodeJS.Timeout;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Clear sequence if too much time passes
      clearTimeout(timeoutId);
      
      // Add the key to sequence
      keySequence.push(e.code);
      
      // Keep only the last 5 keys
      if (keySequence.length > secretSequence.length) {
        keySequence = keySequence.slice(-secretSequence.length);
      }
      
      // Check if sequence matches
      const sequenceMatch = keySequence.length === secretSequence.length && 
        keySequence.every((key, index) => key === secretSequence[index]);
      
      if (sequenceMatch) {
        e.preventDefault();
        navigate('/tft-secure-admin-2024');
        keySequence = []; // Reset sequence
        return;
      }
      
      // Reset sequence after 2 seconds of inactivity
      timeoutId = setTimeout(() => {
        keySequence = [];
      }, 2000);
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timeoutId);
    };
  }, [navigate]);

  return null; // This component doesn't render anything
};

export default SecretAdminAccess;
