export function VehicleCard() {
  return (
    <div className="rounded-3xl border bg-card p-6">
      <h2 className="mb-5 text-xl font-semibold">
        Primary Vehicle
      </h2>

      <div className="space-y-3">
        <div className="rounded-xl bg-muted p-4">
          Mercedes-Benz EQE 350+
        </div>

        <div className="rounded-xl bg-muted p-4">
          AI Connected
        </div>
      </div>
    </div>
  );
}