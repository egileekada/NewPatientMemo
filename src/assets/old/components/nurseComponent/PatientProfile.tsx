import React from 'react'
import { useNavigate } from 'react-router'
import PatientList from '../../modal/PatientList'
import PatientScheduler from '../../modal/PatientScheduler'

export default function PatientProfile() {
    const [showModal, setShowModal] = React.useState(false)
    const [showEditModal, setShowEditModal] = React.useState(false)
    const navigate = useNavigate()
    return (
        <div className='p-8 w-full' >
            <div className='w-full flex items-center' >
                <div onClick={()=> navigate('/doctor')} style={{backgroundColor: 'rgba(113, 35, 226, 0.08)'}} className='w-10 h-10 cursor-pointer rounded-full flex justify-center items-center' >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <p className='font-Ubuntu-Medium ml-3' >Patient’s Profile</p>
                <div className='ml-auto' > 
                    <button style={{backgroundColor: '#7123E2', borderRadius: '10px'}} className='py-2 w-32 text-white ml-4 text-sm' >Diagnose</button>
                </div>
            </div> 
            <div className='w-full flex items-center py-10 mt-8 rounded-lg bg-white px-14 ' >
                <div className='w-28 h-28 rounded-full bg-pink-300' >

                </div>
                <div className='ml-3' >
                    <p className='font-Ubuntu-Medium text-xl ' >Chiamaka Jane</p>
                    <p className='font-Ubuntu-Medium text-sm mt-2 ' style={{color: '#FF8811'}} >Status: Pregnant</p>
                </div>
                <div className='ml-auto relative' >
                    <div className='flex justify-end' >
                        <div className='w-10 h-10 mx-2 rounded-full bg-gray-400' >

                        </div>
                        <div className='w-10 h-10 mx-2 rounded-full bg-gray-400' >

                        </div>
                        <div className='w-10 h-10 ml-2 rounded-full bg-gray-400' >

                        </div>
                    </div>
                    <div className='flex items-center mt-6' >
                        <p style={{backgroundColor: '#F8FAFE', color: '#5F6777'}} className='rounded-md py-2 px-4 text-sm' >Proposed Delivery Date: 12, Jun 2022</p>
                        <p style={{backgroundColor: '#FAF6FF', color: '#7123E2'}} className='rounded-md py-2 px-4 text-sm ml-5' >Marital Status: 1Married</p>
                        <p style={{color: '#FF8811'}} className='rounded-md py-2 px-4 text-sm ml-5' >Marital Status: 1Married</p>
                    </div>
                    <div onClick={()=> setShowModal(true)} className='w-12 cursor-pointer h-12 rounded-full flex justify-center items-center absolute -right-20 top-14 bg-[#7123E2]' >
                        <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 0C1.30222 0 1.10888 0.0586491 0.94443 0.16853C0.779981 0.278412 0.651809 0.434591 0.576121 0.617317C0.500433 0.800043 0.48063 1.00111 0.519215 1.19509C0.5578 1.38907 0.653041 1.56725 0.792894 1.70711C0.932746 1.84696 1.11093 1.9422 1.30491 1.98079C1.49889 2.01937 1.69996 1.99957 1.88268 1.92388C2.06541 1.84819 2.22159 1.72002 2.33147 1.55557C2.44135 1.39112 2.5 1.19778 2.5 1C2.5 0.734784 2.39464 0.48043 2.20711 0.292893C2.01957 0.105357 1.76522 0 1.5 0ZM5.5 2H19.5C19.7652 2 20.0196 1.89464 20.2071 1.70711C20.3946 1.51957 20.5 1.26522 20.5 1C20.5 0.734784 20.3946 0.48043 20.2071 0.292893C20.0196 0.105357 19.7652 0 19.5 0H5.5C5.23478 0 4.98043 0.105357 4.79289 0.292893C4.60536 0.48043 4.5 0.734784 4.5 1C4.5 1.26522 4.60536 1.51957 4.79289 1.70711C4.98043 1.89464 5.23478 2 5.5 2ZM5.5 5C5.30222 5 5.10888 5.05865 4.94443 5.16853C4.77998 5.27841 4.65181 5.43459 4.57612 5.61732C4.50043 5.80004 4.48063 6.00111 4.51922 6.19509C4.5578 6.38907 4.65304 6.56725 4.79289 6.70711C4.93275 6.84696 5.11093 6.9422 5.30491 6.98079C5.49889 7.01937 5.69996 6.99957 5.88268 6.92388C6.06541 6.84819 6.22159 6.72002 6.33147 6.55557C6.44135 6.39112 6.5 6.19778 6.5 6C6.5 5.73478 6.39464 5.48043 6.20711 5.29289C6.01957 5.10536 5.76522 5 5.5 5ZM9.5 10C9.30222 10 9.10888 10.0586 8.94443 10.1685C8.77998 10.2784 8.65181 10.4346 8.57612 10.6173C8.50043 10.8 8.48063 11.0011 8.51922 11.1951C8.5578 11.3891 8.65304 11.5673 8.79289 11.7071C8.93275 11.847 9.11093 11.9422 9.30491 11.9808C9.49889 12.0194 9.69996 11.9996 9.88268 11.9239C10.0654 11.8482 10.2216 11.72 10.3315 11.5556C10.4414 11.3911 10.5 11.1978 10.5 11C10.5 10.7348 10.3946 10.4804 10.2071 10.2929C10.0196 10.1054 9.76522 10 9.5 10ZM19.5 5H9.5C9.23478 5 8.98043 5.10536 8.79289 5.29289C8.60536 5.48043 8.5 5.73478 8.5 6C8.5 6.26522 8.60536 6.51957 8.79289 6.70711C8.98043 6.89464 9.23478 7 9.5 7H19.5C19.7652 7 20.0196 6.89464 20.2071 6.70711C20.3946 6.51957 20.5 6.26522 20.5 6C20.5 5.73478 20.3946 5.48043 20.2071 5.29289C20.0196 5.10536 19.7652 5 19.5 5ZM19.5 10H13.5C13.2348 10 12.9804 10.1054 12.7929 10.2929C12.6054 10.4804 12.5 10.7348 12.5 11C12.5 11.2652 12.6054 11.5196 12.7929 11.7071C12.9804 11.8946 13.2348 12 13.5 12H19.5C19.7652 12 20.0196 11.8946 20.2071 11.7071C20.3946 11.5196 20.5 11.2652 20.5 11C20.5 10.7348 20.3946 10.4804 20.2071 10.2929C20.0196 10.1054 19.7652 10 19.5 10Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>
            {/* <div className='w-full flex' > 
                <div className='bg-white mt-3 rounded-lg w-80 h-64 py-7 px-6' >
                    <p className='font-Ubuntu-Bold text-xl ' >Doctor</p>
                    <div className='mt-5 flex items-center' >
                        <div className='w-12 h-12 rounded-full bg-yellow-300' >

                        </div>
                        <div className='ml-2' >
                            <p className='font-Ubuntu-Medium text-sm ' >Jumoke Batmus</p>
                            <p className='font-Ubuntu-Regular text-xs ' style={{color: '#727272'}} >12:00pm, 12, Jun 2021</p>
                        </div>
                    </div>
                    <div className='mt-2 flex items-center' >
                        <div className='w-12 h-12 rounded-full bg-yellow-300' >

                        </div>
                        <div className='ml-2' >
                            <p className='font-Ubuntu-Medium text-sm ' >Jumoke Batmus</p>
                            <p className='font-Ubuntu-Regular text-xs ' style={{color: '#727272'}} >12:00pm, 12, Jun 2021</p>
                        </div>
                    </div>
                    <div className='mt-2 flex items-center' >
                        <div className='w-12 h-12 rounded-full bg-yellow-300' >

                        </div>
                        <div className='ml-2' >
                            <p className='font-Ubuntu-Medium text-sm ' >Jumoke Batmus</p>
                            <p className='font-Ubuntu-Regular text-xs ' style={{color: '#727272'}} >12:00pm, 12, Jun 2021</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white mt-3 ml-3 rounded-lg flex flex-col flex-1 h-64 py-7 px-6' >
                    <p className='font-Ubuntu-Bold text-xl ' >Doctor’s Prescription</p>
                    <p className='font-Ubuntu-Regular text-sm mt-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices nunc porttitor lectus mi id sem vulputate eu velit. Sed ut vitae amet nibh ac sed arcu at. Tincidunt eu sit sit orci arcu sed tortor leo euismod. Pellentesque ultricies vitae aliquet sagittis rhoncus tincidunt auctor sed sed.</p>
                    <p className='font-Ubuntu-Regular text-sm mt-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices nunc porttitor lectus mi id sem vulputate eu velit. Sed ut vitae amet nibh ac sed arcu at. Tincidunt eu sit sit orci arcu sed tortor leo euismod. Pellentesque ultricies vitae aliquet sagittis rhoncus tincidunt auctor sed sed.</p>
                </div>
            </div> */}
            <div className='bg-white mt-3 mb-20 rounded-lg flex flex-col flex-1 py-7 px-6' >
                <p className='font-Ubuntu-Bold text-xl ' >Vital Signs Diagnosis</p>
                <p className='font-Ubuntu-Regular text-sm mt-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices nunc porttitor lectus mi id sem vulputate eu velit. Sed ut vitae amet nibh ac sed arcu at. Tincidunt eu sit sit orci arcu sed tortor leo euismod. Pellentesque ultricies vitae aliquet sagittis rhoncus tincidunt auctor sed sed.</p>
                <p className='font-Ubuntu-Regular text-sm mt-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices nunc porttitor lectus mi id sem vulputate eu velit. Sed ut vitae amet nibh ac sed arcu at. Tincidunt eu sit sit orci arcu sed tortor leo euismod. Pellentesque ultricies vitae aliquet sagittis rhoncus tincidunt auctor sed sed.</p>
                <p className='font-Ubuntu-Regular text-sm mt-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices nunc porttitor lectus mi id sem vulputate eu velit. Sed ut vitae amet nibh ac sed arcu at. Tincidunt eu sit sit orci arcu sed tortor leo euismod. Pellentesque ultricies vitae aliquet sagittis rhoncus tincidunt auctor sed sed.</p>
            </div>
            {showModal ? 
                (
                    <>
                        <div className="h-auto flex justify-end items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <div className='relative w-auto' >
                                <PatientList next={setShowEditModal} close={setShowModal} /> 
                                <div style={{boxShadow: '2px 0px rgba(0, 0, 0, 0.15)'}} onClick={()=> setShowModal(false)} className='w-12 cursor-pointer h-12 rounded-full flex justify-center items-center absolute top-72 z-50 -left-3 bg-[#7123E2]' >
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 8L1 15M1 1L8 8L1 1ZM8 8L15 15L8 8ZM8 8L15 1L8 8Z" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div> 
                        <div className="opacity-50 absolute flex flex-1 inset-0 z-20 bg-black"/>
                    </>
                ) : null} 
            {showEditModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">  
                                <PatientScheduler close={setShowEditModal} />   
                        </div> 
                        <div className="opacity-50 absolute flex flex-1 inset-0 z-20 bg-black"/>
                    </>
                ) : null} 
        </div>
    ) 
} 