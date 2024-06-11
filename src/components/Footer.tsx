
export default function Footer() {
    const date = new Date;
    const year = date.getFullYear();
  return (
    <div className="flex justify-center dark:bg-[#030712] dark:text-white">
        <p className="py-4 font-semibold">© {year} | Coded by Toufic Charafeddine</p>
    </div>
  )
}
