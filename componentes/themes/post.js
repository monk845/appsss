import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import nord1 from '../../public/themes/nord/nord.svg';
import nord2 from '../../public/themes/nord/nord-dark-pro-darker.svg';
import nord3 from '../../public/themes/nord/nord-deep.svg';
import nord4 from '../../public/themes/nord/nord-mips.svg';
import nord5 from '../../public/themes/nord/nord-operator-theme.svg';
import nord6 from '../../public/themes/nord/nord-wave.svg';

export const Post = (nombre, descripcion,imagenid) => {


    return (

        <>
            <Head>
                <title>Nord - theme dark for visual code 2022</title>
            </Head>

            <div className='bg-dark'>
                <div className='py-8'>
                    <div className='container'>
                        <div className='row'>

                            <div className='col-xl-12 col-lg-12 col-md-12 col-12 pb-4'>

                                <div className='row g-0'>

                                    <a className='col-lg-8 col-md-12 col-12'>
                                        <Image src={imagenid} width={350} height={500} alt='alt' priority className='col-lg-8 col-md-12 col-12 border-radius-img' />
                                    </a>

                                    <div className='col-lg-4 col-md-12 col-12'>
                                        <div className='card-body'>

                                            <Link href='/themes' className='fs-5 mb-3 fw-semi-bold d-block'>
                                                <a className="badge bg-light text-dark">Dark</a>
                                            </Link>

                                            <h1 className='mb-2 mb-lg-4'>
                                                <div className='text-inherit'>
                                                    <h1 className='text-white'>{nombre}🌒</h1>
                                                </div>
                                            </h1>

                                            <p className='text-white'>{descripcion}</p>

                                            <div className="d-grid gap-2 pt-6">
                                                <Link href='https://marketplace.visualstudio.com/items?itemName=arcticicestudio.nord-visual-studio-code'>
                                                    <a className="btn-light-primary btn-sm text-center">Download</a>

                                                </Link>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>



                        </div>
                    </div>
                </div>
            </div>


        </>
    )

}
export default Post


