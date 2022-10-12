import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import "./styles/formUser.css"


const defaultValues = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    birthday: ""
}

export const FormUsers = ({createNewUsers, updateInfo, updateUserById, setUpdateInfo, setFormIsClose}) => {

 

    const {handleSubmit, reset, register, } = useForm()

    useEffect(() => {
        if(updateInfo){

            reset(updateInfo)
        }
      }, [updateInfo])
      

    const submit = (data) => {
        if(updateInfo){
            updateUserById(updateInfo.id, data)
            setUpdateInfo()
        }else{
            createNewUsers(data)
            
        }
        reset(defaultValues)
        setFormIsClose(true)
    }

   const handleCloseForm = () => {
        setFormIsClose(true)
    }

  return (
    <form className="form" onSubmit={handleSubmit(submit)}> 
    <i onClick={handleCloseForm} className="form__x"><FontAwesomeIcon icon={ faCircleXmark} /></i> 
    <h2 className="form__tittle">{updateInfo ? "Edit User" : "New User"}</h2>
        <div className="form__div">
            <label className="form__label" htmlFor="email" >email</label>
            <input className="form__input" placeholder="Enter your email" type="email" id="email" {...register("email")} />
        </div>
        <div className="form__div">
            <label className="form__label" htmlFor="password" >password</label>
            <input className="form__input" placeholder="Enter your password"type="password" id="password" {...register("password")}/>
        </div>
        <div className="form__div">
            <label className="form__label" htmlFor="firts_name" >firts name</label>
            <input className="form__input" placeholder="Enter your name" type="text" id="firts_name" {...register("first_name")} />
        </div>
        <div className="form__div">
            <label className="form__label" htmlFor="last_name" >last name</label>
            <input className="form__input" placeholder="Enter your last name" type="text" id="last_name" {...register("last_name")} />
        </div>
        <div className="form__div">
            <label className="form__label" htmlFor="birthday" >birthday</label>
            <input className="form__input" type="date" id="birthday" {...register("birthday")} />
        </div>

        <button className="form__btn">{updateInfo ? "Update" : "Create"}</button>
        
    </form>
  )
}
