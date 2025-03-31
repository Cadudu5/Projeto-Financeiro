import PurchaseForm from '@/components/PurchaseForm';

export default function NewPurchasePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Registrar Nova Compra</h1>
      <PurchaseForm />
    </div>
  );
}