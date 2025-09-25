import ReceiptBottom from "./receipt-bottom";
import ReceiptTop from "./receipt-top";
import "./style.css";

const NUMBER_RIPS = 29;

const Receipt = () => {
  return (
    <div className="relative w-[480px] receipt">
      <ReceiptTop numberRips={NUMBER_RIPS}>
        <div></div>
      </ReceiptTop>

      <ReceiptBottom numberRips={NUMBER_RIPS}>
        <div></div>
      </ReceiptBottom>
    </div>
  );
};

export default Receipt;
