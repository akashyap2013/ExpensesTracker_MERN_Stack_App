import React from 'react'
import { useForm } from 'react-hook-form';
import List from './List';

export default function Form() {

    const {register, handleSubmit, resetField} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

  return (
    <div className="form max-w-sm mx-auto w-96">
        
        <h1 className='font-bold pb-4 text-xl'>Transaction</h1>

        <form id='form' onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4">
                <div className="input-group">
                    <input type="text" {...register('name')} placeholder='Sallary, House Rend, SIP' className='form-input' />
                </div>
                <select className='form-input' {...register('type')}>
                    <option value="Investment" defaultValue>Investment</option>
                    <option value="Expense">Expense</option>
                    <option value="Savings">Savings</option>
                </select>
                <div className="input-group">
                    <input type="text" {...register('amount')} placeholder='Amount' className='form-input' />
                </div>
                <div className="submit-btn">
                    <button className='border py-2 text-white bg-indigo-500 w-full'>Make Transaction</button>
                </div>
            </div>    
        </form>

        <List></List>
    </div>
  )
}
