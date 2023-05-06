import Image from "next/image";

function Logo(props:any) {
    const {renderDefault, title} = props;

    return (
        <div className="flex items-center space-x-2">

            <Image className="rounded-full object-cover" height={50} width={50} src="https://yt3.googleusercontent.com/ytc/AGIKgqMvpbI411q1Ezn85VkdI4apH_Oe8uSELiHm45bjDg=s176-c-k-c0x00ffffff-no-rj"
            alt = "logo"
            />
            <>{renderDefault(props)}</>
        </div>

    );
}

export default Logo;