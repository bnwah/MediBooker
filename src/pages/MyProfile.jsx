import React from 'react'
import { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: 'evincent@gmail.com',
    phone: '+1 123 456 7890',
    address: {
      line1: "52nd Cross, Richmond",
      line2: "Circle, Church Road London"
    },
    gender: 'Male',
    dob: '1996-06-06'
  })

  const [canEdit, setCanEdit] = useState(false)

  return (
    <div>

      <img src={userData.image} alt="Profile picture" />

      {/* If isEdit is true, then input field is provided. If false, then add user's name */}
      {
        canEdit ? <input type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
          : <p>{userData.name}</p>
      }

      <hr />
      <div>
        <p>CONTACT INFORMATION</p>
        <div>
          <p>Email ID:</p>
          <p>{userData.email}</p>
          <p>Phone:</p>
          {
            canEdit ? <input type="text" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
              : <p>{userData.phone}</p>
          }
          <p>Address:</p>
          {
            canEdit
              ? <p>
                <input onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} type="text" />
                <br />
                <input onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} type="text" />
              </p>
              : <p>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
          }
        </div>
      </div>
      <div>
        <p>BASIC INFORMATION</p>
        <div>
          <p>Gender:</p>
          {
            canEdit
              ? <select onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              : <p>{userData.gender}</p>
          }
          <p>Birthday:</p>
          {
            canEdit 
            ? <input type="date" onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob}/>
            : <p>{userData.dob}</p>
          }
        </div>
      </div>

      <div>
        {
          // For editable fields, allows ability to change info and save it.
          canEdit
          ? <button onClick={()=>setCanEdit(false)}>Save information</button>
          : <button onClick={()=>setCanEdit(true)}>Edit</button>
        }
      </div>


    </div>
  )
}

export default MyProfile