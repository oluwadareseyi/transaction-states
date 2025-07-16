import TransactionStates from "@/components/transaction-states";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <TransactionStates />
    </main>
  );
}
