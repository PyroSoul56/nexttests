import { useEffect, useState } from "react";

interface ScrambleTextProps {
  text: string;
  duration?: number; // Tiempo total de la animación
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ text, duration = 2000 }) => {
  const [displayText, setDisplayText] = useState<string>("");
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-";

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let currentIteration = 0;
    const totalIterations = 20; // Número de ciclos para cambiar los caracteres aleatorios
    
    const scramble = () => {
      const scrambleText = text.split("").map((char, index) => {
        if (currentIteration / totalIterations >= (index + 1) / text.length) {
          return char;
        }
        return characters[Math.floor(Math.random() * characters.length)];
      }).join("");

      setDisplayText(scrambleText);
      currentIteration++;

      if (currentIteration <= totalIterations) {
        timeoutId = setTimeout(scramble, duration / totalIterations);
      }
    };

    scramble();

    return () => clearTimeout(timeoutId);
  }, [text, duration]);

  return (
    <span style={{ fontFamily: "monospace" }}>{displayText}</span>
  );
};

export default ScrambleText;
    