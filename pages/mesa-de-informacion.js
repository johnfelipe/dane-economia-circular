import Head from 'next/head'
import { useState, useEffect } from 'react'
import { CircularEconomySubtableCard } from '../components/CircularEconomySubtableCard'
import { CircularEconomySubtablesModal } from '../components/CircularEconomySubtablesModal'
import { LogoDatasketch } from '../components/LogoDatasketch'
import circularEconomySubtableData from '../data/circularEconomySubtable.json'

export default function InformationTable () {
  const [result, setResult] = useState({})
  const [selected, setSelected] = useState(false)

  const showModal = (e) => {
    const id = e.target.closest('div').getAttribute('data-id')
    setResult(circularEconomySubtableData.find(item => item.id === +id))
    setSelected(true)
  }

  const handleUserKeyPress = event => {
    const { key } = event
    if (key === 'Escape' && selected === true) {
      setSelected(false)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress)

    return () => {
      window.removeEventListener('keydown', handleUserKeyPress)
    }
  })

  return (
        <>
            <Head>
                <title>Mesa de Información de Economía Circular | DANE</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='py-12 lg:py-16 xl:py-20'>
                <div className='mx-auto w-10/12 max-w-screen-lim'>
                    <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-8 gap-x-[108px]'>
                        <div className='lg:w-6/12'>
                            <div className='space-y-7'>
                                <h2 className='text-blue-ocean text-2xl 3xl:text-[32px]'>
                                    <span className='font-bold'>Mesa de información</span> de Economía Circular - MIEC
                                </h2>
                                <p>
                                    En mayo de 2019 se consolidó la mesa de información de economía circular en línea con la Estrategia Nacional de Economía Circular – ENEC y busca articular a las entidades del Sistema Estadístico Nacional – SEN para la identificación, fortalecimiento y generación de información relevante y oportuna requerida en la toma de decisiones y la evaluación de la política pública asociada a la Economía Circular
                                </p>
                            </div>
                        </div>
                        <div className='lg:w-6/12'>
                            <div className='space-y-7'>
                                <p>
                                    De acuerdo con las lineas prioritarias de la Estrategia Nacional de Economía Circular - ENEC, en conjunto con el Ministerio de Ambiente y Desarrollo Sostenible, se identificó la necesidad de articular la submesa de materiales industriales y la submesa de consumo masivo. En este sentido para el 2021 se desarrollarán 6 submesas.
                                </p>
                                <p>
                                    El objetivo de las submesas de información es organizar, producir y fortalecer la información estadística sobre la temática de cada una de las submesas, que es necesaria para la toma de decisiones, la formulación y evaluación de la política pública asociada a la economía circular
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mx-auto w-10/12 max-w-screen-lim'>
                <div className='bg-blue-4 text-white pt-[63px] pb-[80.51px] rounded-tr-[140px] overflow-hidden'>
                    <div className='space-y-[60px]'>
                        <div className='max-w-[556px] w-10/12 mx-auto text-center space-y-4'>
                            <h3 className='text-lg 2xl:text-[24px] font-bold'>
                                Submesas Economía Circular
                            </h3>
                            <p>
                                Para avanzar en la medición de la Economía Circular se establecieron las siguientes submesas de información:
                            </p>
                        </div>
                        <div className='mx-auto w-10/12'>
                            <div onClick={showModal} className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-8 2xl:gap-y-[58px]'>
                                {
                                    circularEconomySubtableData.map((item, index) => <CircularEconomySubtableCard key={`circular-economy-${index + 1}`} item={item} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-12 lg:py-16 xl:py-[72px]'>
                <div className='mx-auto w-10/12 max-w-screen-lim'>
                    <div className='space-y-8'>
                        <div className='max-w-[437px] mx-auto text-center'>
                            <h3 className='3xl:text-lg font-bold'>
                                A través del desarrollo de las submesas se consolidarán los siguientes productos:
                            </h3>
                        </div>
                        <div className='mx-auto w-11/12'>
                            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-8 3xl:gap-y-9 3xl:gap-x-[131px]'>
                                <div className='flex space-x-[12.63px]'>
                                    <img className='w-[22.63px] h-[24.01px]' src='arrow-right-purple.svg' alt='arrow right' />
                                    <p>
                                        Inventario de operaciones estadísticas relacionadas con Economía Circular.
                                    </p>
                                </div>
                                <div className='flex space-x-[12.63px]'>
                                    <img className='w-[22.63px] h-[24.01px]' src='arrow-right-purple.svg' alt='arrow right' />
                                    <p>
                                        Inventario de registros administrativos relacionados con Economía Circular.
                                    </p>
                                </div>
                                <div className='flex space-x-[12.63px]'>
                                    <img className='w-[22.63px] h-[24.01px]' src='arrow-right-purple.svg' alt='arrow right' />
                                    <p>
                                        Batería de indicadores relevantes para la Economía Circular.
                                    </p>
                                </div>
                                <div className='flex space-x-[12.63px]'>
                                    <img className='w-[22.63px] h-[24.01px]' src='arrow-right-purple.svg' alt='arrow right' />
                                    <p>
                                        Inventario de requerimientos o necesidades de información estadística sobre Economía Circular.
                                    </p>
                                </div>
                                <div className='flex space-x-[12.63px]'>
                                    <img className='w-[22.63px] h-[24.01px]' src='arrow-right-purple.svg' alt='arrow right' />
                                    <p>
                                        Estrategia para dar respuesta a las necesidades de información estadística priorizadas.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <LogoDatasketch />
                    </div>
                </div>
            </div>

            <CircularEconomySubtablesModal item={result} selected={selected} setSelected={setSelected} />
        </>
  )
}
