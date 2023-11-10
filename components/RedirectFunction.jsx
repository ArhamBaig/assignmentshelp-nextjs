"use client"
import { useRouter } from 'next/navigation'
const RedirectFunction = () => {
    let router = useRouter()
    router.push("/")

}

export default RedirectFunction