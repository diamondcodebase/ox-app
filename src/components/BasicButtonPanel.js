import CustomButton from "@/components/CustomButton";
import { useRouter } from "next/navigation";

export default function BasicButtonPanel(){
    const router = useRouter();

    return (
        <div className='flex justify-center mb-4 flex-row items-center'>
            <CustomButton 
                btnLabel="Back"
                hrefLink = "" 
                onClickFn ={ router.back } 
            />
            <CustomButton 
                btnLabel="Home" 
                hrefLink ="../"
            />
        </div>
    );
}