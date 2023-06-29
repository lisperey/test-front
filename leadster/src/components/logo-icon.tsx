import Image from 'next/image'
 
export default function LogoIcon() {
  return (
    <Image
      src='/imgs/logo.png'
      width={41}
      height={9}
      alt="logo"
      title='logo'
    />
  )
}