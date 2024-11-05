export default function useKeyDownHandler(sendMessage) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return {
    handleKeyDown,
  };
}
