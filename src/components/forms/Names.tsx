import { ChangeEvent, useEffect, useState } from 'react'
import { useAppDispatch } from '../../redux/hooks/store'
import { IProfileNames } from '../../redux/services/auth.service'
import { setNamesForm } from '../../redux/slices/auth.slice'
import { namesCheck } from '../../utils/formValidation'

const Names = () => {
  const dispatch = useAppDispatch(),
    // Names Form datas
    [namesFormState, setFormState] = useState<IProfileNames>({
      firstName: '',
      lastName: '',
      isFirstNameValid: false,
      isLastNameValid: false,
    }),
    // Onchange, check and stock form datas in useState
    handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
      const name = target.name.includes('first') ? 'isFirstNameValid' : 'isLastNameValid'
      setFormState((prev) => ({ ...prev, [target.name]: target.value, [name]: namesCheck(target) }))
    }

  useEffect(() => {
    dispatch(setNamesForm({ namesForm: namesFormState }))
  }, [namesFormState])

  return (
    <>
      {/** *********** Names Inputs ******************/}
      <div className='input-wrapper'>
        <label htmlFor='firstname'>Firstname</label>
        <input type='text' id='firstname' name='firstName' onChange={handleChange} />
      </div>
      <div className='input-wrapper'>
        <label htmlFor='lastname'>Lastname</label>
        <input type='text' id='lastname' name='lastName' onChange={handleChange} />
      </div>
    </>
  )
}

export default Names
