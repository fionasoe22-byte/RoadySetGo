export function LicensesCard() {
  return (
    <div className="rounded-3xl border bg-card p-6">
      <h2 className="mb-5 text-xl font-semibold">
        Licenses
      </h2>

      <div className="space-y-3">
        <div className="rounded-xl bg-muted p-4">
          Class D License
        </div>

        <div className="rounded-xl bg-muted p-4">
          Driving Status: Active
        </div>
      </div>
    </div>
  );
}