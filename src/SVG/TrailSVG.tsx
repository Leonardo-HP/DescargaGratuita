import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
 
export const Trail: React.FC<{
  amount: number;
  children: React.ReactNode;
}> = ({ amount, children }) => {
  return (
    <AbsoluteFill>
      {new Array(amount).fill(true).map((a, i) => {
        return (
          <Sequence from={i * 3}>
            <AbsoluteFill>
           
                <AbsoluteFill
                  style={{
                    scale: String(1 - i / amount),
                  }}
                >
                  {children}
                </AbsoluteFill>
            </AbsoluteFill>
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};