export function isOnlyLetters(str: string) {
    return /^[A-Za-z]+$/.test(str);
  }
  
  export function generateSpeechId(index: number) {
    return `SpeechId-${index}`;
  }
  
  export function delay(duration: number) {
    return new Promise((resolve) => setTimeout(resolve, duration));
  }
  
  export function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  }
  
  export function getRandomElement<T>(array: T[]): T {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  