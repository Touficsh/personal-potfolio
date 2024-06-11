
export default function Footer() {
    const date = new Date;
    const year = date.getFullYear();
  return (
    <div className="flex justify-center">
        <p className="py-4 font-semibold">© {year} | Coded by Toufic Charafeddine</p>
    </div>
  )
}
