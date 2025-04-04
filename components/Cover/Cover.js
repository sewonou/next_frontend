import Image from "next/image";

export const Cover = ({children, background}) => {
  return <div className="h-screen bg-slate-800 relative min-h-[400px] flex justify-center items-center">
    <Image
      src={ background }
      alt="Cover"
      fill
      className="mix-blend-soft-light object-cover"
    />
    {children}
  </div>
}
