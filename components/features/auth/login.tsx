"use client"

import React, { useState } from 'react'
import Button from '@/components/ui/button'
import Label from '@/components/ui/label'
import Input from '@/components/ui/input'
import { useRouter } from 'next/navigation'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleLogin = async (e: React.SubmitEvent) => {
        e.preventDefault()
        setLoading(true)

        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username ,
                password: password,
                expiresInMins: 30,
            }),
        })
        if (response.ok) {
            setLoading(false)
            router.push("/")
        }
    }

    return (
        <div className='flex items-center justify-center min-h-[400px]'>
            <form
                onSubmit={handleLogin}
                className='flex flex-col gap-y-4 w-full max-w-sm p-6 border border-neutral-800 rounded-xl bg-neutral-950'
            >
                <div className='flex flex-col gap-y-1'>
                    <p className='text-sm text-neutral-500'>Enter your credentials to access your account.</p>
                </div>

                <div className='flex flex-col gap-y-2'>
                    <Label htmlFor="username">Username</Label>
                    <Input
                        id="username"
                        type="text"
                        placeholder="johndoe"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div className='flex flex-col gap-y-2'>
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <Button
                    type="submit"
                    className='w-full mt-2 bg-neutral-100 text-neutral-900 hover:bg-neutral-200 transition-colors'
                >
                    {loading ? "Authenticating..." : "Login"}
                </Button>
            </form>
        </div>
    )
}

export default Login