interface ReceiptBottomProps {
  numberRips: number;
  children: React.ReactNode;
}

const ReceiptBottom = ({ numberRips, children }: ReceiptBottomProps) => {
  return (
    <div className="w-full relative flex flex-col items-center receipt--info">
      <div
        className="receipt__rip__grid grid w-full"
        style={{ gridTemplateColumns: `repeat(${numberRips}, 1fr)` }}
      >
        {Array.from({ length: numberRips }).map((_, index) => (
          <div key={index} className="receipt__rip__grid-item bg-[#EBEEF0]" />
        ))}
      </div>
      <div className="receipt__top-edges h-2.5 bg-white" />
      <div className="receipt__content relative z-1 w-full h-[364px] bg-white">
        {children}
      </div>
      <div className="receipt__bottom-edges h-2.5 bg-white" />
    </div>
  );
};

export default ReceiptBottom;
