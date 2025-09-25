interface ReceiptTopProps {
  numberRips: number;
  children: React.ReactNode;
}

const ReceiptTop = ({ numberRips, children }: ReceiptTopProps) => {
  return (
    <div className="w-full relative flex flex-col items-center">
      <div className="receipt__top-edges h-2.5 bg-white" />
      <div className="receipt__content relative z-1 w-full h-56 bg-white">
        {children}
      </div>
      <div className="receipt__bottom-edges receipt__bottom-edges--rip h-2.5 bg-white" />
      <div
        className="receipt__rip__grid grid w-full"
        style={{ gridTemplateColumns: `repeat(${numberRips}, 1fr)` }}
      >
        {Array.from({ length: numberRips }).map((_, index) => (
          <div key={index} className="receipt__rip__grid-item bg-transparent" />
        ))}
      </div>
    </div>
  );
};

export default ReceiptTop;
