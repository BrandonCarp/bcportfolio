export default function TimeZone() {
  const hour = typeof window !== "undefined" ? new Date().getHours() : 6; 
  const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  return (
    <h1 suppressHydrationWarning className="text-4xl font-semibold text-white">
      {greeting}
    </h1>
  );
}