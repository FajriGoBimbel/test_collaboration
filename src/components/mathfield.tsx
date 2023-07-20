import { useEffect, useRef } from "react";
import { MathfieldElement, MathfieldOptions } from "mathlive";

export type MathfieldProps = {
  options?: Partial<MathfieldOptions>;

  value: string;
  onChange: (latex: string) => void;

  className?: string;
};

export default const Mathfield = () => {
  const mathfieldRef = useRef<MathfieldElement>(null);

  useEffect(() => {
    // mathfieldRef.current.<option> = <value>;
  }, []);

  return (
    <math-field ref={mathfieldRef}/>
  );
};