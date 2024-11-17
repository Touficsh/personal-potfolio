
export default function Footer() {
    const date = new Date;
    const year = date.getFullYear();
  return (
    <div className="flex justify-center dark:bg-[#171717] dark:text-white">
        <p className="py-4 mobile:py-2 mobile:text-sm text-base font-semibold">© {year} | Coded by Toufic Charafeddine</p>
    </div>
  )
}
