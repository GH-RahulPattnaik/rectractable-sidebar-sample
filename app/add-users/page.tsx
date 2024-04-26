'use client'
import React, { useEffect, useState } from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';
import Link from 'next/link';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '@/firebase/firebaseConfig';

interface UserDetails {
    id: string;
    username: string;
    age: number;
    email: string;
    phoneNumber: number | null;
    decimalValue: number | null;
    imageURL: string;
    inactive: boolean;
    address: {
        street: string;
        city: string;
        state: string;
        country: string;
        zipCode: string;
    };
    location: {
        latitude: number;
        longitude: number;
    };
    hobbies: string[]; // New array data type
}

export default function UserInputs() {
    const [users, setUsers] = useState<UserDetails[]>([]);
    const [username, setUsername] = useState<string>('');
    const [age, setAge] = useState<number>(0);
    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<number | null>(null);
    const [decimalValue, setDecimalValue] = useState<number | null>(null);
    const [inactive, setInactive] = useState<boolean>(false);
    const [address, setAddress] = useState<{
        street: string;
        city: string;
        state: string;
        country: string;
        zipCode: string;
    }>({
        street: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
    });
    const [latitude, setLatitude] = useState<number | null>(null);
    const [longitude, setLongitude] = useState<number | null>(null);
    const [hobbies, setHobbies] = useState<string[]>([]); // New state for hobbies array

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const userList: UserDetails[] = [];

        querySnapshot.forEach((doc) => {
            userList.push({ id: doc.id, ...doc.data() } as UserDetails);
        });

        setUsers(userList);
    };

    const addUser = async () => {
        const data: UserDetails = {
            username,
            age,
            email,
            phoneNumber,
            decimalValue,
            imageURL: '',
            inactive,
            address,
            location: {
                latitude: latitude!,
                longitude: longitude!
            },
            hobbies, // Include hobbies in the data object
            id: ''
        };

        await addDoc(collection(db, 'users'), data);
        fetchUsers();
        clearForm();
    };

    const clearForm = () => {
        setUsername('');
        setAge(0);
        setEmail('');
        setPhoneNumber(null);
        setDecimalValue(null);
        setInactive(false);
        setAddress({
            street: '',
            city: '',
            state: '',
            country: '',
            zipCode: '',
        });
        setLatitude(null);
        setLongitude(null);
        setHobbies([]); 
    };
    return (
        <main>
            <div className='max-w-md mx-auto p-4 shadow-md'>
                <div className='flex items-center gap-8 mb-8'>
                    <Link href={"/users"}><BiLeftArrowAlt size={24} /></Link>
                    <h1 className='text-2xl font-bold'>User Input</h1>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); addUser(); }} className='grid grid-cols-1 gap-8'>
                    {/* Form inputs */}
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className='focus:outline-none w-full px-3 py-2 border rounded-lg focus:border-blue-600 text-black font-bold'/>

                    <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(Number(e.target.value))} className='focus:outline-none w-full px-3 py-2 border rounded-lg focus:border-blue-600 text-black font-normal'/>

                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}className='focus:outline-none w-full px-3 py-2 border rounded-lg focus:border-blue-600 text-black font-normal'/>

                    <input type="text" placeholder="Phone Number" value={phoneNumber || ''} onChange={(e) => setPhoneNumber(e.target.value ? Number(e.target.value) : null)} className='focus:outline-none w-full px-3 py-2 border rounded-lg focus:border-blue-600 text-black font-normal'/>

                    <input type="number" step="0.01" placeholder="CGPA" value={decimalValue || ''} onChange={(e) => setDecimalValue(e.target.value ? Number(e.target.value) : null)} className='focus:outline-none w-full px-3 py-2 border rounded-lg focus:border-blue-600 text-black font-normal'/>

                    <div className='flex items-center gap-3'>
                        <input type="checkbox" id="inactive" checked={inactive} onChange={(e) => setInactive(e.target.checked)}/>
                        <label htmlFor="inactive">Inactive?</label>
                    </div>

                    {/* Address input */}
                    <h1>Address : </h1>
                    <input type="text" placeholder="Street" value={address.street} onChange={(e) => setAddress((prev) => ({ ...prev, street: e.target.value }))} className='focus:outline-none w-full px-3 py-2 border rounded-lg focus:border-blue-600 text-black font-normal'/>

                    <input type="text" placeholder="City" value={address.city} onChange={(e) => setAddress((prev) => ({ ...prev, city: e.target.value }))} className='focus:outline-none w-full px-3 py-2 border rounded-lg focus:border-blue-600 text-black font-normal'/>

                    <input type="text" placeholder="State" value={address.state} onChange={(e) => setAddress((prev) => ({ ...prev, state: e.target.value }))} className='focus:outline-none w-full px-3 py-2 border rounded-lg focus:border-blue-600 text-black font-normal'/>

                    <input type="text" placeholder="Country" value={address.country} onChange={(e) => setAddress((prev) => ({ ...prev, country: e.target.value }))} className='focus:outline-none w-full px-3 py-2 border rounded-lg focus:border-blue-600 text-black font-normal'/>

                    <input type="text" placeholder="Zip Code" value={address.zipCode} onChange={(e) => setAddress((prev) => ({ ...prev, zipCode: e.target.value }))} className='focus:outline-none w-full px-3 py-2 border rounded-lg focus:border-blue-600 text-black font-normal'/>

                    {/* Location input */}
                    <h1>Location :</h1>
                    <input type="number" placeholder="Latitude" value={latitude || ''} onChange={(e) => setLatitude(e.target.value ? Number(e.target.value) : null)} className='focus:outline-none w-full px-3 py-2 border rounded-lg focus:border-blue-600 text-black font-normal'/>

                    <input type="number" placeholder="Longitude" value={longitude || ''} onChange={(e) => setLongitude(e.target.value ? Number(e.target.value) : null)} className='focus:outline-none w-full px-3 py-2 border rounded-lg focus:border-blue-600 text-black font-normal'/>

                    {/* New input for hobbies array */}
                    <input type="text" placeholder="Hobbies (comma-separated)" value={hobbies.join(', ')} onChange={(e) => setHobbies(e.target.value.split(', '))} className='focus:outline-none w-full px-3 py-2 border rounded-lg focus:border-blue-600 text-black font-normal'/>

                    {/* Form buttons */}
                    <div className='flex gap-4'>
                        <button type='submit' className='px-3 py-2 bg-blue-500 hover:bg-blue-800 font-bold text-white rounded-lg'> Submit </button>
                        <button type='button' onClick={clearForm} className='px-3 py-2 bg-red-500 hover:bg-red-800 font-bold text-white rounded-lg' > Clear </button>
                    </div>
                </form>
            </div>
        </main>
    );
}

