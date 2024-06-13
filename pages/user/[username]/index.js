import {useEffect} from "react";
import { useRouter } from "next/router";
const useUser =()=> ({user: {name:"null"},loading: false })


const Page = () => {
    const router = useRouter();
    const user = useUser();
    console.log(router);
useEffect (()=> {
    if (user.user==null){
        router.replace("/");
    }
   
},[router, user.user]);
    return (
        <div>
            <h1>This is {router.query.username} page</h1>
           <button onClick={e=>router.push(`/user/${router.query.username}/settings`)}>Open Setting Page</button> 
           <button onClick={ e=> router.replace(`/`)}>Home</button>
           <button onClick={ e=> router.reload(`/`)}>Reload</button>
        </div>
    );
};
export default Page;