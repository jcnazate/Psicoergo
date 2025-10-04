// components/FullScreenLoader.tsx
export function FullScreenLoader({ show = false }: { show?: boolean }) {
  if (!show) return null
  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center
                    bg-[linear-gradient(180deg,#FFFFFF_0%,#6AA96A_55%,#004300_100%)]">
      <BarsLoader />
    </div>
  )
}

function BarsLoader() {
  return (
    <div className="relative h-24 w-40">
      {[...Array(9)].map((_, i) => (
        <span
          key={i}
          className="absolute bottom-0 w-[4px] bg-white rounded"
          style={{
            left: `${14 + i * 14}px`,
            height: "20px",
            animation: `psicoGrow 1000ms ease-in-out ${i * 90}ms infinite`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes psicoGrow {
          0%,
          100% {
            transform: translateY(0) scaleY(1);
            opacity: 0.35;
          }
          50% {
            transform: translateY(-40px) scaleY(3);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
