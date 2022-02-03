import { useRouter } from "next/router";

const Name = () =>{
    const router = useRouter();
    return <h1>{router.query.name}のページ</h1>
}

export default Name;