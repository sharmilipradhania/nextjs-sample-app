import { useRouter } from "next/router";
const Page = () => {
    const router = useRouter();
    console.log(router);
    return (
        <div>
            <h1>This is settings page for {router.query.username} </h1>
            
        </div>
    );
};
export default Page;