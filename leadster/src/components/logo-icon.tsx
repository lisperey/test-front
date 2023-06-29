import Image from 'next/image'
 
export default function LogoIcon() {
  return (
    <Image
      src='/imgs/logo.png'
      width={50}
      height={10}
      alt="logo"
      title='logo'
    />
  )
}