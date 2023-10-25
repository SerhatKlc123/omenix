"use client";
import React from 'react';
import Image from 'next/image';
import Hero from '../images/img.png';
import PC from '../images/pc.png';
import Phone from '../images/phone.png';
import MockHow from '../images/mock-how.png';
import Group from '../images/group.png';
import Sewage from '../images/sewage.png';
import Factory from '../images/factory.png';
import RightBase from '@/components/RightBase';
import LeftBase from '@/components/LeftBase';
import Work from '@/components/Work';
import Check from '@/components/Check';
import check from '../animations/check.json';


const Body = () => {
    return (
        <div >
            {/* Hero Section */}
            <div className="bg-[url('../images/bg.png')] bg-cover bg-center bg-no-repeat w-screen lg:h-screen h-auto flex flex-col lg:flex-row items-center justify-between text-white lg:pl-32 pl-0 py-10 lg:pb-0 pb-32">
                <div className='lg:w-1/2 w-full z-10 relative flex flex-col justify-center items-center mx-auto my-auto lg:mx-0 lg:my-0 pb-10 lg:px-0 px-10'>
                    <h1 className='lg:mr-40 mr-0 lg:text-3xl text-xl font-bold lg:pt-0 pt-12 pb-5'>
                        Erken Tespit, Doğru Bakım, Akıllı Makineler ile Endüstriyel Verimlilik
                    </h1>
                    <p className='lg:mr-40 mr-0  lg:text-xl text-md font-normal'>
                        Makine öğrenimi tabanlı sistemler başarısızlığı tahmin etmek için gelişmiş analitiği kullanır. Makine öğrenimi tabanlı sistemler başarısızlığı tahmin etmek
                    </p>

                    <button className='text-white hover:bg-[#64CCC5] shadow-sm bg-[#053B50] p-1 px-5 font-normal text-lg rounded-full mr-5 mt-5'>Demo Talep</button>

                </div>


                <div className='md:w-1/2 w-full md:pl-0 md:px-0 px-14 z-20 relative'>
                    <Image src={Hero} alt='hero.png' className='w-full h-auto' />
                    <div className="absolute top-1/2 transform lg:-translate-x-1/2 -translate-x-1/3 -translate-y-1/4 z-30">
                        <Image src={Phone} alt='phone.png' className='lg:h-96 h-64 w-auto' />

                    </div>
                </div>
            </div>

            {/* Intro Section */}
            <div className="bg-gradient-to-b from-gray-100 to-white">
                <RightBase src={PC} q="O1" title="Makine Sağlığı Durum İzleme" subtitle="Makinelerin, ekipmanların ve sistemlerin sürekli olarak izlenmesi ve değerlendirilmesini ileri veri analitiği yoluyla gerçekleştirir. Makinelerin performanslarının optimize edilebilmesi, erken uyarılarla arızaların önlenebilmesi, bakım planlamasının daha etkili bir şekilde yapılabilmesi ve üretim süreçlerinin kesintisiz olarak devam edebilmesini sağlar." />
                <LeftBase src={PC} q="O2" title="Bakım Planlama" subtitle="İşletme bakım maliyetlerinde azalma hedeflenir. Bakım planlamalarını etkili kılarak, makinelerin ve ekipmanların verimli çalışmasını olağan kılar. Makine duruş sürelerini azaltarak, üretim süreçlerinde verimliliği arttırır ve üretim kayıplarını minimize eder." />
                <RightBase src={PC} q="O3" title="Kestirimci Bakım" subtitle="Yapay zeka destekli kestirimci bakım sayesinde makinelerinizde meydana gelebilecek arızaları nedenleri ile birlikte erkenden tespit ederek oluşabilecek engel ve olumsuzlukların önüne geçer." />

            </div>

            {/* How It's Work Section */}
            <div className="bg-gradient-to-b from-[#176B87] to-black w-screen h-auto flex flex-col justify-start lg:items-center items-start py-28">
                <p className='text-white font-bold lg:text-3xl text-2xl pb-5 lg:px-56 px-8'>Omenix Nasıl Çalışır?</p>
                <p className='text-gray-200 text-md lg:px-56 px-8 pb-20'>Omenix, makine sağlığı durum izleme, bakım planlama ve kestirimci bakım için gelişmiş veri analitiği kullanarak makinelerin performansını optimize etmeye, arızaları önceden tespit etmeye ve üretimi kesintisiz hale getirmeye yönelik bir hizmet sunar.</p>
                <div class="mx-auto grid md:grid-cols-3 grid-cols-1 gap-6 lg:px-56 px-8">
                    <Work src={MockHow} title="Titreşim Sensörü" subtitle="Hassas titreşim ölçümü yapan, kablolu ve kablosuz bağlantı seçenekleri bulunan ölçüm cihazıdır." />
                    <Work src={MockHow} title="IoT Gateway" subtitle="Sensör verilerini toplayıp spektrum analizi yaparak platforma işlenmiş veri gönderen cihazdır." />
                    <Work src={MockHow} title="IoT Platform" subtitle="Sensörlerden gelen işlenmiş veriyi depolamak, analiz etmek ve bildirimler oluşturmak için kullanılır." />
                </div>

            </div>

            {/* Benefits */}
            <div className='bg-gradient-to-b from-gray-100 to-white flex flex-col justify-start lg:items-center items-start py-28 px-10'>
                <p className='pb-16 font-bold text-2xl text-slate-800'>Omenix ile Sağlanan Ürün & Hizmetin Temel Faydaları</p>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-6' style={{ justifyItems: 'start' }}>
                    <Check title="Ekipmanlarla ürün kalitesini arttırma" animation={check} color={true} />
                    <Check title="Planlanmamış kesinti süresini azaltma" animation={check} color={true} />
                    <Check title="İsraf edilen üretim maliyeti" animation={check} color={true} />
                    <Check title="İsraf edilen üretim maliyetlerinin ortadan kaldırma" animation={check} color={true} />
                </div>
                <Image
                    src={Group}
                    alt='group.png'
                    className='pt-16' />
            </div>


            <div className="bg-gradient-to-b from-[#176B87] to-black w-screen h-auto flex flex-col justify-center items-center py-28 px-10">
                <p className='pb-16 font-bold text-2xl text-white'>Omenixin Tespit Ettiği Sorunlar</p>
                <div className='grid md:grid-cols-4 grid-cols-2 lg:gap-20 gap-8' style={{ justifyItems: 'start' }}>
                    <Check title="Balans" animation={check} color={false} />
                    <Check title="Gevşeklik" animation={check} color={false} />
                    <Check title="Kavitasyon" animation={check} color={false} />
                    <Check title="Eksen Kaçıklığı" animation={check} color={false} />
                    <Check title="Rulman Hasarı" animation={check} color={false} />
                    <Check title="Sürtünme" animation={check} color={false} />
                    <Check title="Kayış Problemi" animation={check} color={false} />

                </div>
            </div>

            {/* Sectors */}
            <div className="bg-gradient-to-b from-gray-100 to-white w-screen flex flex-col justify-start items-center py-24 lg:px-44 px-10">
                <p className='pb-16 font-bold text-2xl text-slate-800'>Hizmet Verdiğimiz Sektörler</p>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-8' style={{ justifyItems: 'start' }}>
                    <Image
                        src={Factory}
                        alt='factory.png'
                    />
                    <Image
                        src={Sewage}
                        alt='sewage.png'
                    />

                </div>

            </div>


        </div>
    );
}

export default Body;
