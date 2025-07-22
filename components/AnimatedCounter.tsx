"use client";

import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <p className="total-balance-amount">
      <CountUp duration={2} decimals={2} decimal="." prefix="$" start={0} end={amount} />
    </p>
  );
};

export default AnimatedCounter;
