import { useEffect, useState } from 'react';

const TextTypingAnimation = ({ texts = [], className }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentText.length < texts[currentTextIndex].length) {
        setCurrentText(
          (prevText) => prevText + texts[currentTextIndex][currentText.length]
        );
      } else {
        clearInterval(intervalId);

        // Wait for a pause, then move to the next text
        setTimeout(() => {
          setCurrentText('');
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1000); // Adjust the pause time (in milliseconds) as needed
      }
    }, 300); // Adjust the typing speed (in milliseconds) as needed

    return () => clearInterval(intervalId);
  }, [currentText, currentTextIndex]);

  return <span className={className || ''}>{currentText}</span>;
};

export default TextTypingAnimation;
