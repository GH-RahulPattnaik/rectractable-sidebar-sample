'use client'
import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '@/firebase/firebaseConfig';
import Image from 'next/image';
import Link from 'next/link';

interface UserDetails {
  id: string;
  username: string;
  age: number;
  email: string;
  phoneNumber: number | null;
  decimalValue: number | null; // New decimal value field
  imageURL: string;
  inactive: boolean;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    latitude?: number; // Latitude field
    longitude?: number; // Longitude field
  };
  timestamp: number; // Timestamp field
}

export default function UserPage() {
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
    latitude?: number;
    longitude?: number;
  }>({
    street: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
  });
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editId, setEditId] = useState<string>('');

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

  const deleteUser = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      await deleteDoc(doc(db, 'users', id));
      fetchUsers();
    }
  };

  const editUser = async () => {
    if (editId) {
      const userRef = doc(db, 'users', editId);
      await updateDoc(userRef, {
        username,
        age,
        email,
        phoneNumber,
        decimalValue,
        inactive: inactive || false,
        address,
        timestamp: Date.now(), // Set the timestamp to the current time
      });
      setEditMode(false);
      setEditId('');
      fetchUsers();
    }
  };

  const navigateToEditUser = (user: UserDetails) => {
    setUsername(user.username); 
    setAge(user.age); 
    setEmail(user.email); 
    setPhoneNumber(user.phoneNumber); 
    setDecimalValue(user.decimalValue); 
    setInactive(user.inactive); 
    setAddress(user.address ? { ...user.address } : { street: '', city: '', state: '', country: '', zipCode: '' }); 
    setEditMode(true); 
    setEditId(user.id);
  };

  return (
    <div className='p-6'>
      <div className='flex items-center justify-between'>
        <h1>USERS</h1>
        <Link href={"/add-users"} className='border p-3'>+ Add USER</Link>
      </div>

      {/* Display user list... */}
      <div className='my-6'>
        {users.map((user) => (
          <div key={user.id} className="border flex flex-col gap-4 my-5">
            <div className='w-full my-6 px-5 flex'>
              <div className='w-3/4 max-h-max flex flex-col gap-2'>
                <h2 className="font-bold text-2xl text-white">{user.username}</h2>
                <p className="font-mono font-thin">Age: {user.age}</p>
                <p className="font-mono font-thin">Email: {user.email}</p>
                <p className="font-mono font-thin">Phone Number: {user.phoneNumber}</p>
                <p className="font-mono font-thin">CGPA: {user.decimalValue}</p>
                <p className="font-mono font-thin">Inactive: {user.inactive ? 'Yes' : 'No'}</p>
                {user.address && (
                  <div>
                    <p className="font-mono font-thin">Address: {user.address.street}, {user.address.city}, {user.address.state}, {user.address.country}, {user.address.zipCode}</p>
                    {user.address.latitude && user.address.longitude && (
                      <p className="font-mono font-thin">Location: {user.address.latitude}, {user.address.longitude}</p>
                    )}
                  </div>
                )}
                <p className="font-mono font-thin">Last Updated: {new Date(user.timestamp).toLocaleString()}</p>
              </div>
              {user.imageURL && (
                <div className='w-52 h-52 border flex items-center justify-center p-3'>
                  <Image src={user.imageURL} alt='User Avatar' width={200} height={200} />
                </div>
              )}
              
            </div>
            <div className='flex gap-4'>
              <button className='px-3 py-2 bg-blue-500 hover:bg-blue-800 font-bold text-white rounded-lg'
                onClick={() => navigateToEditUser(user)}> Edit </button>
              <button className='px-3 py-2 bg-red-500 hover:bg-red-800 font-bold text-white rounded-lg'onClick={() => deleteUser(user.id)}> Delete </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit User Form */}
      {editMode && (
        <div className='absolute top-0 left-0 w-full max-h-max bg-gray-900 bg-opacity-50 flex items-center justify-center gap-4 pt-10 pb-20'>
          <div className='bg-zinc-800 flex flex-col p-6 rounded-lg shadow-lg'>
            <h2 className='text-xl font-bold'>Edit User</h2>
            
            <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} className='border p-2 mt-2 text-black' />

            <input type='number' placeholder='Age' value={age} onChange={(e) => setAge(parseInt(e.target.value))} className='border p-2 mt-2 text-black'/>

            <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='border p-2 mt-2 text-black'/>

            <input type='tel' placeholder='Phone Number'  value={phoneNumber || ''} onChange={(e) => setPhoneNumber(parseInt(e.target.value))} className='border p-2 mt-2 text-black'/>
            
            <input type='number' step='0.01' placeholder='Decimal Value' value={decimalValue || ''} onChange={(e) => setDecimalValue(parseFloat(e.target.value))} className='border p-2 mt-2 text-black'/>

            <label className='flex items-center mt-2'>
              <input type='checkbox' checked={inactive} onChange={(e) => setInactive(e.target.checked)} className='mr-2'/> Inactive
            </label>
            
            <input type='text' placeholder='Street' value={address.street} onChange={(e) => setAddress({ ...address, street: e.target.value })} className='border p-2 mt-2 text-black'/>
            <input type='text' placeholder='City' value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} className='border p-2 mt-2 text-black'/>
            <input type='text' placeholder='State' value={address.state} onChange={(e) => setAddress({ ...address, state: e.target.value })} className='border p-2 mt-2 text-black'/>
            <input type='text' placeholder='Country' value={address.country} onChange={(e) => setAddress({ ...address, country: e.target.value })} className='border p-2 mt-2 text-black'/>
            <input type='text' placeholder='Zip Code' value={address.zipCode} onChange={(e) => setAddress({ ...address, zipCode: e.target.value })}className='border p-2 mt-2 text-black'/>
            <button className='bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg' onClick={editUser}>Save Changes</button>
            <button className='bg-gray-200 text-gray-700 px-4 py-2 mt-2 rounded-lg' onClick={() => setEditMode(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
