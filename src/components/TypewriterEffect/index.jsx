import { useState, useEffect, memo } from 'react';

const TypewriterEffect = () => {
  const [currentWordIndex] = useState(0); // Track which word we're typing
  const [displayedText, setDisplayedText] = useState(''); // Current displayed text
  const [isDeleting, setIsDeleting] = useState(false); // Deleting or typing
  const [speed, setSpeed] = useState(200); // Typing speed
  const [words] = useState(['FRONTEND DEVELOPER']); // Words to type

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      const isTypingComplete = !isDeleting && displayedText === currentWord;
      const isDeletingComplete = isDeleting && displayedText === '';

      if (isTypingComplete) {
        // Pause before starting to delete
        setTimeout(() => setIsDeleting(true), 800);
        setSpeed(100); // Speed up deleting
      } else if (isDeletingComplete) {
        // Move to next word or loop back
        setTimeout(() => {
          setIsDeleting(false); // Reset to typing mode
        }, 800); // Short pause before typing next word
        setSpeed(200); // Reset speed for typing
      } else {
        // Handle typing and deleting
        const updatedText = isDeleting
          ? currentWord.substring(0, displayedText.length - 1)
          : currentWord.substring(0, displayedText.length + 1);

        setDisplayedText(updatedText);
      }
    };

    const interval = setInterval(handleTyping, speed);

    return () => clearInterval(interval);
  }, [currentWordIndex, displayedText, isDeleting, speed, words]);

  return (
    <>{displayedText}<span className="cursor">|</span></>
  );
};


export default memo(TypewriterEffect);