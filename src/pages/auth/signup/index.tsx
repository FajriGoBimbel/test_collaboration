import StepComponent from '@/components/stepper';
import { Button, Input, Typography, Carousel } from '@material-tailwind/react'
import { FcGoogle } from 'react-icons/fc';
import React, { useState } from 'react'
import Link from 'next/link';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '@/service/firebase';
import { useRouter } from 'next/router';

interface DataWithGoogle {
  displayName: string | null,
  email: string | null,
  avatar: string | null,
  emailVerified: boolean
}

interface StepSignUp {
  stepTwo: boolean,
  step: number
}

const SignUp = () => {

  const router = useRouter();

  const [emailField, setEmailField] = useState<String>("");
  const [emailDataWithGoogle, setEmailDataWithGoogle] = useState<DataWithGoogle>()
  const [step, setStep] = useState<StepSignUp>()
  
  console.log(emailDataWithGoogle)
  const signInWithGoogle = async () => {
    const res = await signInWithPopup(auth, googleProvider);
    setEmailDataWithGoogle({
      ...emailDataWithGoogle,
      avatar: res?.user?.photoURL,
      displayName: res?.user?.displayName,
      email: res?.user?.email,
      emailVerified: res?.user?.emailVerified
    })

    if(!res.user.emailVerified){
     router.push("/dashboard") 
    }else {
      setStep({
        ...step,
        stepTwo: true,
        step: 1,
      })
    }
    console.log("signIn dengan Google", res)
  }

  const handleDaftarStepOne = (e:any) => {
    e.preventDefault();
    console.log("Daftar Step One", emailField)
  }
  
    return (
      <div className='flex'>
        <div className='basis-100 md:basis-[50%] flex justify-center items-center'>
        <div className='py-6 px-12'>
          <div className='pb-12 pt-6 flex justify-center'>
            <div className='w-[80%]'>
            <StepComponent/>
            </div>
          </div>
          <div className='py-12'>
            <Typography>Daftar Akun Anda</Typography>
          </div>
          {
            step?
            <div>
              <div className='flex gap-4'>
                <div className='p-4 bg-orange-100 hover:bg-orange-500 rounded-sm'>
                    <Typography>Siswa</Typography>
                </div>
                <div className='p-4 bg-orange-100 hover:bg-orange-500 rounded-sm'>
                  <img className='w-[12rem] h-24' src='/PNG/8.png' alt='orang tua'/>
                    <Typography>Ortu</Typography>
                </div>
                <div className='p-4 bg-orange-100 hover:bg-orange-500 rounded-sm'>
                    <Typography>Guru</Typography>
                </div>
                <div className='p-4 bg-orange-100 hover:bg-orange-500 rounded-sm'>
                    <Typography>Umum</Typography>
                </div>
              </div>
              <form>
                <Input label='FirstName'/>
                <Input label='LastName'/>
                <Input label='Username'/>
                <Input label='No Hp Siswa'/>
                <Input label='No Hp Orang tua'/>
                <Button className='bg-gradient-to-r from-[#E62132] to-[#FDD100]' fullWidth>Daftar</Button>
              </form>
            </div>
            :
            <>
            <div>
              <Button 
                onClick={signInWithGoogle}
                size="lg"
                variant="outlined"
                color="blue-gray"
                className="flex items-center justify-center gap-3" 
                fullWidth
              >
                <FcGoogle className='h-6 w-6'/>
                Daftar With Google
              </Button>
            </div>
            <div className='flex my-12 justify-between items-center'>
              <div className='w-[40%]'>
                <hr className='border-[0.5px] border-gray-200'/>
              </div>
              <Typography className="text-gray-400">Atau</Typography>
              <div className='w-[40%]'>
                <hr className='border-[0.5px] border-gray-200'/>
              </div>
            </div>
            <form onSubmit={handleDaftarStepOne}>
              <div className='mb-4'>
              <Input onChange={({target}) => setEmailField(target.value)} label='Email' required/>
              </div>
              <Button type='submit' className='bg-gradient-to-r from-[#E62132] to-[#FDD100]' fullWidth>Next</Button>
              <div className='py-6 text-center'>
                <Typography>
                  Sudah punya akun? 
                  <Link className='text-blue-500 cursor-pointer ml-1' href="/auth/signin">
                    Masuk
                  </Link>
                </Typography>
              </div>
            </form>
            </>
          }
        </div>
        </div>
        <div className='h-screen bg-[#FFF5C7] basis-[50%] flex justify-center items-center hidden md:flex'>
          <div className='w-[80%]'>
            <Carousel
                autoplay={true}
                loop={true}
                className="rounded-xl"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                      <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                          activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    ))}
                  </div>
                )}
              >
                <div>
                <img src='/PNG/1.png' alt='Ilustrasi-3'/>
                <div className='text-center'>
                  <Typography className="text-2xl text-gray-700 font-bold">Raih Universitas Impian Anda</Typography>
                  <Typography>Belajar dengan Go bimbel online dan Raih Universitas Impian anda</Typography>
                </div>
                </div>
                <div>
                <img src='/PNG/3.png' alt='Ilustrasi-3'/>
                <div className='text-center'>
                  <Typography className="text-2xl text-gray-700 font-bold">Latih Kemampuan UTBK anda</Typography>
                  <Typography>Beragam jenis soal yang ada di GO Bimbel Online</Typography>
                </div>
                </div>
                <div>
                <img src='/PNG/4.png' alt="ilustrasi-4"/>
                <div className='text-center'>
                  <Typography className="text-2xl text-gray-700 font-bold">Go Bimbel Online</Typography>
                  <Typography>Belajar lebih mudah dengan gobimbel online</Typography>
                </div>
                </div>
            </Carousel>
          </div>
        </div>
      </div>
    );
}

export default SignUp