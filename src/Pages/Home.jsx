import { useJobContext } from "../context/JobContext"

export default function Home() {

    const {prova} = useJobContext()

    console.log(prova)

    return (
        <>
        <h1>Sono la home page</h1>
        <h3>
            Niki, clicca su Lavori e segui le istruzioni 🤍.
        </h3>
        </>
    )
}