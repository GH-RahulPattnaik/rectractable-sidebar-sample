/* eslint-disable @next/next/no-img-element */
"use client"
import { IoCloseSharp, IoHelpCircleSharp } from 'react-icons/io5';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import SectionOne from '@/components/addNewOrders/sectionOne';

const manufacturers = [{ value: "1", label: "Manufacturer A" }];
const brand = [{ value: "1", label: "Brand A" }];


export default function AddNewOrders() {
  
  return (     
    <main>
      {/* FORM */}
      <form className="w-full" >
        {/* HEADER */}
        <nav className='sticky top-0 z-50 bg-white dark:bg-black'>
          <div className="p-6 flex items-center justify-between border-t border-b ">
            <h1 className="text-2xl">Add Order</h1>
            <a href="/orders"><IoCloseSharp size={24} /></a>
          </div>
        </nav>

        <SectionOne />        

        <hr />

        {/* SECTION 2 */}
        <section className='flex w-full p-6'>
          <div className='max-h-max w-1/2 flex flex-col'>
            {/* dimension */}
            <label htmlFor="dimension" className='flex items-start gap-3 mt-12'>
              <div className='flex flex-col gap-2'>
                <h1 className='text-sm'>Dimension</h1>
                <p className='w-28 text-xs'>(Length X Width X Height)</p>                
              </div>
              <div className='flex items-center gap-2 border'>
                <input type="number" className='bg-transparent w-10 outline-none appearance-none'/>X
                <input type="number" className='bg-transparent w-10 outline-none appearance-none'/>X
                <input type="number" className='bg-transparent w-10 outline-none appearance-none'/>
                <select id="dimension" name="dimension" className="px-3 py-2 w-20 border-l outline-none ml-4 bg-transparent" >
                  <option value="cm" className='bg-transparent hover:bg-blue-600'>cm</option>
                  <option value="in" className='bg-transparent hover:bg-blue-600'>in</option>
                </select>
              </div>
            </label>
            {/* Manufacturer */}
            <label htmlFor="manufacturer" className="flex items-center gap-5 mt-12">
              <div className="flex flex-col gap-2">
                <h1 className="text-sm">Manufacturer</h1>
              </div>
              {/* Manufacturer dropdown */}
              <select id="manufacturer" name="manufacturer" className="border outline-none ml-4 w-72 pr-2 bg-transparent px-4 py-2">
                <option className='dark:bg-black bg-white text-black dark:text-white' value="" disabled selected>Select or add Manufacturer</option>
                {manufacturers.map((manufacturer) => (
                  <option key={manufacturer.value} value={manufacturer.value}>
                    {manufacturer.label}
                  </option>
                ))}
              </select>                            
            </label>
            {/* upc & ean */}
            <label htmlFor="upc" className="flex items-center gap-16 mt-12">
              <h1 className="text-sm flex gap-1 relative">UPC
                  {/* Hover text */}
                  <div className="group flex items-center">
                    <IoHelpCircleSharp size={18} />
                    <div className="bg-zinc-500 p-2 rotate-45 border-l border-b group-hover:block hidden absolute left-16"></div>
                    <p className="group-hover:block hidden absolute border bg-zinc-500 z-0 left-16 p-2 w-60 rounded-lg text-xs font-light">Twelve digit unique number associated with the bar code (Universal Product Code)</p>
                  </div>
                </h1>
                <input id="upc" type="number" name="upc" className="px-3 py-2 w-72 border bg-transparent ml-2" />
            </label>
            <label htmlFor="ean" className="flex items-center gap-16 mt-12">
              <h1 className="text-sm flex gap-1 relative">EAN
                  {/* Hover text */}
                  <div className="group flex items-center">
                    <IoHelpCircleSharp size={18} />
                    <div className="bg-zinc-500 p-2 rotate-45 border-l border-b group-hover:block hidden absolute left-16"></div>
                    <p className="group-hover:block hidden absolute border bg-zinc-500 z-0 left-16 p-2 w-60 rounded-lg text-xs font-light">Thirteen digit unique number (International Article Number)</p>
                  </div>
                </h1>
                <input id="ean" type="number" name="ean" className="px-3 py-2 w-72 border bg-transparent ml-2" />
            </label>
          </div>

          <div className='max-h-max w-1/2 flex flex-col'>
            {/* weight */}
            <label htmlFor="weight" className='flex items-center gap-16 mt-12'>
              <h1 className='text-sm'>Weight</h1>
              <div className='border'>
                <input type="number" className='bg-transparent w-56 outline-none appearance-none'/>
                <select id="weight" name="weight" className="px-3 py-2 w-20 border-l outline-none ml-4 bg-transparent" >
                  <option value="kg" className='dark:bg-black bg-white text-black dark:text-white'>kg</option>
                  <option value="g" className='dark:bg-black bg-white text-black dark:text-white'>g</option>
                  <option value="lb" className='dark:bg-black bg-white text-black dark:text-white'>lb</option>
                  <option value="oz" className='dark:bg-black bg-white text-black dark:text-white'>oz</option>
                </select>
              </div>
            </label>
            {/* Brand */}
            <label htmlFor="brand" className="flex items-center gap-12 mt-12">
              <div className="flex flex-col gap-2">
                <h1 className="text-sm">Brand</h1>
              </div>
              {/* Manufacturer dropdown */}
              <select id="brand" name="brand" className="border outline-none ml-6 w-80 pr-2 bg-transparent px-4 py-2">
                <option className='dark:bg-black bg-white text-black dark:text-white' value="" disabled selected>Select or add Brand</option>
                {brand.map((brand) => (
                  <option key={brand.value} value={brand.value}>
                    {brand.label}
                  </option>
                ))}
              </select>                            
            </label>
            {/* mpn & ean */}
            <label htmlFor="mpn" className="flex items-center gap-12 mt-12">
              <h1 className="text-sm flex gap-1 relative">MPN
                  {/* Hover text */}
                  <div className="group flex items-center">
                    <IoHelpCircleSharp size={18} />
                    <div className="bg-zinc-500 p-2 rotate-45 border-l border-b group-hover:block hidden absolute left-16"></div>
                    <p className="group-hover:block hidden absolute border bg-zinc-500 z-0 left-16 p-2 w-60 rounded-lg text-xs font-light">Manufacturing Part Number unambiguously identifies a part design</p>
                  </div>
                </h1>
                <input id="mpn" type="number" name="mpn" className="px-3 py-2 w-80 border bg-transparent ml-2" />
            </label>
            <label htmlFor="isbn" className="flex items-center gap-12 mt-12">
              <h1 className="text-sm flex gap-1 relative">ISBN
                  {/* Hover text */}
                  <div className="group flex items-center">
                    <IoHelpCircleSharp size={18} />
                    <div className="bg-zinc-500 p-2 rotate-45 border-l border-b group-hover:block hidden absolute left-16"></div>
                    <p className="group-hover:block hidden absolute border bg-zinc-500 z-0 left-16 p-2 w-60 rounded-lg text-xs font-light">Thirteen digit unique commercial book identifier (International Standard Book Number)</p>
                  </div>
                </h1>
                <input id="isbn" type="number" name="isbn" className="px-3 py-2 w-80 border bg-transparent ml-2"/>
            </label>
          </div>                             
        </section>

        <hr />

        {/* SECTION 3 */}
        <section className='flex w-full p-6'>

          {/* Sale Information */}
          <div className='flex flex-col w-1/2'>
            <h1 className='flex items-center gap-3'><input type="checkbox" name="sale-information" id="sale-information" /> Sale Information</h1>
            {/* Sell Price */}
            <label htmlFor="selling-price" className='flex items-center py-3 gap-16'>
              <h1 className='text-red-600'>Selling Price *</h1>
              <div className='flex'>
                <div className='border rounded-l-lg text-sm p-3'>INR</div>
                <input type="number" name='selling-price' id='selling-price' className='border rounded-r-lg text-sm p-3 w-60 bg-transparent outline-none'/>
              </div>
            </label>
            {/* Account */}
            <label htmlFor="seller-account" className='flex items-center py-3 gap-20'>
              <h1 className='text-red-600'>Account *</h1>
              {/* insert dropdown here */}
              <label htmlFor="seller-account" className='flex items-center'>
                <select id="unit" name="unit" className="px-3 py-2 w-72 rounded-md border bg-transparent outline-none ml-4 dark:text-white">
                  <option className='dark:bg-black dark:text-white bg-white text-black font-bold' value="" disabled selected>income</option>
                  <option className='dark:bg-black dark:text-white bg-white text-black' value="interest-income">[40476] Interest Income</option>
                  <option className='dark:bg-black dark:text-white bg-white text-black' value="discount">[54973] Discount</option>
                  <option className='dark:bg-black dark:text-white bg-white text-black' value="late-fee-income">[56705] Late Fee Income</option>
                  <option className='dark:bg-black dark:text-white bg-white text-black' value="sales">[71649] Sales</option>
                  <option className='dark:bg-black dark:text-white bg-white text-black' value="general-income">[86344] General Income</option>
                  <option className='dark:bg-black dark:text-white bg-white text-black' value="shipping-charges">[12176] Shipping Charges</option>                  
                </select>                
              </label>
            </label>
            {/* Description */}
            <label htmlFor="seller-account" className='flex items-start py-3 gap-20'>
              <h1>Description</h1>
              {/* description */}
              <textarea name="description" id="description" className='bg-transparent p-2 ml-2 border rounded-md w-72' ></textarea>
            </label>

          </div>

          {/* Purchase Information */}
          <div className='flex flex-col w-1/2'>
            <h1 className='flex items-center gap-3'><input type="checkbox" name="sale-information" id="cost-information" /> Cost Information</h1>
            {/* Sell Price */}
            <label htmlFor="cost-price" className='flex items-center py-3 gap-20' >
              <h1 className='text-red-600'>Cost Price *</h1>
              <div className='flex'>
                <div className='border rounded-l-lg text-sm p-3'>INR</div>
                <input type="number" name='cost-price' id='cost-price' className='border rounded-r-lg text-sm p-3 w-60 bg-transparent outline-none' />
              </div>
            </label>
            {/* Account */}
            <label htmlFor="seller-account" className='flex items-center py-3 gap-20'>
              <h1 className='text-red-600'>Account *</h1>
              {/* insert dropdown here */}
              <label htmlFor="seller-account" className='flex items-center'>
                <select id="unit" name="unit" className="px-3 py-2 w-72 rounded-md border bg-transparent outline-none ml-4 dark:text-white">
                  <option className='dark:bg-black dark:text-white bg-white text-black font-bold' value="" disabled selected>Expense</option>
                  <option className='dark:bg-black dark:text-white bg-white text-black' value="advertising-and-marketing">[45637] Advertising and Marketing</option>
                  <option className='dark:bg-black dark:text-white bg-white text-black' value="automobile-expenses">[60235] Automobile Expense</option>
                  <option className='dark:bg-black dark:text-white bg-white text-black' value="bad-debt">[48346] Bad Debt</option>
                  <option className='dark:bg-black dark:text-white bg-white text-black' value="bank-fees-and-charges">[92448] Bank Fees and Charges</option>
                  <option className='dark:bg-black dark:text-white bg-white text-black' value="consultant-expense">[63180] Consultant Expense</option>                  
                </select>                
              </label>
            </label>
            {/* Description */}
            <label htmlFor="seller-account" className='flex items-start py-3 gap-20'>
              <h1>Description</h1>
              {/* description */}
              <textarea name="description" id="description" className='bg-transparent p-2 ml-1 border rounded-md w-72'></textarea>
            </label>
            {/* Preferred Vendor */}
            <label htmlFor="preferred-vendor" className='flex items-center gap-10 mt-5'>
              <h1>Preferred Vendor</h1>
              <select name="preferred-vendor" id="preferred-vendor" className='rounded-md border outline-none bg-transparent p-1'>
                <option className='dark:bg-black dark:text-white bg-white text-black' value="" disabled selected></option>
                <option className='dark:bg-black dark:text-white bg-white text-black' value="john-smith">John Smith Customer</option>
                <option className='dark:bg-black dark:text-white bg-white text-black' value="emily-johnson">Emily Johnson Customer</option>
                <option className='dark:bg-black dark:text-white bg-white text-black' value="david-willaims">David Williams Customer</option>
                <option className='dark:bg-black dark:text-white bg-white text-black' value="sarah-brown">Sarah Brown Customer</option>
                <option className='dark:bg-black dark:text-white bg-white text-black' value="michael-davis">Michael Davis Customer</option>
                <option className='dark:bg-black dark:text-white bg-white text-black' value="zoe-turner">Zoe Turner Customer</option>
                <option className='dark:bg-black dark:text-white bg-white text-black' value="emma-anderson">Emma Anderson Customer</option>
              </select>
            </label>

          </div>
        </section>

        {/* FOOTER */}
      <footer className='sticky z-50 bottom-0 left-0 w-full border-t border-b bg-white dark:bg-black'>
        <div className='flex items-center gap-4 px-8 py-4'>
          <button type="submit" className="w-fit px-3 py-2 rounded-md bg-indigo-600 font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
          <button type='button' className='px-3 py-2 w-fit rounded-md border '>Cancel</button>
        </div>
      </footer>  
      </form>
    </main>      
  )
}


