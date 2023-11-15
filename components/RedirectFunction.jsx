"use client"
import { useRouter } from 'next/navigation'
const RedirectFunction = () => {
    const router = useRouter()
    router.push("/")

}

export default RedirectFunction