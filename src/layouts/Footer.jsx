import FooterElement from "@/components/FooterElement";

const products = ['Çözümler'];
const device = ['Arıza Takip','AI destekli Ariza Tespiti','Bakım Planlama'];
const contact = ['+90 (506) 549 65 26','omenix@contact.com','Fushimi, Memuro, Kasai District, Hokkaido 082-0383, Japan'];

const Footer = () => {
    return(
        <div className="bg-gradient-to-b from-gray-800 to-black w-screen h-auto py-10 flex flex-col justify-center items-center text-white">
            <div className="flex justify-center items-center px-10">
                <p className="pr-5">Bir sonraki büyük keşfinizi hızlandırmaya hazır mısınız?</p>
                <button className='text-white hover:bg-[#64CCC5] shadow-sm bg-[#053B50] font-normal rounded-full md:px-3 px-6 p-1 text-sm'>İletişime Geç</button>
            </div>
            <div className="bg-gray-800 w-screen h-0.1 my-10"/>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-56 gap-10 md:px-36 px-10" style={{ justifyItems: 'start' }}>
                <FooterElement title="Ürünler" names={products}/>
                <FooterElement title="Cihaz Durumu Takibi" names={device}/>
                <FooterElement title="İletişim" names={contact}/>

            </div>
            <p className="pt-16 text-sm">All Rights Reserved © Omenix</p>
            

        </div>
    )
}

export default Footer