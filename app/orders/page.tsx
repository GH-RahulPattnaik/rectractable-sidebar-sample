import Link from "next/link"
import { IoIosAdd } from "react-icons/io"

export default function OrderPage() {
  return (
    <main>
        <div className="px-8 py-10 flex justify-between items-center w-full">
            <h1 className="font-bold text-3xl">Orders</h1>
            <a href={"/orders/new-orders"} className="p-2 bg-blue-600 hover:bg-blue-700 flex items-center gap-2"><IoIosAdd/>Add Orders</a>
        </div>
        <div className="p-8">
          contents
          
        </div>
    </main>
  )
}
