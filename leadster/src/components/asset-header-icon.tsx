import Image from 'next/image';
 
export default function AssetHeaderIcon() {
  return (
    <Image
      src='/imgs/asset-header.png'
      width={12}
      height={8}
      alt="logo"
      title='logo'
    />
  )
}