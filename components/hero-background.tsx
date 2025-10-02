export default function HeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-background.svg')",
        }}
      />
    </div>
  )
}
