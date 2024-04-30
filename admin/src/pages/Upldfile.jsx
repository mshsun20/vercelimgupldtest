import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Upldfile = () => {
    const [imgdta, setImgdta] = useState('')
    const navig = useNavigate()

    const setImgFl = (e) => {
        setImgdta(e.target.files[0])
    }

    const hndlupld = async (e) => {
        e.preventDefault()
        var formDta = new FormData()

        try {
            formDta.append('imgfl', imgdta)
            console.log(formDta)

            const confg = {
                headers: {
                    'Content-Type':'multipart/form-data'
                }
            }
            const res = await axios.post('http://localhost:5050/uploadimg', formDta, confg)
            // const res = await axios.post('https://vercelimgupldtest.vercel.app/uploadimg', formDta, confg)
            const data = await res.data
            console.log(data)

            // if (data.statuscode===200) {
            //     window.alert(`New Prize data Added Successfully.`)
            //     navig('/')
            // }
            // else {
            //     window.alert(`Prize Data Submission Failed.`)
            // }
        } catch (error) {
            console.error(error)
        }

        // formDta.append('imgfl', imgdta)
        // console.log(formDta)

        // const confg = {
        //     headers: {
        //         'Content-Type':'multipart/form-data'
        //     }
        // }
        // // const res = await axios.post('http://localhost:5050/uploadimg', formDta, confg)
        // const res = await axios.post('https://vercelimgupldtest.vercel.app/uploadimg', formDta, confg)
        // const data = await res.data
        // console.log(data)
    }

  return (
    <>
        <div className="main">
            <form>
                <div className='frmgrp'>
                  <label htmlFor="imgfl" className="frmlbl">Image Link :</label>
                  <input type="file" name="imgfl" id="imgfl" className="frmfld" onChange={setImgFl} />
                  <div className="frmvald"></div>
                </div>
                <div className="frmgrp">
                    <input type="submit" value="Upload" onClick={hndlupld} />
                </div>
            </form>
        </div>
    </>
  )
}

export default Upldfile