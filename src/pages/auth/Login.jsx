import React from 'react';

const Login = () => {
    return (
        <div>
            <main className='flex flex-col px-20 py-5 border rounded-2xl bg-gray-100'>
                <header className='flex flex-col'>
                    <h1
                        className='font-sans text-4xl mb-1 font-bold text-purple-800'
                    >Acesse o <span
                        className='text-purple-600'
                    >Plus Chat</span>
                    </h1>
                    <p
                    className='text-gray-500 text-sm mt-2 mb-5 font-serif'
                    >Faça o login ou registra-se e divirta-se no Plus Chat ainda hoje.</p>
                </header>
                <form className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-2'>
                        <label
                         className='font-sans font-semibold text-sm text-gray-800'
                         htmlFor="email">E-mail</label>
                        <input
                         className='px-4 py-3 bg-white border text-gray-800 leading-5 border-gray-300 rounded'
                         type="email" placeholder='Digite seu e-mail' id='email' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label 
                        className='font-sans font-semibold text-sm text-gray-800 flex justify-between'
                        htmlFor="password">
                            Senha
                            <a href="#"
                            className='text-purple-600 hover:text-purple-500 hover:underline'
                            >
                                Esqueceu a senha?
                            </a>
                            </label>
                        <input 
                          className='px-4 py-3 bg-white border text-gray-800 leading-5 border-gray-300 rounded'
                        type="password" placeholder='Digite sua senha...' />
                    </div>
                    <footer className='flex flex-col gap-2 mt-2'>
                        <button
                        className='w-full bg-purple-800 py-4 border-none rounded text-white font-sans hover:-translate-y-px hover:ease-linear hover:-m-0.5'
                        >Entrar</button>
                        <span className='text-purple-500 px-2 py-3 flex gap-1'>Ainda não tem uma conta?
                            <a className='hover:underline hover:text-purple-900' href='#'>Inscreva-se</a>
                        </span>
                    </footer>
                </form>
            </main>
        </div>
    );
};

export default Login;